// A pool of (API key × model) "slots" for Google AI Studio text models.
//
// - Every key in .env/.env.local named gemini-api-key-<account> (or GEMINI_API_KEY_*) is used.
// - Models are grouped in tiers; a request tries the tier's slots, spreads load, respects per-minute pacing and
//   per-day budgets (tracked in .ai-usage.json, reset at midnight Pacific), and falls back on 429/5xx/bad output.
// - Quotas are per account per model, so more keys × more models = more free requests.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const webDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const usageFile = path.join(webDir, '.ai-usage.json') // git-ignored

for (const file of ['.env.local', '.env']) {
  const p = path.join(webDir, file)
  if (!fs.existsSync(p)) continue
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_.-]+)\s*=\s*(.*?)\s*$/)
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}

/** Real model IDs (checked with the ListModels API on 2026-10-03; the 2.5 Flash models return 404 "no longer available to new users") and their free limits (requests per minute / per day). */
export const MODELS = {
  'gemma-4-31b-it': { rpm: 30, rpd: 14400, tpm: 16000, gemma: true },
  'gemma-4-26b-a4b-it': { rpm: 30, rpd: 14400, tpm: 16000, gemma: true },
  'gemini-3.5-flash-lite': { rpm: 15, rpd: 500, tpm: 250000 },
  'gemini-3.1-flash-lite': { rpm: 15, rpd: 500, tpm: 250000 },
  'gemini-3.8-flash': { rpm: 5, rpd: 20, tpm: 250000 },
  'gemini-3.7-flash': { rpm: 5, rpd: 20, tpm: 250000 },
  'gemini-3.6-flash': { rpm: 5, rpd: 20, tpm: 250000 },
  'gemini-3.5-flash': { rpm: 5, rpd: 20, tpm: 250000 },
  'gemini-3-flash-preview': { rpm: 5, rpd: 20, tpm: 250000 },
}

/** What each tier is for. Order inside a tier = preference. */
export const TIERS = {
  bulk: ['gemma-4-26b-a4b-it', 'gemma-4-31b-it'], // thousands/day; 26b first (about 2s vs 30s+)
  draft: ['gemini-3.5-flash-lite', 'gemini-3.1-flash-lite'], // 500/day each: drafting, quizzes, chat
  review: ['gemini-3.8-flash', 'gemini-3.7-flash', 'gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-3-flash-preview'], // 20/day each: careful second opinions
  backup: [], // reserved for future fallbacks
}

export function loadKeys() {
  const seen = new Set()
  const keys = []
  for (const [name, value] of Object.entries(process.env)) {
    if (!/^gemini[-_]api[-_]key/i.test(name) || !value || seen.has(value)) continue
    seen.add(value)
    keys.push({ name: name.replace(/^gemini[-_]api[-_]key[-_]?/i, '') || 'default', value })
  }
  return keys
}

const today = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(new Date())
function readUsage() {
  const u = fs.existsSync(usageFile) ? JSON.parse(fs.readFileSync(usageFile, 'utf8')) : {}
  if (u.date !== today()) return { date: today(), slots: {} }
  return u
}
const usage = readUsage()
const saveUsage = () => fs.writeFileSync(usageFile, JSON.stringify(usage, null, 2))
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const slots = []
for (const key of loadKeys()) {
  for (const [model, limits] of Object.entries(MODELS)) {
    slots.push({ id: `${key.name}:${model}`, key, model, ...limits, nextFree: 0, dead: false, exhausted: false })
  }
}
export const getSlots = () => slots
export const usedToday = (slot) => usage.slots[slot.id] ?? 0
export const remaining = (slot) => (slot.dead || slot.exhausted ? 0 : Math.max(0, slot.rpd - usedToday(slot)))
export const gap = (slot, tokens = 0) => Math.max(Math.ceil(60000 / slot.rpm) + 500, Math.ceil((tokens / (slot.tpm ?? 250000)) * 60000))

/** Reserve the best slot in the given tiers (least used share of its daily budget, free soonest). */
function reserve(tiers, skip, tokens) {
  const models = new Set(tiers.flatMap((t) => TIERS[t] ?? []))
  const candidates = slots.filter((s) => models.has(s.model) && remaining(s) > 0 && !skip.has(s.id))
  if (candidates.length === 0) return null
  // earlier tier first, then the slot that is free soonest, then the one with the most budget left
  const tierRank = (s) => tiers.findIndex((t) => (TIERS[t] ?? []).includes(s.model))
  candidates.sort((a, b) => tierRank(a) - tierRank(b) || Math.max(a.nextFree, Date.now()) - Math.max(b.nextFree, Date.now()) || remaining(b) / b.rpd - remaining(a) / a.rpd)
  const slot = candidates[0]
  const start = Math.max(Date.now(), slot.nextFree)
  slot.nextFree = start + gap(slot, tokens)
  return { slot, wait: start - Date.now() }
}

