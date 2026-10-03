// CLI for the AI model pool.
//   npm run ai -- status     quota left today per tier, key and model (no API calls)
//   npm run ai -- models     lists the models your keys can really use and flags unknown IDs in the pool (no quota used)
//   npm run ai -- ping       sends one tiny request to every key × model slot to prove it works (uses 1 request each)
import { MODELS, TIERS, generate, getSlots, loadKeys, mapPool, remaining } from './lib/ai-pool.mjs'

const [command = 'status'] = process.argv.slice(2)
const slots = getSlots()

function status() {
  const keys = loadKeys()
  console.log(`Keys: ${keys.map((k) => k.name).join(', ') || 'none'}`)
  for (const [tier, models] of Object.entries(TIERS)) {
    const tierSlots = slots.filter((s) => models.includes(s.model))
    const left = tierSlots.reduce((n, s) => n + remaining(s), 0)
    console.log(`\n${tier.toUpperCase()}  (${left} requests left today)`)
    for (const model of models) {
      const parts = tierSlots.filter((s) => s.model === model).map((s) => `${s.key.name}: ${remaining(s)}/${s.rpd}`)
      console.log(`  ${model.padEnd(24)} ${parts.join('   ')}`)
    }
  }
  const total = slots.reduce((n, s) => n + remaining(s), 0)
  console.log(`\nTotal requests left today across the pool: ${total}`)
}

async function models() {
  const key = loadKeys()[0]
  if (!key) return console.error('No API key found.')
  const found = new Set()
  let token = ''
  do {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?pageSize=200${token ? `&pageToken=${token}` : ''}`, { headers: { 'x-goog-api-key': key.value } })
    const j = await r.json()
    if (!r.ok) return console.error(r.status, JSON.stringify(j).slice(0, 200))
    for (const m of j.models ?? []) if (m.supportedGenerationMethods?.includes('generateContent')) found.add(m.name.replace('models/', ''))
    token = j.nextPageToken ?? ''
  } while (token)
  console.log(`${found.size} models support generateContent for key "${key.name}".\n`)
  for (const id of Object.keys(MODELS)) console.log(`${found.has(id) ? '✓' : '✗ MISSING'}  ${id}`)
  const extra = [...found].filter((id) => /^(gemini|gemma)/.test(id) && !MODELS[id] && !/image|tts|live|audio|robotics|computer|embedding|transcribe|omni|customtools|preview-\d/.test(id))
  if (extra.length) console.log(`\nAvailable but not in the pool: ${extra.join(', ')}`)
}

async function ping() {
  const results = []
  // one request in flight per key so a key's different models can be tested without breaking per-minute limits
  await mapPool(
    slots,
    async (slot) => {
      const started = Date.now()
      try {
        const r = await generate({ pin: slot, prompt: 'Reply with the single word OK.', maxOutputTokens: 1024, attempts: 1 })
        results.push({ slot, ok: true, ms: Date.now() - started, text: r.text.trim().slice(0, 20) })
      } catch (e) {
        results.push({ slot, ok: false, ms: Date.now() - started, text: e.message.slice(0, 90) })
      }
    },
    4,
  )
  results.sort((a, b) => a.slot.id.localeCompare(b.slot.id))
  for (const r of results) console.log(`${r.ok ? '✓' : '✗'} ${r.slot.id.padEnd(44)} ${String(r.ms).padStart(5)} ms  ${r.text}`)
  console.log(`
${results.filter((r) => r.ok).length}/${results.length} slots working.`)
}

if (command === 'status') status()
else if (command === 'models') await models()
else if (command === 'ping') await ping()
else console.error('Usage: npm run ai -- status | models | ping')
