// Term pipeline: the AI pool proposes and drafts, validators check, a human approves. Nothing reaches content/ by itself.
//
//   npm run terms -- suggest [--per 18] [--only databases,devops]   propose new term ideas -> docs/term-candidates.md
//   npm run terms -- draft [--file docs/term-approved.txt]           write EN+AR drafts for approved ids -> drafts/<category>/
//   npm run terms -- promote [--ids a,b,c]                           copy reviewed drafts into content/ (validates first)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { generate, mapPool } from './lib/ai-pool.mjs'
import { parseTerm } from '../src/lib/parse-term.mjs'

const webDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const repoDir = path.join(webDir, '..')
const contentDir = path.join(repoDir, 'content')
const docsDir = path.join(repoDir, 'docs')
const draftsDir = path.join(repoDir, 'drafts')

const [command = 'suggest', ...rest] = process.argv.slice(2)
const flag = (n) => {
  const i = rest.indexOf(`--${n}`)
  return i === -1 ? undefined : rest[i + 1]
}

const categories = JSON.parse(fs.readFileSync(path.join(contentDir, 'categories.json'), 'utf8'))

function existingTerms() {
  const out = []
  for (const c of fs.readdirSync(path.join(contentDir, 'en'))) {
    for (const f of fs.readdirSync(path.join(contentDir, 'en', c))) {
      const { term } = parseTerm(fs.readFileSync(path.join(contentDir, 'en', c, f), 'utf8'))
      out.push({ id: term.id, term: term.term, category: c })
    }
  }
  return out
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// ------------------------------------------------------------------ suggest
async function suggest() {
  const per = Number(flag('per') ?? 18)
  const only = flag('only') ? new Set(flag('only').split(',')) : null
  const have = existingTerms()
  const haveIds = new Set(have.map((t) => t.id))
  const haveNames = new Set(have.map((t) => t.term.toLowerCase()))
  const list = categories.filter((c) => !only || only.has(c.id))

  const SYSTEM = `You help build QamoosTech, a bilingual glossary of the English words software engineers meet daily at work, in client communication, and in courses.
The main reader is a backend-focused engineer working mostly with Python/Django, Node.js/NestJS and TypeScript, PostgreSQL, AWS, Docker, CI/CD, REST APIs, multi-tenant SaaS, and AI features, who also does freelance work with clients and reads English documentation and courses.
Propose NEW terms for one category. Rules:
- Real words or phrases engineers actually say or read. No invented terms. No duplicates of the existing terms you are given.
- Beginner to intermediate level. One idea per term. Prefer terms that are confusing for non-native speakers or very common in daily work.
- id = lowercase kebab-case ASCII (for example "connection-pool").
- priority: 1 = used almost every week in this reader's work, 2 = common, 3 = nice to know.
Answer with JSON only: {"terms":[{"id":"...","term":"Display Name","level":"beginner|intermediate","priority":1,"why":"one short sentence"}]}`

  const results = await mapPool(
    list,
    async (c) => {
      const mine = have.filter((t) => t.category === c.id).map((t) => t.term).join(', ')
      const all = have.map((t) => t.term).join(', ')
      try {
        const r = await generate({
          tiers: ['draft', 'bulk'],
          system: SYSTEM,
          prompt: `CATEGORY: ${c.name.en} (${c.id}) - ${c.description.en}\nTERMS ALREADY IN THIS CATEGORY: ${mine}\nALL EXISTING TERMS (do not repeat any): ${all}\n\nPropose ${per + 6} new terms for this category.`,
          json: true,
          validate: (d) => { if (!Array.isArray(d.terms) || d.terms.length === 0) throw new Error('no terms') },
          temperature: 0.5,
          maxOutputTokens: 4096,
        })
        const seen = new Set()
        const terms = r.data.terms
          .map((t) => ({ ...t, id: slug(t.id || t.term), level: t.level === 'intermediate' ? 'intermediate' : 'beginner', priority: [1, 2, 3].includes(t.priority) ? t.priority : 2 }))
          .filter((t) => t.term && !haveIds.has(t.id) && !haveNames.has(String(t.term).toLowerCase()) && !seen.has(t.id) && seen.add(t.id))
          .sort((a, b) => a.priority - b.priority)
          .slice(0, per)
        console.log(`✓ ${c.id}: ${terms.length} candidates (${r.model})`)
        return { category: c.id, terms }
      } catch (e) {
        console.error(`✗ ${c.id}: ${e.message}`)
        return { category: c.id, terms: [] }
      }
    },
    4,
  )

  fs.mkdirSync(docsDir, { recursive: true })
  const total = results.reduce((n, r) => n + r.terms.length, 0)
  let md = `# Term candidates (${new Date().toISOString().slice(0, 10)})\n\nProposed by the AI pool. Edit this file: **delete the lines you do not want**, then copy the kept ids (the text in backticks) into \`docs/term-approved.txt\`, one per line, or tell Claude which to keep.\nPriority 1 = weekly use in your work, 2 = common, 3 = nice to know. Total candidates: ${total}.\n`
  for (const r of results) {
    const c = categories.find((x) => x.id === r.category)
    md += `\n## ${c.name.en} (${r.terms.length})\n\n`
    for (const t of r.terms) md += `- [P${t.priority}] \`${t.id}\` **${t.term}** (${t.level}): ${t.why}\n`
  }
  fs.writeFileSync(path.join(docsDir, 'term-candidates.md'), md)
  fs.writeFileSync(path.join(docsDir, 'term-candidates.json'), JSON.stringify(results, null, 2))
  console.log(`\n${total} candidates written to docs/term-candidates.md`)
}

// ------------------------------------------------------------------ draft
const FORMAT_EN = `---
id: rate-limiting
category: web-apis
level: intermediate
related: [status-code]
term: "Rate Limiting"
pronunciation: "RAYT LIM-it-ing"
---

## Definition

One or two clear sentences.

## Where you hear it

Short phrase listing where engineers meet the term.

## Examples

- First short, generic English sentence.
- Second short, generic English sentence.

## Common mistake

One or two sentences about the usual misunderstanding or misuse.`

const DRAFT_SYSTEM = `You write entries for QamoosTech, a bilingual (English/Arabic) glossary for Arabic-speaking software engineers.
For ONE term, write BOTH files: the English file and the Arabic file. Rules:
- Keep the exact file structure shown below: front matter, then four "##" sections in this order (Definition, Where you hear it, Examples, Common mistake). Arabic section titles must be exactly: التعريف / أين تسمعه؟ / أمثلة / خطأ شائع.
- English: plain, clear, accurate. Definition 1-2 sentences. At least 2 and at most 3 short, generic example sentences. No real companies, clients, people, or private numbers.
- Arabic: simple Modern Standard Arabic (فصحى مبسطة), NEVER dialect. Natural phrasing, not word-for-word translation. Keep the English technical term in English when engineers do not translate it. Add an optional front-matter line translation: "..." ONLY if there is a real Arabic equivalent engineers actually use.
- Arabic "أمثلة": each English example sentence stays in English, followed on the next line by its Arabic translation as a nested bullet ("  - ...").
- pronunciation: English file = respelling like "RAYT LIM-it-ing"; Arabic file = the same sound written in Arabic letters like "ريت ليميتينج".
- related: 1 to 3 ids chosen ONLY from the list of existing ids you are given (or [] if none fit).
- level is beginner or intermediate. id, category, level, related, term are IDENTICAL in both files.
- Code, commands and identifiers go in backticks.
Answer with JSON only: {"en":"<full english file text>","ar":"<full arabic file text>"}

STRUCTURE EXAMPLE (English file):
${FORMAT_EN}`

async function draft() {
  const file = flag('file') ?? path.join(docsDir, 'term-approved.txt')
  if (!fs.existsSync(file)) return console.error(`Missing ${file}. List approved ids there, one per line (see docs/term-candidates.md).`)
  const wanted = fs.readFileSync(file, 'utf8').split(/\r?\n/).map((l) => l.replace(/#.*/, '').trim()).filter(Boolean)
  const candidates = JSON.parse(fs.readFileSync(path.join(docsDir, 'term-candidates.json'), 'utf8')).flatMap((r) => r.terms.map((t) => ({ ...t, category: r.category })))
  const byId = new Map(candidates.map((t) => [t.id, t]))
  const have = existingTerms()
  const existingIds = new Set(have.map((t) => t.id))
  const todo = wanted.filter((id) => byId.has(id) && !existingIds.has(id) && !fs.existsSync(path.join(draftsDir, byId.get(id).category, `${id}.en.md`)))
  for (const id of wanted) if (!byId.has(id)) console.warn(`Unknown candidate id: ${id}`)
  console.log(`Drafting ${todo.length} term(s)…`)

  let done = 0
  await mapPool(
    todo,
    async (id) => {
      const t = byId.get(id)
      const idsInCategory = have.filter((h) => h.category === t.category).map((h) => h.id)
      const relatedPool = [...new Set([...idsInCategory, ...have.map((h) => h.id)])].join(', ')
      try {
        const r = await generate({
          tiers: ['draft', 'bulk'],
          system: DRAFT_SYSTEM,
          prompt: `TERM: ${t.term}\nid: ${t.id}\ncategory: ${t.category}\nlevel: ${t.level}\nWhy it matters: ${t.why}\nEXISTING IDS (for related): ${relatedPool}`,
          json: true,
          temperature: 0.4,
          maxOutputTokens: 4096,
          validate: (d) => {
            for (const lang of ['en', 'ar']) {
              const { term, errors } = parseTerm(String(d[lang] ?? ''))
              if (errors.length) throw new Error(`${lang}: ${errors.join('; ')}`)
              if (term.id !== t.id || term.category !== t.category) throw new Error(`${lang}: wrong id/category`)
              term.related.forEach((x) => { if (!existingIds.has(x)) throw new Error(`${lang}: unknown related "${x}"`) })
            }
            if (!/[؀-ۿ]/.test(d.ar)) throw new Error('ar file has no Arabic')
          },
        })
        const dir = path.join(draftsDir, t.category)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, `${id}.en.md`), r.data.en.trim() + '\n')
        fs.writeFileSync(path.join(dir, `${id}.ar.md`), r.data.ar.trim() + '\n')
        console.log(`✓ ${++done}/${todo.length} ${id} (${r.model})`)
      } catch (e) {
        console.error(`✗ ${++done}/${todo.length} ${id}: ${e.message.slice(0, 140)}`)
      }
    },
    4,
  )
  console.log('\nDrafts are in drafts/<category>/ (git-ignored). Review them, then run: npm run terms -- promote')
}

// ------------------------------------------------------------------ promote
function promote() {
  const only = flag('ids') ? new Set(flag('ids').split(',')) : null
  const existingIds = new Set(existingTerms().map((t) => t.id))
  let moved = 0
  if (!fs.existsSync(draftsDir)) return console.log('No drafts folder.')
  for (const category of fs.readdirSync(draftsDir)) {
    const dir = path.join(draftsDir, category)
    if (!fs.statSync(dir).isDirectory()) continue
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.en.md'))) {
      const id = f.replace(/\.en\.md$/, '')
      if (only && !only.has(id)) continue
      const enSrc = path.join(dir, `${id}.en.md`)
      const arSrc = path.join(dir, `${id}.ar.md`)
      if (!fs.existsSync(arSrc)) { console.warn(`skip ${id}: missing Arabic draft`); continue }
      const bad = [enSrc, arSrc].flatMap((p) => parseTerm(fs.readFileSync(p, 'utf8')).errors)
      if (bad.length || existingIds.has(id)) { console.warn(`skip ${id}: ${bad.join('; ') || 'id already exists'}`); continue }
      for (const lang of ['en', 'ar']) {
        const outDir = path.join(contentDir, lang, category)
        fs.mkdirSync(outDir, { recursive: true })
        // same layout as the hand-written files: a blank line after every "##" heading
        const raw = fs.readFileSync(path.join(dir, `${id}.${lang}.md`), 'utf8').replace(/\r\n/g, '\n')
        const text = raw.replace(/^(## .*)\n(?!\n)/gm, '$1\n\n')
        fs.writeFileSync(path.join(outDir, `${id}.md`), text.endsWith('\n') ? text : text + '\n')
        fs.rmSync(path.join(dir, `${id}.${lang}.md`))
      }
      moved++
      console.log(`+ ${category}/${id}`)
    }
  }
  console.log(`\nPromoted ${moved} term(s). Now run: npm run validate`)
}

if (command === 'suggest') await suggest()
else if (command === 'draft') await draft()
else if (command === 'promote') promote()
else console.error('Usage: npm run terms -- suggest | draft | promote')