function extractText(json) {
  return (json.candidates?.[0]?.content?.parts ?? [])
    .filter((p) => typeof p.text === 'string' && !p.thought)
    .map((p) => p.text)
    .join('')
}

/** Pulls the first JSON object/array out of a model answer (handles ```json fences). */
export function extractJson(text) {
  const cleaned = text.replace(/```(?:json)?/gi, '')
  const match = cleaned.match(/[\[{][\s\S]*[\]}]/)
  if (!match) throw new Error('no JSON in answer')
  return JSON.parse(match[0])
}

/**
 * generate({ tiers: ['draft', 'bulk'], system, prompt, json: true, validate })
 * `pin` forces one specific slot (used by `ai ping`). Returns { text | data, model, key }. `validate(data)` may throw to reject an answer and try another model.
 */
export async function generate({ tiers = ['draft', 'bulk'], system = '', prompt, json = false, validate, temperature = 0.4, maxOutputTokens = 4096, attempts = 12, pin }) {
  // rough token estimate; counts toward each model's tokens-per-minute limit
  const tokens = Math.ceil((system.length + prompt.length) / 2.5) + maxOutputTokens / 2
  if (slots.length === 0) throw new Error('No API keys found. Add gemini-api-key-<account>=... to web/.env.local')
  const skip = new Set()
  let lastError
  for (let i = 0; i < attempts; i++) {
    const r = pin
      ? (() => { const start = Math.max(Date.now(), pin.nextFree); pin.nextFree = start + gap(pin, tokens); return { slot: pin, wait: start - Date.now() } })()
      : reserve(tiers, skip, tokens)
    if (!r) throw new Error(`No quota left in tiers [${tiers.join(', ')}] today.${lastError ? ' Last error: ' + lastError.message : ''}`)
    const { slot } = r
    if (r.wait > 0) await sleep(r.wait)
    // Gemma has no system-instruction field, so the instruction goes into the prompt.
    const text = slot.gemma && system ? `${system}\n\n${prompt}` : prompt
    const body = {
      contents: [{ role: 'user', parts: [{ text }] }],
      generationConfig: { temperature, maxOutputTokens },
      ...(system && !slot.gemma ? { systemInstruction: { parts: [{ text: system }] } } : {}),
    }
    let res
    try {
      res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${slot.model}:generateContent`, {
        method: 'POST',
        headers: { 'x-goog-api-key': slot.key.value, 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (e) {
      lastError = e
      continue
    }
    if (res.status === 429) {
      const msg = await res.text()
      if (/per ?day|daily|PerDay/i.test(msg)) {
        slot.exhausted = true
        usage.slots[slot.id] = slot.rpd
        saveUsage()
      } else {
        slot.nextFree = Date.now() + 30000
      }
      lastError = new Error(`429 ${slot.id}`)
      continue
    }
    if (res.status === 404 || res.status === 400 || res.status === 403) {
      slot.dead = true
      lastError = new Error(`${res.status} ${slot.id}: ${(await res.text()).slice(0, 160)}`)
      continue
    }
    if (!res.ok) {
      skip.add(slot.id)
      lastError = new Error(`${res.status} ${slot.id}`)
      continue
    }
    usage.slots[slot.id] = usedToday(slot) + 1
    saveUsage()
    const answer = extractText(await res.json())
    try {
      if (!answer.trim()) throw new Error('empty answer')
      if (!json) return { text: answer, model: slot.model, key: slot.key.name }
      const data = extractJson(answer)
      if (validate) validate(data)
      return { data, text: answer, model: slot.model, key: slot.key.name }
    } catch (e) {
      lastError = new Error(`${slot.id}: ${e.message}`)
      skip.add(slot.id) // try a different model next
    }
  }
  throw lastError ?? new Error('generate failed')
}

/** Runs fn over items with several requests in flight, so different keys/models work at the same time. */
export async function mapPool(items, fn, concurrency = 4) {
  const results = new Array(items.length)
  let next = 0
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (next < items.length) {
        const i = next++
        results[i] = await fn(items[i], i)
      }
    }),
  )
  return results
}
