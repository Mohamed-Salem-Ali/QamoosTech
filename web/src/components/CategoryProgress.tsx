'use client'

import { useEffect, useState } from 'react'
import { PROGRESS_EVENT, readSeen } from '@/lib/progress'
import { ui, type Lang } from '@/lib/i18n'

type Index = Record<string, { byCategory: Record<string, string[]> }>
let cached: Promise<Index> | null = null
const loadIndex = () => (cached ??= fetch('/ids.json').then((r) => r.json() as Promise<Index>))

/** A thin bar on a category card: how many of its terms this browser has opened. Hidden until one is. */
export function CategoryProgress({ lang, category }: { lang: Lang; category: string }) {
  const label = ui[lang].daily.explored
  const [done, setDone] = useState<{ n: number; total: number } | null>(null)

  useEffect(() => {
    let alive = true
    const sync = () => {
      const seen = new Set(readSeen(lang))
      if (seen.size === 0) return setDone(null)
      loadIndex()
        .then((idx) => {
          const ids = idx[lang]?.byCategory[category] ?? []
          if (alive) setDone({ n: ids.filter((id) => seen.has(id)).length, total: ids.length })
        })
        .catch(() => {})
    }
    sync()
    window.addEventListener(PROGRESS_EVENT, sync)
    return () => {
      alive = false
      window.removeEventListener(PROGRESS_EVENT, sync)
    }
  }, [lang, category])

  if (!done || done.n === 0) return null
  return (
    <span className="category__progress" aria-label={label(done.n, done.total)} title={label(done.n, done.total)}>
      <i style={{ inlineSize: `${(done.n / done.total) * 100}%` }} />
    </span>
  )
}
