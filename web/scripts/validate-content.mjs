// Fails the build if content is inconsistent. Run: npm run validate
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseTerm } from '../src/lib/parse-term.mjs'
import { scanText } from './scan-scripts.mjs'

const contentDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'content')
const categories = JSON.parse(fs.readFileSync(path.join(contentDir, 'categories.json'), 'utf8')).map((c) => c.id)
const languages = fs.readdirSync(contentDir).filter((n) => fs.statSync(path.join(contentDir, n)).isDirectory())

const errors = []
const byLang = {}
for (const lang of languages) {
  byLang[lang] = new Map()
  for (const category of fs.existsSync(path.join(contentDir, lang)) ? fs.readdirSync(path.join(contentDir, lang)) : []) {
    const dir = path.join(contentDir, lang, category)
    if (!fs.statSync(dir).isDirectory()) continue
    for (const file of fs.readdirSync(dir)) {
      const where = `${lang}/${category}/${file}`
      const source = fs.readFileSync(path.join(dir, file), 'utf8')
      const { term, errors: errs } = parseTerm(source)
      const stray = scanText(source, lang)
      if (stray.length) errs.push(`unexpected characters (${stray.slice(0, 3).map((h) => `${h.code} on line ${h.line}`).join(', ')}): wrong writing system for this language`)
      if (lang !== 'ar' && source.match(/^translation:/m)) errs.push('"translation:" is only for the Arabic file')
      errs.forEach((e) => errors.push(`${where}: ${e}`))
      if (term.id + '.md' !== file) errors.push(`${where}: id "${term.id}" must match the filename`)
      if (term.category !== category) errors.push(`${where}: category "${term.category}" must match its folder`)
      if (!categories.includes(category)) errors.push(`${where}: unknown category`)
      if (byLang[lang].has(term.id)) errors.push(`${where}: duplicate id`)
      byLang[lang].set(term.id, term)
    }
  }
}

// every language must contain the same terms with the same shared metadata
const reference = byLang[languages.includes('en') ? 'en' : languages[0]]
for (const lang of languages) {
  for (const [id, t] of byLang[lang]) {
    const ref = reference.get(id)
    if (!ref) { errors.push(`${lang}/${id}: missing in reference language`); continue }
    if (ref.category !== t.category || ref.level !== t.level || ref.related.join() !== t.related.join())
      errors.push(`${lang}/${id}: category/level/related differ from the reference language`)
    for (const r of t.related) if (!reference.has(r)) errors.push(`${lang}/${id}: related term "${r}" does not exist`)
  }
  for (const id of reference.keys()) if (!byLang[lang].has(id)) errors.push(`${lang}/${id}: translation missing`)
}

if (errors.length) {
  console.error(`Content validation failed (${errors.length}):\n` + errors.map((e) => ' - ' + e).join('\n'))
  process.exit(1)
}
console.log(`Content OK: ${languages.map((l) => `${l}=${byLang[l].size}`).join(', ')} terms`)
