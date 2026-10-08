// Checks a list of candidate terms against what QamoosTech already explains, so nothing is added twice.
//
//   npm run dedupe -- candidates.txt          one term per line (JSON arrays also work)
//
// Each candidate is reported as NEW, or as a DUPLICATE of an existing term (matched by id, title,
// acronym or alias). Exit code 1 when any duplicate is found.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { walkTermFiles } from '../src/lib/content-fs.mjs'
import { normName, termNames } from '../src/lib/term-names.mjs'
import { parseTerm } from '../src/lib/parse-term.mjs'

const contentDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'content')
const input = process.argv[2]
if (!input) {
  console.error('Usage: npm run dedupe -- <file with one candidate term per line>')
  process.exit(2)
}

const raw = fs.readFileSync(input, 'utf8').trim()
const candidates = raw.startsWith('[')
  ? JSON.parse(raw).map((x) => (typeof x === 'string' ? x : x.term))
  : raw.split(/\r?\n/).map((l) => l.replace(/^\s*(?:[-*]\s+|\d+[.)]\s+)?(?:\[[ xX]?\]\s*)?/, '').trim()).filter(Boolean)

const owner = new Map() // normalised name or alias -> { id, via }
for (const f of walkTermFiles(contentDir, 'en')) {
  const { term } = parseTerm(fs.readFileSync(f.path, 'utf8'))
  for (const n of termNames(term)) owner.set(normName(n), { id: term.id, via: 'name' })
  for (const a of term.aliases) owner.set(normName(a), { id: term.id, via: 'alias' })
}

let duplicates = 0
for (const c of candidates) {
  const keys = new Set([normName(c), ...termNames({ id: c.toLowerCase().replace(/[^a-z0-9]+/g, '-'), term: c }).map(normName)])
  const hit = [...keys].map((k) => owner.get(k)).find(Boolean)
  if (hit) {
    duplicates++
    console.log(`DUPLICATE  ${c}  ->  ${hit.id} (${hit.via})`)
  } else {
    console.log(`new        ${c}`)
  }
}
console.log(`\n${candidates.length} candidate(s): ${candidates.length - duplicates} new, ${duplicates} already covered.`)
process.exit(duplicates ? 1 : 0)
