// Fails the build if content is inconsistent. Run: npm run validate
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { walkTermFiles } from '../src/lib/content-fs.mjs'
import { termNames, normName } from '../src/lib/term-names.mjs'
import { parseTerm } from '../src/lib/parse-term.mjs'
import { scanText } from './scan-scripts.mjs'

const contentDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'content')
const readJson = (name) => JSON.parse(fs.readFileSync(path.join(contentDir, name), 'utf8'))

const categoryList = readJson('categories.json')
const categories = new Map(categoryList.map((c) => [c.id, new Set((c.subcategories ?? []).map((s) => s.id))]))
const tags = new Set(readJson('tags.json').map((t) => t.id))
const languages = fs.readdirSync(contentDir).filter((n) => fs.statSync(path.join(contentDir, n)).isDirectory())

const errors = []

// the taxonomy files themselves
for (const c of categoryList) {
  if (!c.name?.en || !c.name?.ar || !c.description?.en || !c.description?.ar) errors.push(`categories.json: "${c.id}" needs name and description in every language`)
  for (const s of c.subcategories ?? []) {
    if (!s.name?.en || !s.name?.ar) errors.push(`categories.json: subcategory "${c.id}/${s.id}" needs a name in every language`)
  }
}

const byLang = {}
for (const lang of languages) {
  byLang[lang] = new Map()
  for (const f of walkTermFiles(contentDir, lang)) {
    const where = `${lang}/${f.category}${f.subcategory ? '/' + f.subcategory : ''}/${f.file}`
    const source = fs.readFileSync(f.path, 'utf8')
    const { term, errors: errs } = parseTerm(source)
    const stray = scanText(source, lang)
    if (stray.length) errs.push(`unexpected characters (${stray.slice(0, 3).map((h) => `${h.code} on line ${h.line}`).join(', ')}): wrong writing system for this language`)
    if (lang !== 'ar' && source.match(/^translation:/m)) errs.push('"translation:" is only for the Arabic file')
    errs.forEach((e) => errors.push(`${where}: ${e}`))

    if (term.id + '.md' !== f.file) errors.push(`${where}: id "${term.id}" must match the filename`)
    if (term.category !== f.category) errors.push(`${where}: category "${term.category}" must match its folder`)
    if (!categories.has(f.category)) {
      errors.push(`${where}: unknown category`)
    } else {
      const allowed = categories.get(f.category)
      if (allowed.size === 0 && (term.subcategory || f.subcategory)) errors.push(`${where}: category "${f.category}" has no subcategories in categories.json`)
      if (allowed.size > 0) {
        if (!term.subcategory) errors.push(`${where}: missing "subcategory" (one of: ${[...allowed].join(', ')})`)
        else if (!allowed.has(term.subcategory)) errors.push(`${where}: unknown subcategory "${term.subcategory}" for ${f.category}`)
        if ((term.subcategory ?? undefined) !== f.subcategory) errors.push(`${where}: subcategory "${term.subcategory ?? ''}" must match its folder`)
      }
    }
    for (const t of term.tags) if (!tags.has(t)) errors.push(`${where}: unknown tag "${t}" (add it to content/tags.json first)`)
    if (new Set(term.tags).size !== term.tags.length) errors.push(`${where}: duplicate tag`)
    if (byLang[lang].has(term.id)) errors.push(`${where}: duplicate id`)
    byLang[lang].set(term.id, term)
  }
}

// every language must contain the same terms with the same shared metadata
const referenceLang = languages.includes('en') ? 'en' : languages[0]
const reference = byLang[referenceLang]
for (const lang of languages) {
  for (const [id, t] of byLang[lang]) {
    const ref = reference.get(id)
    if (!ref) { errors.push(`${lang}/${id}: missing in reference language`); continue }
    if (Boolean(ref.confuse) !== Boolean(t.confuse) || (ref.say?.length ?? 0) !== (t.say?.length ?? 0))
      errors.push(`${lang}/${id}: optional sections (don't confuse with / say it at work) differ from the reference language`)
    if (ref.category !== t.category || ref.subcategory !== t.subcategory || ref.level !== t.level || ref.related.join() !== t.related.join() || ref.tags.join() !== t.tags.join())
      errors.push(`${lang}/${id}: category/subcategory/level/related/tags differ from the reference language`)
    for (const r of t.related) if (!reference.has(r)) errors.push(`${lang}/${id}: related term "${r}" does not exist`)
  }
  for (const id of reference.keys()) if (!byLang[lang].has(id)) errors.push(`${lang}/${id}: translation missing`)
}

// no redundancy: one concept = one entry. Names (id, title, acronym) and aliases must never collide.
for (const lang of languages) {
  const owner = new Map() // normalised name -> term id
  const claim = (name, id, kind) => {
    const key = normName(name)
    if (!key) return
    const other = owner.get(key)
    if (other && other !== id) errors.push(`${lang}/${id}: ${kind} "${name}" is already used by "${other}". Use one entry per concept (add an alias there instead).`)
    else if (!other) owner.set(key, id)
  }
  for (const t of byLang[lang].values()) for (const n of termNames(t)) claim(n, t.id, 'name')
  for (const t of byLang[lang].values()) {
    const own = new Set(termNames(t).map(normName))
    for (const a of t.aliases) {
      if (own.has(normName(a))) errors.push(`${lang}/${t.id}: alias "${a}" repeats the term's own name`)
      else claim(a, t.id, 'alias')
    }
  }
}

if (errors.length) {
  console.error(`Content validation failed (${errors.length}):\n` + errors.map((e) => ' - ' + e).join('\n'))
  process.exit(1)
}
console.log(`Content OK: ${languages.map((l) => `${l}=${byLang[l].size}`).join(', ')} terms`)
