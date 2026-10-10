'use client'

import { useEffect } from 'react'

// Pointer polish for mouse and trackpad users only. A soft light follows the cursor across cards,
// and primary buttons lean slightly toward it. Both are off for touch screens and for visitors who
// ask for reduced motion, so nothing here runs on a phone or changes what a keyboard user sees.
// The check runs again when the pointer type or the motion setting changes (for example when a
// tablet is rotated or a browser window is resized), so the effect follows the device in use.
const CARD = '.card, .term-card, .explore__card'
const BUTTON = '.cta--primary'

function attachPointerPolish() {
  let activeButton: HTMLElement | null = null

  const releaseButton = () => {
    if (!activeButton) return
    activeButton.style.removeProperty('--mx')
    activeButton.style.removeProperty('--my')
    activeButton = null
  }

  const onMove = (e: PointerEvent) => {
    const target = e.target instanceof Element ? e.target : null
    if (!target) return

    const card = target.closest<HTMLElement>(CARD)
    if (card) {
      const r = card.getBoundingClientRect()
      card.style.setProperty('--sx', `${e.clientX - r.left}px`)
      card.style.setProperty('--sy', `${e.clientY - r.top}px`)
    }

    const button = target.closest<HTMLElement>(BUTTON)
    if (button !== activeButton) releaseButton()
    if (button) {
      const r = button.getBoundingClientRect()
      button.style.setProperty('--mx', `${(e.clientX - (r.left + r.width / 2)) * 0.18}px`)
      button.style.setProperty('--my', `${(e.clientY - (r.top + r.height / 2)) * 0.22}px`)
      activeButton = button
    }
  }

  document.addEventListener('pointermove', onMove, { passive: true })
  document.addEventListener('pointerleave', releaseButton)
  return () => {
    document.removeEventListener('pointermove', onMove)
    document.removeEventListener('pointerleave', releaseButton)
    releaseButton()
  }
}

export function Enhancements() {
  useEffect(() => {
    const fine = matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = matchMedia('(prefers-reduced-motion: reduce)')
    let detach: (() => void) | null = null

    const sync = () => {
      detach?.()
      detach = fine.matches && !reduce.matches ? attachPointerPolish() : null
    }

    sync()
    fine.addEventListener('change', sync)
    reduce.addEventListener('change', sync)
    return () => {
      fine.removeEventListener('change', sync)
      reduce.removeEventListener('change', sync)
      detach?.()
    }
  }, [])

  return null
}
