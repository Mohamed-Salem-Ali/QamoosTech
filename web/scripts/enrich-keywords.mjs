// Adds a `keywords:` list (natural-language search phrases) to every term's front matter using the AI model pool.
// The site's search matches these phrases, so "stop users spamming my API" finds "Rate Limiting" without any runtime AI.
// Idempotent: files that already have `keywords:` are skipped.
//
//   npm run keywords                      every term without keywords
//   npm run keywords -- --only rag,jwt    just these ids
//   npm run keywords -- --limit 10        first 10 (smoke test)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { generate, mapPool } from './lib/ai-pool.mjs'
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

const SYSTEM = `You help people find terms in QamoosTech, a bilingual (English/Arabic) glossary for software engineers.
You get ONE term (English file and Arabic file). Write search phrases people might TYPE to find it, when they do not know its name.
Return two lists:
- "en": 8 to 12 English phrases. Mix: plain-words descriptions of the problem it solves ("stop users spamming my api"), other names and synonyms, abbreviations, common misspellings, related actions ("retry failed payment safely"). 2 to 6 words each, lowercase.
- "ar": 8 to 12 Arabic phrases in simple Modern Standard Arabic (never dialect): how an Arabic speaker would describe it or ask for it ("منع المستخدمين من إرسال طلبات كثيرة"), common Arabic names, and transliterations of the English name. 2 to 6 words each.
Rules: no single generic words ("system", "data", "code"); no phrase that is just the term itself; do not invent unrelated terms; no real company names. Use ONLY Arabic letters in "ar" (English technical words allowed) and Latin letters in "en".
Answer with JSON only: {"en":["..."],"ar":["..."]}`

const terms = []
for (const category of fs.readdirSync(path.join(contentDir, 'en'))) {
  for (const f of fs.readdirSync(path.join(contentDir, 'en', category))) {
    const id = f.replace(/\.md$/, '')
    if (only && !only.has(id)) continue
    const en = fs.readFileSync(path.join(contentDir, 'en', category, f), 'utf8')
    if (/^keywords:/m.test(en)) continue
    terms.push({ id, category, en, ar: fs.readFileSync(path.join(contentDir, 'ar', category, f), 'utf8') })
  }
}
const batch = terms.slice(0, limit)
console.log(`Generating search phrases for ${batch.length} term(s)…`)

// insert `keywords: [...]` as the last front matter line (valid YAML: a JSON array)
function withKeywords(source, list) {
  const line = `keywords: ${JSON.stringify(list)}`
  return source.replace(/^(---\r?\n[\s\S]*?)(\r?\n---)/, (_, head, tail) => `${head}\n${line}${tail}`)
}
const clean = (arr, isArabic) => [...new Set(arr.map((s) => String(s).trim().replace(/\s+/g, ' ')).filter((s) => s.length >= 4 && s.length <= 60))]
  .filter((s) => (isArabic ? /[؀-ۿ]/.test(s) : !/[؀-ۿ]/.test(s)))

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
        temperature: 0.5,
        maxOutputTokens: 1500,
        validate: (d) => {
          if (!Array.isArray(d.en) || !Array.isArray(d.ar)) throw new Error('need en and ar arrays')
          if (clean(d.en, false).length < 6) throw new Error('fewer than 6 usable English phrases')
          if (clean(d.ar, true).length < 6) throw new Error('fewer than 6 usable Arabic phrases')
        },
      })
      const en = clean(r.data.en, false).slice(0, 12).map((s) => s.toLowerCase())
      const ar = clean(r.data.ar, true).slice(0, 12)
      for (const [lang, list] of [['en', [...en, ...ar]], ['ar', [...ar, ...en]]]) {
        // each file carries both languages' phrases, so people can search in either language from any page
        const file = path.join(contentDir, lang, t.category, `${t.id}.md`)
        const next = withKeywords(lang === 'en' ? t.en : t.ar, list)
        const { errors } = parseTerm(next)
        if (errors.length) throw new Error(`${lang}: ${errors.join('; ')}`)
        if (scanText(next, lang).length) throw new Error(`${lang}: wrong-script characters`)
        fs.writeFileSync(file, next)
      }
      ok++
    } catch (e) {
      failed.push(`${t.id}: ${e.message.slice(0, 120)}`)
    }
    process.stdout.write(`\r${++done}/${batch.length} `)
  },
  4,
)
console.log(`\nDone: ${ok} term(s). ${failed.length} failed:`)
for (const f of failed) console.log('  - ' + f)
