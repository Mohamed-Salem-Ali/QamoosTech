'use client'

import { useEffect, useState } from 'react'
import { LogoMark } from './Logo'
import type { Lang } from '@/lib/i18n'

// Opening screen: the logo draws in, then the page is revealed. Shown once per browser session.
export function Splash({ lang }: { lang: Lang }) {
  const [state, setState] = useState<'show' | 'leaving' | 'gone'>('show')

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem('splash') === '1'
    } catch {}
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (seen || reduce) {
      setState('gone')
      return
    }
    try {
      sessionStorage.setItem('splash', '1')
    } catch {}
    document.documentElement.classList.add('is-splashing')
    const a = setTimeout(() => setState('leaving'), 1900)
    const b = setTimeout(() => {
      setState('gone')
      document.documentElement.classList.remove('is-splashing')
    }, 2600)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
      document.documentElement.classList.remove('is-splashing')
    }
  }, [])

  if (state === 'gone') return null
  return (
    <div className={`splash${state === 'leaving' ? ' splash--leaving' : ''}`} aria-hidden="true">
      <div className="splash__mark">
        <LogoMark size={96} />
      </div>
      <div className="splash__name" dir="ltr">
        Qamoos<b>Tech</b>
      </div>
      <div className="splash__ar">{lang === 'ar' ? 'افهم لغة المبرمجين' : 'قاموس تك'}</div>
      <div className="splash__bar">
        <span />
      </div>
    </div>
  )
}
