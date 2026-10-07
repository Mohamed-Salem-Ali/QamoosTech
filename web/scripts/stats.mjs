// Prints the numbers that appear in READMEs, the site and other projects, so they are copied from one source.
//   npm run stats
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { walkTermFiles } from '../src/lib/content-fs.mjs'

const webDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(webDir, '..', 'content')
const readJson = (f) => JSON.parse(fs.readFileSync(path.join(contentDir, f), 'utf8'))

const categories = readJson('categories.json')
const languages = fs.readdirSync(contentDir).filter((n) => fs.statSync(path.join(contentDir, n)).isDirectory())
const terms = walkTermFiles(contentDir, 'en')
const perCategory = {}
for (const t of terms) perCategory[t.category] = (perCategory[t.category] ?? 0) + 1
const audioDir = path.join(webDir, 'public', 'audio')
const voices = fs.existsSync(audioDir) ? fs.readdirSync(audioDir) : []
const clips = Object.fromEntries(voices.map((v) => [v, fs.readdirSync(path.join(audioDir, v)).filter((f) => /\.(mp3|wav)$/.test(f)).length]))
const bestVoice = Math.max(0, ...Object.values(clips))

const stats = {
  terms: terms.length,
  languages: languages.length,
  categories: categories.length,
  subcategories: categories.reduce((n, c) => n + (c.subcategories?.length ?? 0), 0),
  tags: readJson('tags.json').length,
  termPages: terms.length * languages.length,
  audioTermsCovered: bestVoice,
  audioPercent: terms.length ? Math.round((bestVoice / terms.length) * 100) : 0,
  perCategory,
}
console.log(JSON.stringify(stats, null, 2))
console.log(`\nFor copy and paste: ${stats.terms} terms · ${stats.categories} categories · ${stats.subcategories} subcategories · ${stats.languages} languages · audio ${stats.audioTermsCovered}/${stats.terms}`)
