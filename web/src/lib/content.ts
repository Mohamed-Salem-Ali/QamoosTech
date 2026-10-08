import fs from 'node:fs'
import path from 'node:path'
import { walkTermFiles } from './content-fs.mjs'
import { parseTerm } from './parse-term.mjs'
import type { Lang } from './i18n'

export type Term = ReturnType<typeof parseTerm>['term']
export type Subcategory = { id: string; name: Record<Lang, string> }
export type Category = {
  id: string
  name: Record<Lang, string>
  description: Record<Lang, string>
  /** optional: small categories stay flat until they grow */
  subcategories?: Subcategory[]
}
export type Tag = { id: string; name: Record<Lang, string> }

const CONTENT_DIR = path.join(process.cwd(), '..', 'content')

export function getCategories(): Category[] {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'categories.json'), 'utf8'))
}

export function getTags(): Tag[] {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'tags.json'), 'utf8'))
}

const cache = new Map<Lang, Term[]>()

export function getTerms(lang: Lang): Term[] {
  const hit = cache.get(lang)
  if (hit) return hit
  const terms = walkTermFiles(CONTENT_DIR, lang).map((f) => parseTerm(fs.readFileSync(f.path, 'utf8')).term)
  terms.sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }))
  cache.set(lang, terms)
  return terms
}

const byId = new Map<Lang, Map<string, Term>>()

/** One term by id, from a map built once per language (term pages look up related terms by id). */
export function getTerm(lang: Lang, id: string) {
  let map = byId.get(lang)
  if (!map) {
    map = new Map(getTerms(lang).map((t) => [t.id, t]))
    byId.set(lang, map)
  }
  return map.get(id)
}

export function getTermsByCategory(lang: Lang, category: string) {
  return getTerms(lang).filter((t) => t.category === category)
}

/** A category's terms grouped by subcategory, in the order categories.json lists them. Empty groups are dropped. */
export function getTermsBySubcategory(lang: Lang, category: Category) {
  const terms = getTermsByCategory(lang, category.id)
  if (!category.subcategories?.length) return [{ sub: undefined, terms }]
  const groups = category.subcategories
    .map((sub) => ({ sub, terms: terms.filter((t) => t.subcategory === sub.id) }))
    .filter((g) => g.terms.length > 0)
  const loose = terms.filter((t) => !t.subcategory)
  return loose.length ? [{ sub: undefined, terms: loose }, ...groups] : groups
}
