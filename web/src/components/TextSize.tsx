'use client'

import { useEffect, useState } from 'react'
import { buzz } from '@/lib/haptics'

const SIZES = ['', 'lg', 'xl'] as const

/** "Aa" button: cycles normal, large and larger text for the whole site (html font-size, see
 *  features.css). Remembered in this browser and applied before paint by the script in Shell.tsx. */
export function TextSize({ label, names }: { label: string; names: readonly string[] }) {
  const [at, setAt] = useState(0)

  useEffect(() => {
    setAt(Math.max(0, SIZES.indexOf((document.documentElement.dataset.text ?? '') as (typeof SIZES)[number])))
  }, [])

  function next() {
    // read the live value from the page, so quick repeated taps never skip a step
    const current = Math.max(0, SIZES.indexOf((document.documentElement.dataset.text ?? '') as (typeof SIZES)[number]))
    const n = (current + 1) % SIZES.length
    setAt(n)
    buzz(8)
    const d = document.documentElement
    if (SIZES[n]) d.dataset.text = SIZES[n]
    else delete d.dataset.text
    try {
      if (SIZES[n]) localStorage.setItem('text-size', SIZES[n])
      else localStorage.removeItem('text-size')
    } catch {}
  }

  return (
    <button type="button" className="text-size" onClick={next} aria-label={`${label}: ${names[at]}`} title={`${label}: ${names[at]}`}>
      <span aria-hidden="true" className="text-size__glyph">
        <small>A</small>A
      </span>
      <span className="text-size__dots" aria-hidden="true">
        {SIZES.map((s, i) => (
          <i key={s || 'n'} className={i <= at ? 'is-on' : ''} />
        ))}
      </span>
    </button>
  )
}
