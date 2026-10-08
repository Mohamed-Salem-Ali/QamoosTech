// Search ranking against the real glossary: `npm test` (from web/). A content or code change that breaks a common
// query fails here instead of on the live site. Items are built the way the home page builds them.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { walkTermFiles } from '../src/lib/content-fs.mjs'
import { parseTerm } from '../src/lib/parse-term.mjs'
import { createSearchIndex, normalize, runSearch } from '../src/lib/search.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
const contentDir = path.join(here, '..', '..', 'content')
const categories = JSON.parse(fs.readFileSync(path.join(contentDir, 'categories.json'), 'utf8'))

/** Items for one language, as the home page passes them to the search box. */
function loadItems(lang) {
  const names = Object.fromEntries(categories.map((c) => [c.id, c.name[lang]]))
  return walkTermFiles(contentDir, lang).map((f) => {
    const { term } = parseTerm(fs.readFileSync(f.path, 'utf8'))
    return {
      id: term.id,
      term: term.term,
      translation: term.translation,
      pronunciation: term.pronunciation,
      category: term.category,
      categoryName: names[term.category],
      summary: term.definition,
      keywords: term.keywords,
      aliases: term.aliases,
    }
  })
}

const en = createSearchIndex(loadItems('en'))
const ar = createSearchIndex(loadItems('ar'))

/** The ids of the top results, for a query. */
const top = (index, query, n = 8) => runSearch(index, query, n).map((x) => x.id)

test('normalize folds case, Arabic diacritics, letter forms and Latin accents', () => {
  assert.equal(normalize('API'), 'api')
  assert.equal(normalize('إِيدمبوتنسي'), normalize('ايدمبوتنسي'))
  assert.equal(normalize('مدرسة'), 'مدرسه')
  assert.equal(normalize('Café'), 'cafe')
  assert.equal(normalize('résumé'), 'resume')
})

test('blank and one-letter queries return nothing', () => {
  assert.deepEqual(runSearch(en, ''), [])
  assert.deepEqual(runSearch(en, '   '), [])
  assert.deepEqual(runSearch(en, 'a'), [])
})

test('an exact title wins (English)', () => {
  assert.equal(top(en, 'pull request')[0], 'pull-request')
  assert.equal(top(en, 'deadline')[0], 'deadline')
  assert.equal(top(en, 'idempotency')[0], 'idempotency')
  assert.equal(top(en, 'lgtm')[0], 'lgtm')
})

test('a natural-language question still finds the term (English)', () => {
  assert.ok(top(en, 'what is a pull request', 3).includes('pull-request'), 'pull-request should be in the top three')
  assert.equal(top(en, 'stop users spamming my api')[0], 'rate-limiting')
})

test('a misspelling in the search phrases finds the term (English)', () => {
  assert.equal(top(en, 'dedline')[0], 'deadline')
})

test('a short word ranks the term whose name starts with it, ahead of longer prefixes (English)', () => {
  // "ci" is a whole word of "CI/CD" and only the start of "Circuit Breaker"
  assert.equal(top(en, 'ci')[0], 'ci-cd')
})

test('a title written with punctuation is found by its plain words (English)', () => {
  assert.equal(top(en, 'n+1')[0], 'n-plus-one')
})

test('partial words match the start of a name (English)', () => {
  assert.ok(top(en, 'rate limit', 3).includes('rate-limiting'))
  assert.equal(top(en, 'deploy')[0], 'deployment')
})

test('an exact Arabic translation wins (Arabic)', () => {
  assert.equal(top(ar, 'الحزمة')[0], 'package')
  assert.ok(top(ar, 'تحديد معدل', 5).includes('rate-limiting'))
})

test('the Arabic pronunciation is searchable (Arabic)', () => {
  assert.equal(top(ar, 'ستامبيد')[0], 'cache-stampede')
})

test('results are capped at the limit', () => {
  assert.ok(runSearch(en, 'api', 3).length <= 3)
})
