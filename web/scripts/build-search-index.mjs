// Writes the search index of every language to public/search/<lang>.json, so the search box can download it on first use
// instead of the home page carrying all definitions in its HTML. Runs before `dev` and `build` (see package.json).
//   npm run search-index
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { walkTermFiles } from '../src/lib/content-fs.mjs'
import { parseTerm } from '../src/lib/parse-term.mjs'

const webDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(webDir, '..', 'content')
const outDir = path.join(webDir, 'public', 'search')
const categories = JSON.parse(fs.readFileSync(path.join(contentDir, 'categories.json'), 'utf8'))
const languages = fs.readdirSync(contentDir).filter((n) => fs.statSync(path.join(contentDir, n)).isDirectory())

fs.mkdirSync(outDir, { recursive: true })
for (const lang of languages) {
  const categoryNames = Object.fromEntries(categories.map((c) => [c.id, c.name[lang]]))
  const items = walkTermFiles(contentDir, lang)
    .map((f) => {
      const { term } = parseTerm(fs.readFileSync(f.path, 'utf8'))
      return {
        id: term.id,
        term: term.term,
        translation: term.translation,
        pronunciation: term.pronunciation,
        category: term.category,
        categoryName: categoryNames[term.category],
        summary: term.definition,
        keywords: term.keywords,
        aliases: term.aliases,
      }
    })
    // the same order as the term lists, so ties in search come out alphabetical
    .sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }))
  fs.writeFileSync(path.join(outDir, `${lang}.json`), JSON.stringify(items))
  console.log(`search/${lang}.json: ${items.length} terms`)
}
