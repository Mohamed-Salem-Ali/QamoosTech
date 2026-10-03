'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { runSearch, type SearchItem } from '@/lib/search'
import type { Lang } from '@/lib/i18n'

type Props = { lang: Lang; items: SearchItem[]; placeholder: string; empty: string; label: string; hintPrefix?: string; hintExamples?: string[] }

export function SearchBox({ lang, items, placeholder, empty, label, hintPrefix, hintExamples }: Props) {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const [hint, setHint] = useState(0)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const results = useMemo(() => runSearch(items, q), [items, q])

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
          }}
          onKeyDown={onKeyDown}
          placeholder={hintExamples?.length ? `${hintPrefix} "${hintExamples[hint]}"` : placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label={label}
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls="search-results"
          autoComplete="off"
          spellCheck={false}
        />
        <kbd aria-hidden="true">/</kbd>
      </label>
      {q.trim() !== '' && (
        <ul className="search__results" id="search-results" role="listbox">
          {results.length === 0 && <li className="search__empty">{empty}</li>}
          {results.map((r, i) => (
            <li key={r.id} role="option" aria-selected={i === active}>
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
