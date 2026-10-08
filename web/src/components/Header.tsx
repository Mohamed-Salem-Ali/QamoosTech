'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogoMark } from './Logo'
import { RandomTerm } from './RandomTerm'
import { languages, ui, type Lang } from '@/lib/i18n'

export function Header({ lang }: { lang: Lang }) {
  const t = ui[lang]
  const pathname = usePathname() ?? `/${lang}/`
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const saved = document.documentElement.dataset.theme
    setTheme(saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light')
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  // one link to each other language, labelled in its own script
  const others = languages.filter((l) => l.code !== lang)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link href={`/${lang}/`} className="brand" aria-label="QamoosTech">
          <LogoMark size={34} />
          <span className="brand__name" dir="ltr">
            Qamoos<b>Tech</b>
          </span>
        </Link>
        <nav className="header__actions" aria-label="Main">
          <Link className="btn btn--ghost header__link" href={`/${lang}/#categories`}>
            {t.categories}
          </Link>
          {others.map((other) => (
            <Link
              key={other.code}
              className="btn btn--ghost"
              href={pathname.replace(/^\/[^/]+/, `/${other.code}`)}
              hrefLang={other.code}
              onClick={() => {
                try {
                  localStorage.setItem('lang', other.code)
                } catch {}
              }}
            >
              {other.label}
            </Link>
          ))}
          <Link className="icon-btn" href={`/${lang}/saved/`} aria-label={t.saved.title} title={t.saved.title}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 3h12v18l-6-4-6 4V3Z" />
            </svg>
          </Link>
          <RandomTerm lang={lang} label={t.hero.random} variant="icon" />
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme" type="button">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
