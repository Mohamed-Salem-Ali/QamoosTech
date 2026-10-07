// Finds characters from the wrong writing system inside content files (for example Hindi or Russian letters
// inside Arabic text, a known AI-drafting failure). Arabic files may contain Arabic + Latin only; English files Latin only.
// Used by validate-content.mjs; can also be run directly: node scripts/scan-scripts.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { walkTermFiles } from '../src/lib/content-fs.mjs'

const ARABIC = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/
const ALLOWED_PUNCT = /[ «»·×–—‘’“”…→≈°•‎‏٪-٭]/

export function scanText(text, lang) {
  const found = []
  const lines = text.split('\n')
  for (let n = 0; n < lines.length; n++) {
    // the `keywords:` list holds search phrases in BOTH languages, in every file
    if (lines[n].startsWith('keywords:')) continue
    for (const ch of lines[n]) {
      const code = ch.codePointAt(0)
      if (code < 128 || ALLOWED_PUNCT.test(ch)) continue
      if (lang === 'ar' && ARABIC.test(ch)) continue
      if (/\p{Emoji_Presentation}/u.test(ch)) continue
      found.push({ line: n + 1, ch, code: 'U+' + code.toString(16).toUpperCase().padStart(4, '0') })
    }
  }
  return found
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const contentDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'content')
  let n = 0
  for (const lang of ['ar', 'en']) {
    for (const file of walkTermFiles(contentDir, lang)) {
      const cat = file.subcategory ? `${file.category}/${file.subcategory}` : file.category
      const f = file.file
      {
        const text = fs.readFileSync(file.path, 'utf8')
        const hits = scanText(text, lang)
        if (hits.length) {
          n++
          const lines = text.split('\n')
          console.log(`${lang}/${cat}/${f}: ${hits.map((h) => `${h.code} "${h.ch}" line ${h.line}`).slice(0, 3).join(', ')}\n    ${lines[hits[0].line - 1].slice(0, 110)}`)
        }
      }
    }
  }
  console.log(n ? `\n${n} file(s) with unexpected characters` : 'No unexpected characters found.')
}
