'use client'

import { useEffect, useState } from 'react'
import { buzz } from '@/lib/haptics'
import { readSaved, writeSaved, type SavedTerm } from '@/lib/saved'

// The "save to review" toggle on a term page. The button state follows the saved list in this browser.
export function SaveTerm({ lang, term, labels }: { lang: string; term: SavedTerm; labels: { save: string; saved: string } }) {
  const [on, setOn] = useState(false)
  // counts the visitor's taps: a new key remounts the icon, so its pop animation replays every time
  // (and never plays for the state read on load)
  const [taps, setTaps] = useState(0)

  useEffect(() => {
    const sync = () => setOn(readSaved(lang).some((x) => x.id === term.id))
    sync()
    window.addEventListener('saved-changed', sync)
    return () => window.removeEventListener('saved-changed', sync)
  }, [lang, term.id])

  function toggle() {
    const items = readSaved(lang)
    writeSaved(lang, on ? items.filter((x) => x.id !== term.id) : [...items, term])
    buzz(on ? 8 : [12, 40, 18])
    setTaps((n) => n + 1)
  }

  return (
    <button type="button" className="save-btn" aria-pressed={on} onClick={toggle}>
      <svg key={taps} className={taps ? 'is-popped' : undefined} viewBox="0 0 24 24" width="17" height="17" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 3.5h12V21l-6-4-6 4V3.5Z" />
      </svg>
      {on ? labels.saved : labels.save}
    </button>
  )
}
