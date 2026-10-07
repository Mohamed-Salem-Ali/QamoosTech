// Adds the optional "Don't confuse with" and "Say it at work" sections to term files using the AI model pool.
// Idempotent: terms that already have a "Say it at work" section are skipped.
//
//   npm run enrich                       every term that has none yet
//   npm run enrich -- --only rag,jwt     just these ids
//   npm run enrich -- --limit 10         first 10 (smoke test)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { generate, mapPool } from './lib/ai-pool.mjs'
import { findTermFile, walkTermFiles } from '../src/lib/content-fs.mjs'
import { parseTerm } from '../src/lib/parse-term.mjs'
import { scanText } from './scan-scripts.mjs'

const webDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(webDir, '..', 'content')

const args = process.argv.slice(2)
const flag = (n) => {
  const i = args.indexOf(`--${n}`)
  return i === -1 ? undefined : args[i + 1]
}
const only = flag('only') ? new Set(flag('only').split(',')) : null
const limit = flag('limit') ? Number(flag('limit')) : Infinity

const H = {
  en: { confuse: "Don't confuse with", say: 'Say it at work' },
  ar: { confuse: 'لا تخلطه مع', say: 'قلها في العمل' },
}

const SYSTEM = `You enrich entries of QamoosTech, a bilingual (English/Arabic) glossary for Arabic-speaking software engineers.
You get ONE existing term (English file and Arabic file). Write two extras for it.

1. "confuse": a short note about the one term it is most often MIXED UP with (for example "authentication vs authorization", "deploy vs release", "hashing vs encryption"). 1-2 FULL sentences (at least 15 words): name the other term and say precisely how they differ, for example "Rollback returns to the previous version, while a roll-forward fixes the problem with a new release." If there is NO real, commonly confused term, use null. Do not invent a confusion just to fill the field.
2. "say": exactly 2 sentences a working engineer could really say or write: one in a meeting or chat (spoken, casual-professional), one in an email, ticket, or pull request (written, polite). Each must use the term naturally and be DIFFERENT from the examples already in the file. Generic only: no real companies, clients, people, or private numbers.

Languages:
- English: plain and natural.
- Arabic: simple Modern Standard Arabic (never dialect), correct spelling and grammar, natural phrasing. Keep widely used English technical terms in English. For "say", the Arabic is the translation of the English sentence and must match its meaning.
- Use ONLY Arabic and Latin letters (plus normal punctuation and digits); never any other script.

Answer with JSON only, exactly this shape:
{"confuse":null | {"en":"...","ar":"..."},"say":[{"en":"...","ar":"..."},{"en":"...","ar":"..."}]}`

const terms = []
for (const f of walkTermFiles(contentDir, 'en')) {
  const id = f.file.replace(/\.md$/, '')
  if (only && !only.has(id)) continue
  const en = fs.readFileSync(f.path, 'utf8')
    if (parseTerm(en).term.say) continue // already enriched
  terms.push({ id, category: f.category, en, ar: fs.readFileSync(findTermFile(contentDir, 'ar', id).path, 'utf8') })
}
const batch = terms.slice(0, limit)
console.log(`Enriching ${batch.length} term(s)…`)

let ok = 0
const failed = []
let done = 0
await mapPool(
  batch,
  async (t) => {
    try {
      const r = await generate({
        tiers: ['draft', 'bulk'],
        system: SYSTEM,
        prompt: `TERM ID: ${t.id}\n\n=== ENGLISH FILE ===\n${t.en}\n\n=== ARABIC FILE ===\n${t.ar}`,
        json: true,
        temperature: 0.4,
        maxOutputTokens: 1500,
        validate: (d) => {
          if (!Array.isArray(d.say) || d.say.length !== 2) throw new Error('need exactly 2 "say" sentences')
          for (const s of d.say) {
            if (!s?.en?.trim() || !s?.ar?.trim()) throw new Error('empty say sentence')
            if (!/[؀-ۿ]/.test(s.ar)) throw new Error('say.ar has no Arabic')
            if (/[؀-ۿ]/.test(s.en)) throw new Error('say.en contains Arabic')
          }
          if (d.confuse) {
            if (!d.confuse.en?.trim() || !d.confuse.ar?.trim()) throw new Error('empty confuse')
            if (d.confuse.en.trim().length < 70 || d.confuse.ar.trim().length < 40) throw new Error('confuse note is too short: explain the difference in full sentences')
            if (!/[؀-ۿ]/.test(d.confuse.ar)) throw new Error('confuse.ar has no Arabic')
            if (/[؀-ۿ]/.test(d.confuse.en)) throw new Error('confuse.en contains Arabic')
          }
        },
      })
      const { confuse, say } = r.data
      const build = (lang) => {
        let out = '\n'
        if (confuse) out += `## ${H[lang].confuse}\n\n${confuse[lang].trim()}\n\n`
        out += `## ${H[lang].say}\n\n` + say.map((s) => `- ${s.en.trim()}${lang === 'ar' ? `\n  - ${s.ar.trim()}` : ''}`).join('\n') + '\n'
        return out
      }
      const next = { en: t.en.trimEnd() + '\n' + build('en'), ar: t.ar.trimEnd() + '\n' + build('ar') }
      for (const lang of ['en', 'ar']) {
        const { errors } = parseTerm(next[lang])
        if (errors.length) throw new Error(`${lang}: ${errors.join('; ')}`)
        if (scanText(next[lang], lang).length) throw new Error(`${lang}: wrong-script characters`)
      }
      for (const lang of ['en', 'ar']) fs.writeFileSync(findTermFile(contentDir, lang, t.id).path, next[lang])
      ok++
    } catch (e) {
      failed.push(`${t.id}: ${e.message.slice(0, 120)}`)
    }
    process.stdout.write(`\r${++done}/${batch.length} `)
  },
  4,
)
console.log(`\nEnriched ${ok} term(s). ${failed.length} failed:`)
for (const f of failed) console.log('  - ' + f)
