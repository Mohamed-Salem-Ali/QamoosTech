// Generates a pronunciation audio file for every term with Google's Gemini TTS (AI Studio API keys).
//
// TTS free quota is tiny: ~3 requests/minute and ~10 requests/DAY per model per account, so this script
// spreads work over every (API key × TTS model) "slot", tracks daily usage, and is safe to re-run each day:
// it only creates missing files. See Workspace/google-ai-studio/README.md for the numbers and strategy.
//
//   web/.env.local:
//     gemini-api-key-<account>=...   one line per account; GEMINI_API_KEY_A / GEMINI_API_KEY_B / GEMINI_API_KEY work too
//   (.env or .env.local)
//
//   npm run audio                          # all missing files, voices Kore then Puck, until quota is used up
//   npm run audio -- --only api,jwt        # just these term ids (good for a first test)
//   npm run audio -- --voices Kore         # one voice only (halves the work)
//   npm run audio -- --force               # regenerate existing files
//   npm run audio -- --compress            # convert existing WAV files to MP3
//   npm run audio -- --status              # show progress and today's remaining quota, no API calls
//
// Output: public/audio/<Voice>/<id>.mp3 (about 9 KB each; WAV if ffmpeg is missing), committed to the repo, so the site stays static and keys never ship.
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseTerm } from '../src/lib/parse-term.mjs'

const webDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(webDir, '..', 'content', 'en')
const outRoot = path.join(webDir, 'public', 'audio')
const usageFile = path.join(webDir, '.audio-usage.json') // git-ignored

// --- tiny .env.local reader (no dependency) ---
for (const file of ['.env.local', '.env']) {
  const p = path.join(webDir, file)
  if (!fs.existsSync(p)) continue
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_.-]+)\s*=\s*(.*?)\s*$/)
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}

const args = process.argv.slice(2)
const flag = (name) => {
  const i = args.indexOf(`--${name}`)
  return i === -1 ? undefined : args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true
}
const force = flag('force') === true
const statusOnly = flag('status') === true
const only = typeof flag('only') === 'string' ? new Set(flag('only').split(',')) : null
const voices = (typeof flag('voices') === 'string' ? flag('voices') : process.env.AUDIO_VOICES || 'Kore,Puck').split(',').map((v) => v.trim())
const models = (process.env.AUDIO_MODELS || 'gemini-3.8-flash-tts,gemini-3.8-flash-lite-tts').split(',').map((m) => m.trim())
const dailyLimit = Number(process.env.AUDIO_DAILY_LIMIT || 10) // requests per day per model per key
const minGapMs = Number(process.env.AUDIO_MIN_GAP_MS || 21000) // 3 requests/minute per model per key
const sampleRate = Number(process.env.AUDIO_SAMPLE_RATE || 16000)

// Any variable whose name looks like gemini-api-key / GEMINI_API_KEY_A / gemini-api-key-<account> is used as a key.
const keys = [...new Map(
  Object.entries(process.env)
    .filter(([name, value]) => /^gemini[-_]api[-_]key/i.test(name) && value)
    .map(([name, value]) => [value, [name.replace(/^gemini[-_]api[-_]key[-_]?/i, '') || 'default', value]]),
).values()]

// Gemini quotas reset at midnight Pacific time.
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(new Date())
const usage = fs.existsSync(usageFile) ? JSON.parse(fs.readFileSync(usageFile, 'utf8')) : {}
if (usage.date !== today) Object.keys(usage).forEach((k) => delete usage[k])
usage.date = today
usage.slots ??= {}
const saveUsage = () => fs.writeFileSync(usageFile, JSON.stringify(usage, null, 2))

const slots = keys.flatMap(([name, key]) =>
  models.map((model) => ({ id: `${name}:${model}`, key, model, last: 0, dead: false })),
)
const used = (s) => usage.slots[s.id] ?? 0
const remaining = (s) => (s.dead ? 0 : Math.max(0, dailyLimit - used(s)))

