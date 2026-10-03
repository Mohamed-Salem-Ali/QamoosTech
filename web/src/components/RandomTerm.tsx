'use client'

import { useRouter } from 'next/navigation'

export function RandomTerm({ ids, lang, label }: { ids: string[]; lang: string; label: string }) {
  const router = useRouter()
  return (
    <button
      type="button"
      className="cta cta--ghost"
      onClick={() => router.push(`/${lang}/t/${ids[Math.floor(Math.random() * ids.length)]}/`)}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
      </svg>
      {label}
    </button>
  )
}
