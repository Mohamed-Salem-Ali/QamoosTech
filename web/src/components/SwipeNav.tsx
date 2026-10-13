'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { buzz } from '@/lib/haptics'

const HINT_KEY = 'swipe-hint-seen'
const TRIGGER = 90 // px of horizontal travel that counts as a swipe

/** Swipe left / right on a term page to open the next / previous term in the same category.
 *  The direction follows reading order: in Arabic (RTL) the next term is to the left, so the
 *  finger moves right. An arrow grows at the edge while dragging (touch screens); the arrow keys
 *  do the same on a keyboard. */
export function SwipeNav({ prevHref, nextHref, rtl, hint }: { prevHref?: string; nextHref?: string; rtl: boolean; hint: string }) {
  const router = useRouter()
  const [drag, setDrag] = useState(0) // signed px, positive = finger moved right
  const [showHint, setShowHint] = useState(false)
  const start = useRef<{ x: number; y: number; t: number; locked: boolean | null } | null>(null)
  // the live drag distance, read when the finger lifts (state alone would be one render behind)
  const dragRef = useRef(0)

  // touch screens: prefetch the next term and show the hint the first time only
  useEffect(() => {
    if (!matchMedia('(pointer: coarse)').matches || !(nextHref || prevHref)) return
    router.prefetch(nextHref ?? prevHref!)
    try {
      if (localStorage.getItem(HINT_KEY)) return
    } catch {
      return
    }
    const show = setTimeout(() => setShowHint(true), 1600)
    const hide = setTimeout(() => {
      setShowHint(false)
      try {
        localStorage.setItem(HINT_KEY, '1')
      } catch {}
    }, 6000)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [nextHref, prevHref, router])

  // keyboards: the arrow keys do the same, also following reading order (← is next in Arabic)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
      const el = document.activeElement
      if (el instanceof HTMLElement && (el.isContentEditable || el.closest('input, textarea, select, [role="slider"], [data-no-swipe]'))) return
      const href = (e.key === 'ArrowLeft') !== rtl ? prevHref : nextHref
      if (!href) return
      e.preventDefault()
      router.push(href)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [nextHref, prevHref, rtl, router])

  useEffect(() => {
    if (!matchMedia('(pointer: coarse)').matches) return
    // finger moving left = forward in LTR, backward in RTL
    const targetFor = (dx: number) => (dx < 0 !== rtl ? nextHref : prevHref)

    function onStart(e: TouchEvent) {
      const el = e.target instanceof Element ? e.target : null
      // leave horizontal scrollers, form fields and selections alone
      if (e.touches.length !== 1 || el?.closest('input, textarea, select, .chips, .ticker, .quiz__scope, [data-no-swipe]')) {
        start.current = null
        return
      }
      start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now(), locked: null }
    }
    function onMove(e: TouchEvent) {
      const s = start.current
      if (!s) return
      const dx = e.touches[0].clientX - s.x
      const dy = e.touches[0].clientY - s.y
      // decide once whether this gesture is horizontal; a vertical scroll never becomes a swipe
      if (s.locked === null && Math.abs(dx) + Math.abs(dy) > 12) s.locked = Math.abs(dx) > Math.abs(dy) * 1.6
      if (s.locked && targetFor(dx)) {
        dragRef.current = dx
        setDrag(dx)
      }
    }
    function onEnd() {
      const s = start.current
      const dx = dragRef.current
      start.current = null
      dragRef.current = 0
      setDrag(0)
      if (!s?.locked || Math.abs(dx) < TRIGGER) return
      const href = targetFor(dx)
      if (!href) return
      buzz(10)
      setShowHint(false)
      try {
        localStorage.setItem(HINT_KEY, '1')
      } catch {}
      router.push(href)
    }

    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
    window.addEventListener('touchcancel', onEnd)
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
      window.removeEventListener('touchcancel', onEnd)
    }
  }, [nextHref, prevHref, rtl, router])

  const progress = Math.min(1, Math.abs(drag) / TRIGGER)
  return (
    <>
      {drag !== 0 && (
        <div
          className={`swipe-edge swipe-edge--${drag > 0 ? 'left' : 'right'}${progress >= 1 ? ' is-armed' : ''}`}
          style={{ ['--p' as string]: progress }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d={drag > 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
          </svg>
        </div>
      )}
      {showHint && (
        <div className="toast" role="status">
          <span className="toast__swipe" aria-hidden="true" />
          {hint}
        </div>
      )}
    </>
  )
}
