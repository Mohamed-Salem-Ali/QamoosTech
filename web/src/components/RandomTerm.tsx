'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {
  lang: string
  label: string
  /** limit the pick to one category (otherwise any term) */
  category?: string
  /** the term currently shown, so "surprise me" never returns the same page */
  exclude?: string
  variant?: 'cta' | 'icon'
}

type Index = Record<string, { all: string[]; byCategory: Record<string, string[]> }>
let cached: Promise<Index> | null = null
const loadIndex = () => (cached ??= fetch('/ids.json').then((r) => r.json() as Promise<Index>))

const Shuffle = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </svg>
)

// "Surprise me": jumps to a random term. Used in the hero, the header, and the "keep exploring" blocks.
export function RandomTerm({ lang, label, category, exclude, variant = 'cta' }: Props) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  async function go() {
    if (busy) return
    setBusy(true)
    try {
      const idx = (await loadIndex())[lang]
      const pool = ((category && idx.byCategory[category]) || idx.all).filter((id) => id !== exclude)
      router.push(`/${lang}/t/${pool[Math.floor(Math.random() * pool.length)]}/`)
    } catch {
      setBusy(false)
    }
    // keep the busy state until navigation replaces the page; reset shortly in case it is slow
    setTimeout(() => setBusy(false), 1500)
  }

  if (variant === 'icon') {
    return (
      <button type="button" className={`icon-btn${busy ? ' is-busy' : ''}`} onClick={go} aria-label={label} title={label}>
        <Shuffle />
      </button>
    )
  }
  return (
    <button type="button" className={`cta cta--ghost${busy ? ' is-busy' : ''}`} onClick={go}>
      <Shuffle />
      {label}
    </button>
  )
}
