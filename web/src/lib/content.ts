import fs from 'node:fs'
import path from 'node:path'
import { parseTerm } from './parse-term.mjs'
import type { Lang } from './i18n'

export type Term = ReturnType<typeof parseTerm>['term']
export type Category = { id: string; name: Record<Lang, string>; description: Record<Lang, string> }

const CONTENT_DIR = path.join(process.cwd(), '..', 'content')

export function getCategories(): Category[] {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'categories.json'), 'utf8'))
}

const cache = new Map<Lang, Term[]>()

export function getTerms(lang: Lang): Term[] {
  const hit = cache.get(lang)
  if (hit) return hit
  const terms: Term[] = []
  const langDir = path.join(CONTENT_DIR, lang)
  for (const category of fs.readdirSync(langDir)) {
    const dir = path.join(langDir, category)
    if (!fs.statSync(dir).isDirectory()) continue
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md')) continue
      terms.push(parseTerm(fs.readFileSync(path.join(dir, file), 'utf8')).term)
    }
  }
  terms.sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }))
  cache.set(lang, terms)
  return terms
}

export function getTerm(lang: Lang, id: string) {
  return getTerms(lang).find((t) => t.id === id)
}

export function getTermsByCategory(lang: Lang, category: string) {
  return getTerms(lang).filter((t) => t.category === category)
}
