'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createSearchIndex, fuzzySearch, runSearch, type SearchItem } from '@/lib/search.mjs'
import { dirOf, isLang, ui, type Lang } from '@/lib/i18n'

/** On the 404 page: when the broken address looks like a term link (/en/t/idempotncy/, or a mistyped
 *  /ar/kubernetes), search the glossary for the last part of it and offer the closest terms. */
export function NotFoundHelp() {
  const [found, setFound] = useState<{ lang: Lang; items: SearchItem[] } | null>(null)

  useEffect(() => {
    const m = location.pathname.match(/^\/([a-z]{2})\/(?:(?:t|c)\/)?([^/]+)/)
    if (!m || !isLang(m[1])) return
    const lang = m[1]
    let query: string
    try {
      query = decodeURIComponent(m[2]).replace(/[-_+.]+/g, ' ')
    } catch {
      return
    }
    fetch(`/search/${lang}.json`)
      .then((r) => (r.ok ? (r.json() as Promise<SearchItem[]>) : Promise.reject(new Error(`search index: ${r.status}`))))
      .then((items) => {
        const index = createSearchIndex(items)
        const exact = runSearch(index, query, 3)
        setFound({ lang, items: exact.length ? exact : fuzzySearch(index, query) })
      })
      .catch(() => {})
  }, [])

  if (!found?.items.length) return null
  const { lang, items } = found
  return (
    <section className="notfound__help" dir={dirOf(lang)} lang={lang} aria-live="polite">
      <h2>{ui[lang].didYouMean}</h2>
      <ul>
        {items.map((r) => (
          <li key={r.id}>
            <Link href={`/${lang}/t/${r.id}/`}>
              <strong dir="ltr">{r.term}</strong>
              {r.translation && <span>{r.translation}</span>}
              <small>{r.categoryName}</small>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
