'use client'

import { useEffect, useRef, useState } from 'react'

// Counts up to `to` when it scrolls into view. Server HTML already contains the final number,
// so there is no layout shift and no flash without JavaScript.
export function CountUp({ to, ms = 1100 }: { to: number; ms?: number }) {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / ms)
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3)))) // ease-out cubic
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      setValue(0)
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, ms])

  return <strong ref={ref}>{value}</strong>
}
