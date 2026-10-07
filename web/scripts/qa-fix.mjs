// Applies QA findings by asking a stronger model (review tier) to correct each affected file, then validates the result.
// Reads docs/qa-report-*.json (from `npm run qa`) plus the stray-script scan. Never touches English example sentences.
//
//   npm run qa-fix -- --report docs/qa-report-drafts-2026-10-03.json            fix every term that has findings
//   npm run qa-fix -- --report ... --only call-stack,salt                        just these ids
//   npm run qa-fix -- --report ... --min medium                                  only medium/high (default: all)
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
const reportPath = flag('report')
if (!reportPath) {
  console.error('Usage: npm run qa-fix -- --report docs/qa-report-<name>.json [--only a,b] [--min high|medium|low]')
  process.exit(1)
}
const only = flag('only') ? new Set(flag('only').split(',')) : null
const rank = { high: 0, medium: 1, low: 2 }
const min = rank[flag('min') ?? 'low']

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
const jobs = new Map() // id -> { category, ar: [issue strings], en: [issue strings] }
const add = (id, category, lang, text) => {
  if (!jobs.has(id)) jobs.set(id, { category, ar: [], en: [] })
  jobs.get(id)[lang].push(text)
}
for (const r of report.results) {
  for (const i of r.issues) {
    if (rank[i.severity] > min) continue
    add(r.id, r.category, i.lang, `[${i.severity}] ${i.field}: ${i.problem}${i.suggestion ? ` Suggested fix: ${i.suggestion}` : ''}`)
  }
}
// stray-script findings are always included
for (const lang of ['ar', 'en']) {
  for (const file of walkTermFiles(contentDir, lang)) {
    const text = fs.readFileSync(file.path, 'utf8')
    const hits = scanText(text, lang)
    if (hits.length) add(file.file.replace(/\.md$/, ''), file.category, lang, `[high] other: contains characters from the wrong writing system (${hits.slice(0, 3).map((h) => h.code).join(', ')}) on line ${hits[0].line}. Rewrite that text correctly.`)
  }
}
await mapPool(
  targets,
  async ([id, job]) => {
    for (const lang of ['ar', 'en']) {
      if (job[lang].length === 0) continue
      const file = findTermFile(contentDir, lang, id)?.path
      if (!file || !fs.existsSync(file)) { failed.push(`${lang}/${id}: file missing`); continue }
      const original = fs.readFileSync(file, 'utf8')
      const before = parseTerm(original).term
      try {
        const r = await generate({
          tiers: ['review', 'draft'],
          system: SYSTEM,
          prompt: `LANGUAGE OF THIS FILE: ${lang === 'ar' ? 'Arabic' : 'English'}\n\nPROBLEMS:\n${job[lang].map((t, i) => `${i + 1}. ${t}`).join('\n')}\n\nFILE:\n${original}`,
          json: true,
          temperature: 0.1,
          maxOutputTokens: 4096,
          validate: (d) => {
            const { term, errors } = parseTerm(String(d.file ?? ''))
            if (errors.length) throw new Error(errors.join('; '))
            for (const k of ['id', 'category', 'level']) if (term[k] !== before[k]) throw new Error(`${k} changed`)
            if (term.related.join() !== before.related.join()) throw new Error('related changed')
            if (term.term !== before.term) throw new Error('term name changed')
            if (term.examples.length !== before.examples.length) throw new Error('example count changed')
            term.examples.forEach((e, i) => { if (e.text !== before.examples[i].text) throw new Error('an English example sentence was changed') })
            if (scanText(d.file, lang).length) throw new Error('still has wrong-script characters')
          },
        })
        const text = r.data.file.replace(/\r\n/g, '\n').replace(/^(## .*)\n(?!\n)/gm, '$1\n\n').trimEnd() + '\n'
        fs.writeFileSync(file, text)
        ok++
      } catch (e) {
        failed.push(`${lang}/${id}: ${e.message.slice(0, 120)}`)
      }
    }
    process.stdout.write(`\r${++done}/${targets.length} `)
  },
  4,
)
console.log(`\nFixed ${ok} file(s). ${failed.length} could not be fixed automatically:`)
for (const f of failed) console.log('  - ' + f)
