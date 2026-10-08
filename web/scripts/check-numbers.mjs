// Fails when the README's numbers do not match the content, so the figures cannot drift silently.
//   npm run check-numbers              (check only; CI runs this)
//   npm run sync-numbers               (rewrites the README figures from the content, then checks)
// The counts are the same ones `npm run stats` prints. Audio counts the clips on disk; CI only sees committed files,
// so the audio figure matches once the new clips are committed.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const webDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const readmePath = path.join(webDir, '..', 'README.md')
const readme = fs.readFileSync(readmePath, 'utf8')
const stats = JSON.parse(execFileSync(process.execPath, [path.join(webDir, 'scripts', 'stats.mjs')], { encoding: 'utf8' }).split('\n\nFor copy')[0])

const expected = [
  [`**${stats.terms} terms**`, `the term count, bold, in the README intro`],
  [`${stats.categories} categories`, 'the category count'],
  [`${stats.subcategories} subcategories`, 'the subcategory count'],
  [`${stats.audioTermsCovered} of ${stats.terms} terms`, 'the audio coverage'],
]

// --fix: rewrite each figure in place. Each pattern matches the way the README writes it today.
if (process.argv.includes('--fix')) {
  const rules = [
    [/\*\*\d+ terms\*\*/g, `**${stats.terms} terms**`],
    [/\b\d+ categories\b/g, `${stats.categories} categories`],
    [/\b\d+ subcategories\b/g, `${stats.subcategories} subcategories`],
    [/\b\d+ of \d+ terms\b/g, `${stats.audioTermsCovered} of ${stats.terms} terms`],
  ]
  let fixed = readme
  for (const [pattern, text] of rules) fixed = fixed.replace(pattern, text)
  if (fixed !== readme) fs.writeFileSync(readmePath, fixed)
  console.log(fixed !== readme ? 'README figures updated' : 'README figures already current')
}

const current = fs.readFileSync(readmePath, 'utf8')
const missing = expected.filter(([text]) => !current.includes(text))
if (missing.length) {
  console.error('README numbers do not match the content:')
  for (const [text, what] of missing) console.error(` - expected "${text}" (${what})`)
  process.exit(1)
}
console.log(`README numbers match: ${stats.terms} terms, ${stats.categories} categories, ${stats.subcategories} subcategories, audio ${stats.audioTermsCovered}/${stats.terms}`)
