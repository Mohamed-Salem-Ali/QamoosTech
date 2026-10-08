'use client'

import { useEffect, useState } from 'react'
import { readSaved, writeSaved, type SavedTerm } from '@/lib/saved'

// The "save to review" toggle on a term page. The button state follows the saved list in this browser.
export function SaveTerm({ lang, term, labels }: { lang: string; term: SavedTerm; labels: { save: string; saved: string } }) {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const sync = () => setOn(readSaved(lang).some((x) => x.id === term.id))
    sync()
    window.addEventListener('saved-changed', sync)
    return () => window.removeEventListener('saved-changed', sync)
  }, [lang, term.id])

  function toggle() {
    const items = readSaved(lang)
    writeSaved(lang, on ? items.filter((x) => x.id !== term.id) : [...items, term])
  }

  return (
    <button type="button" className="save-btn" aria-pressed={on} onClick={toggle}>
      {on ? labels.saved : labels.save}
    </button>
  )
}