// Words the model reads badly. Keys are term ids; values are what to say instead.
const SPOKEN = { 'ci-cd': 'C I, C D', lgtm: 'L G T M', 'n-plus-one': 'N plus one query problem' }

// "Containerization (Docker)" -> "Containerization", "Async / Await" -> "Async or Await"
const speakable = (term, id) => SPOKEN[id] ?? term.replace(/\s*\([^)]*\)/g, '').replace(/\s+\/\s+/g, ' or ').trim()

function toWav(pcm, rate) {
  const header = Buffer.alloc(44)
  header.write('RIFF', 0)
  header.writeUInt32LE(36 + pcm.length, 4)
  header.write('WAVEfmt ', 8)
  header.writeUInt32LE(16, 16)
  header.writeUInt16LE(1, 20)
  header.writeUInt16LE(1, 22)
  header.writeUInt32LE(rate, 24)
  header.writeUInt32LE(rate * 2, 28)
  header.writeUInt16LE(2, 32)
  header.writeUInt16LE(16, 34)
  header.write('data', 36)
  header.writeUInt32LE(pcm.length, 40)
  return Buffer.concat([header, pcm])
}

/** WAV -> small mono MP3 with ffmpeg (about 10x smaller). Falls back to WAV when ffmpeg is not installed. */
function compress(wav) {
  const r = spawnSync('ffmpeg', ['-loglevel', 'error', '-i', 'pipe:0', '-ac', '1', '-codec:a', 'libmp3lame', '-b:a', '40k', '-f', 'mp3', 'pipe:1'], { input: wav, maxBuffer: 50 * 1024 * 1024 })
  return r.status === 0 && r.stdout.length > 0 ? { data: r.stdout, ext: 'mp3' } : { data: wav, ext: 'wav' }
}
const existing = (voice, id) => ['mp3', 'wav'].some((e) => fs.existsSync(path.join(outRoot, voice, `${id}.${e}`)))

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function callApi(slot, text, voice) {
  const res = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
    method: 'POST',
    headers: { 'x-goog-api-key': slot.key, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: slot.model,
      input: [
        {
          type: 'user_input',
          content: [
            {
              type: 'text',
              text,
              annotations: [{ type: 'speech_metadata', style: 'clear, natural, medium pace, neutral American English, as a software engineer would say it' }],
            },
          ],
        },
      ],
      response_format: { type: 'audio', mime_type: 'audio/wav', sample_rate: sampleRate },
      generation_config: { speech_config: [{ voice }] },
    }),
  })
  return res
}

/** Picks the slot with quota left that has waited long enough; sleeps if every slot is cooling down. */
async function nextSlot() {
  const live = slots.filter((s) => remaining(s) > 0)
  if (live.length === 0) return null
  const best = live.reduce((a, b) => (a.last <= b.last ? a : b))
  const wait = best.last + minGapMs - Date.now()
  if (wait > 0) await sleep(wait)
  return best
}

