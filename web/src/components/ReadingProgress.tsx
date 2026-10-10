'use client'

import { useEffect, useRef } from 'react'

// A thin bar at the top of the viewport that fills as the visitor reads a term page. Browsers
// already fire scroll events once per frame, so the handler writes one CSS variable directly and
// the page does not re-render.
export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - innerHeight
      const p = scrollable > 0 ? Math.min(1, Math.max(0, scrollY / scrollable)) : 0
      bar.current?.style.setProperty('--p', p.toFixed(4))
    }

    update()
    addEventListener('scroll', update, { passive: true })
    addEventListener('resize', update)
    return () => {
      removeEventListener('scroll', update)
      removeEventListener('resize', update)
    }
  }, [])

  return <div ref={bar} className="reading-progress" aria-hidden="true" />
}
