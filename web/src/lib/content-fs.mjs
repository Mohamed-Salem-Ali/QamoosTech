// Shared by the site and by the scripts, so the on-disk layout is defined in exactly one place:
//
//   content/<lang>/<category>/<id>.md                      (categories without subcategories)
//   content/<lang>/<category>/<subcategory>/<id>.md        (categories with subcategories)
import fs from 'node:fs'
import path from 'node:path'

/** @typedef {{ lang: string, category: string, subcategory: string | undefined, file: string, path: string }} TermFile */

/** Every term file of one language, in a stable order. @returns {TermFile[]} */
export function walkTermFiles(contentDir, lang) {
  const out = []
  const langDir = path.join(contentDir, lang)
  if (!fs.existsSync(langDir)) return out
  for (const category of fs.readdirSync(langDir).sort()) {
    const categoryDir = path.join(langDir, category)
    if (!fs.statSync(categoryDir).isDirectory()) continue
    for (const entry of fs.readdirSync(categoryDir).sort()) {
      const full = path.join(categoryDir, entry)
      if (fs.statSync(full).isDirectory()) {
        for (const file of fs.readdirSync(full).sort()) {
          if (file.endsWith('.md')) out.push({ lang, category, subcategory: entry, file, path: path.join(full, file) })
        }
      } else if (entry.endsWith('.md')) {
        out.push({ lang, category, subcategory: undefined, file: entry, path: full })
      }
    }
  }
  return out
}

/** Where a term's file lives (or should be created). */
export function termPath(contentDir, lang, { category, subcategory, id }) {
  return path.join(contentDir, lang, category, ...(subcategory ? [subcategory] : []), `${id}.md`)
}

const indexCache = new Map()

/** Find a term's file by id without knowing its subcategory. @returns {TermFile | undefined} */
export function findTermFile(contentDir, lang, id) {
  const key = `${contentDir}|${lang}`
  if (!indexCache.has(key)) {
    indexCache.set(key, new Map(walkTermFiles(contentDir, lang).map((f) => [f.file.replace(/\.md$/, ''), f])))
  }
  return indexCache.get(key).get(id)
}