async function synthesize(text, voice) {
  for (let attempt = 0; attempt < 8; attempt++) {
    const slot = await nextSlot()
    if (!slot) return null // quota exhausted for today
    slot.last = Date.now()
    const res = await callApi(slot, text, voice)
    if (res.status === 404 || res.status === 400) {
      const body = (await res.text()).slice(0, 200)
      console.warn(`  ! ${slot.id} rejected (${res.status}), skipping this slot: ${body}`)
      slot.dead = true
      continue
    }
    if (res.status === 429) {
      const body = await res.text()
      if (/per day|daily|RPD|PerDay/i.test(body)) {
        console.warn(`  ! ${slot.id} daily quota reached`)
        usage.slots[slot.id] = dailyLimit
        saveUsage()
      } else {
        await sleep(30000) // per-minute limit, just wait
      }
      continue
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`)
    usage.slots[slot.id] = used(slot) + 1
    saveUsage()
    const json = await res.json()
    const audio = (json.steps ?? [])
      .filter((s) => s.type === 'model_output')
      .flatMap((s) => s.content ?? [])
      .filter((c) => c.type === 'audio' && c.data)
      .at(-1)
    if (!audio) throw new Error('No audio in response: ' + JSON.stringify(json).slice(0, 300))
    const bytes = Buffer.from(audio.data, 'base64')
    return bytes.subarray(0, 4).toString() === 'RIFF' ? bytes : toWav(bytes, sampleRate)
  }
  return null
}

// collect terms from the English content
const terms = []
for (const category of fs.readdirSync(contentDir)) {
  const dir = path.join(contentDir, category)
  if (!fs.statSync(dir).isDirectory()) continue
  for (const file of fs.readdirSync(dir)) {
    const { term } = parseTerm(fs.readFileSync(path.join(dir, file), 'utf8'))
    if (!only || only.has(term.id)) terms.push({ id: term.id, text: speakable(term.term, term.id) })
  }
}
if (only) for (const id of only) if (!terms.some((t) => t.id === id)) console.warn(`Unknown term id: ${id}`)

const missing = voices.flatMap((voice) =>
  terms.filter((t) => force || !existing(voice, t.id)).map((t) => ({ voice, ...t })),
)
const budget = slots.reduce((n, s) => n + remaining(s), 0)
console.log(`${terms.length} terms × ${voices.length} voice(s): ${missing.length} file(s) to create.`)
console.log(`Slots: ${slots.length} (keys: ${keys.map(([n]) => n).join(',') || 'none'}), requests left today: ${budget}.`)
if (budget > 0 && missing.length > 0) {
  console.log(`≈ ${Math.ceil(missing.length / Math.max(budget, 1))} day(s) at this quota.`)
}
if (statusOnly) process.exit(0)

if (flag('compress') === true) {
  let n = 0
  for (const voice of fs.existsSync(outRoot) ? fs.readdirSync(outRoot) : []) {
    for (const f of fs.readdirSync(path.join(outRoot, voice)).filter((x) => x.endsWith('.wav'))) {
      const out = compress(fs.readFileSync(path.join(outRoot, voice, f)))
      if (out.ext !== 'mp3') { console.error('ffmpeg not found; install it to compress.'); process.exit(1) }
      fs.writeFileSync(path.join(outRoot, voice, f.replace(/\.wav$/, '.mp3')), out.data)
      fs.rmSync(path.join(outRoot, voice, f))
      n++
    }
  }
  console.log(`Compressed ${n} file(s) to MP3.`)
  process.exit(0)
}

if (keys.length === 0) {
  console.error('Missing API key. Add a line like gemini-api-key-<account>=... to web/.env.local, never commit that file.')
  process.exit(1)
}

let made = 0
let failed = 0
for (const t of missing) {
  fs.mkdirSync(path.join(outRoot, t.voice), { recursive: true })
  try {
    const wav = await synthesize(t.text, t.voice)
    if (!wav) {
      console.log('\nNo quota left for today. Re-run tomorrow (after midnight Pacific time); it continues where it stopped.')
      break
    }
    const out = compress(wav)
    fs.writeFileSync(path.join(outRoot, t.voice, `${t.id}.${out.ext}`), out.data)
    for (const e of ['wav', 'mp3']) if (e !== out.ext) fs.rmSync(path.join(outRoot, t.voice, `${t.id}.${e}`), { force: true })
    made++
    console.log(`✓ ${t.voice}/${t.id}  "${t.text}"`)
  } catch (e) {
    failed++
    console.error(`✗ ${t.voice}/${t.id}: ${e.message}`)
  }
}
console.log(`\nDone: ${made} created, ${failed} failed, ${missing.length - made - failed} still missing.`)
process.exit(failed ? 1 : 0)
