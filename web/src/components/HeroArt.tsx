'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export type FloatCard = { id: string; term: string; translation: string; depth: number; className: string }

// Floating bilingual term cards that drift on their own and gently follow the pointer (parallax),
// plus a soft spotlight under the pointer. Pure transforms, throttled with requestAnimationFrame.
// Disabled for touch screens and for people who prefer reduced motion.
export function HeroArt({ cards, lang }: { cards: FloatCard[]; lang: string }) {
  const layer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = layer.current?.closest<HTMLElement>('.hero')
    if (!hero) return
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || calm) return

    let raf = 0
    let x = 0
    let y = 0
    const apply = () => {
      raf = 0
      hero.style.setProperty('--mx', x.toFixed(3))
      hero.style.setProperty('--my', y.toFixed(3))
    }
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect()
      x = ((e.clientX - r.left) / r.width) * 2 - 1
      y = ((e.clientY - r.top) / r.height) * 2 - 1
      hero.style.setProperty('--sx', `${e.clientX - r.left}px`)
      hero.style.setProperty('--sy', `${e.clientY - r.top}px`)
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const leave = () => {
      x = 0
      y = 0
      if (!raf) raf = requestAnimationFrame(apply)
    }
    hero.addEventListener('pointermove', move)
    hero.addEventListener('pointerleave', leave)
    return () => {
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', leave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hero-cards" ref={layer}>
      {cards.map((c, i) => (
        <div key={c.id} className={`hero-card ${c.className}`} style={{ ['--d' as string]: c.depth, ['--i' as string]: i }}>
          <Link href={`/${lang}/t/${c.id}/`} className="hero-card__inner" tabIndex={-1} aria-hidden="true">
            <span className="hero-card__term" dir="ltr">{c.term}</span>
            <span className="hero-card__tr">{c.translation}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
