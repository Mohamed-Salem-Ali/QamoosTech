'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { createSearchIndex, runSearch, type SearchItem } from '@/lib/search.mjs'
import type { Lang } from '@/lib/i18n'

type Props = { lang: Lang; placeholder: string; empty: string; label: string; hintPrefix?: string; hintExamples?: string[] }

export function SearchBox({ lang, placeholder, empty, label, hintPrefix, hintExamples }: Props) {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const [hint, setHint] = useState(0)
  const [focused, setFocused] = useState(false)
  // The index is downloaded the first time the box is used, so the home page HTML stays small (public/search, from scripts/build-search-index.mjs).
  const [items, setItems] = useState<SearchItem[] | null>(null)
  const requested = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const index = useMemo(() => (items ? createSearchIndex(items) : null), [items])
  const results = useMemo(() => (index ? runSearch(index, q) : []), [index, q])

  // On a short screen the results would run below the bottom edge, so move the box up first.
  // 440px is the tallest the results list can be (see .search__results in styles/polish.css).
  function bringResultsIntoView() {
    const box = inputRef.current?.closest<HTMLElement>('.search')
    if (!box || box.getBoundingClientRect().bottom + 440 <= innerHeight) return
    const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches
    box.scrollIntoView({ block: 'start', behavior: smooth ? 'smooth' : 'auto' })
  }

  function loadIndex() {
    if (requested.current) return
    requested.current = true
    fetch(`/search/${lang}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`search index: ${r.status}`)
        return r.json() as Promise<SearchItem[]>
      })
      .then(setItems)
      .catch(() => {
        // allow another try on the next focus or keystroke
        requested.current = false
      })
  }

  // cycles example searches in the placeholder while the box is empty and not focused
  useEffect(() => {
    if (!hintExamples?.length || q || focused || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setHint((h) => (h + 1) % hintExamples.length), 2600)
    return () => clearInterval(id)
  }, [hintExamples, q, focused])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      router.push(`/${lang}/t/${results[active].id}/`)
    } else if (e.key === 'Escape') {
      setQ('')
    }
  }

  return (
    <div className="search" id="search">
      <label className="search__field">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setActive(0)
            loadIndex()
          }}
          onKeyDown={onKeyDown}
          placeholder={hintExamples?.length ? `${hintPrefix} "${hintExamples[hint]}"` : placeholder}
          onFocus={() => {
            setFocused(true)
            loadIndex()
            bringResultsIntoView()
          }}
          onBlur={() => setFocused(false)}
          aria-label={label}
          aria-describedby="search-status"
          autoComplete="off"
          spellCheck={false}
        />
        <kbd aria-hidden="true">/</kbd>
      </label>
      {/* announces "no results" to screen readers; the results themselves are a plain list of links below */}
      <p id="search-status" className="sr-only" aria-live="polite">{q.trim() !== '' && index && results.length === 0 ? empty : ''}</p>
      {q.trim() !== '' && index && (
        <ul className="search__results" id="search-results">
          {results.length === 0 && <li className="search__empty">{empty}</li>}
          {results.map((r, i) => (
            <li key={r.id} aria-current={i === active ? 'true' : undefined}>
              <Link href={`/${lang}/t/${r.id}/`} className={`search__item${i === active ? ' is-active' : ''}`} onMouseEnter={() => setActive(i)}>
                <span className="search__term" dir="ltr">{r.term}</span>
                {r.translation && <span className="search__tr">{r.translation}</span>}
                <span className="search__cat">{r.categoryName}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
