'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { dueTerms, REVIEW_EVENT } from '@/lib/review'
import { readSaved } from '@/lib/saved'
import { ui, type Lang } from '@/lib/i18n'

// Bottom tab bar for phones (hidden from 641px up, where the header has room for everything).
// Thumb-reachable: home, categories, search, quiz, saved (the badge counts terms due for review today).
const icons = {
  home: <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1v-9.5Z" />,
  categories: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="2" />
      <rect x="13" y="4" width="7" height="7" rx="2" />
      <rect x="4" y="13" width="7" height="7" rx="2" />
      <rect x="13" y="13" width="7" height="7" rx="2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4-4" />
    </>
  ),
  quiz: (
    <>
      <path d="M12 3.5 14.4 8.6l5.6.7-4.1 3.9 1 5.5L12 16.1l-4.9 2.6 1-5.5L4 9.3l5.6-.7L12 3.5Z" />
    </>
  ),
  saved: <path d="M6 3.5h12V21l-6-4-6 4V3.5Z" />,
}

export function TabBar({ lang }: { lang: Lang }) {
  const t = ui[lang].nav
  const pathname = usePathname() ?? `/${lang}/`
  const router = useRouter()
  const [count, setCount] = useState(0)

  useEffect(() => {
    const sync = () => setCount(dueTerms(lang, readSaved(lang)).length)
    sync()
    window.addEventListener('saved-changed', sync)
    window.addEventListener(REVIEW_EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('saved-changed', sync)
      window.removeEventListener(REVIEW_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [lang])

  const home = `/${lang}/`
  const isHome = pathname === home
  const active = isHome ? 'home' : pathname.includes('/c/') ? 'categories' : pathname.includes('/quiz') ? 'quiz' : pathname.includes('/saved') ? 'saved' : ''

  // Search lives on the home page: focus it there, or go home and focus it on arrival.
  function openSearch(e: React.MouseEvent) {
    if (isHome) {
      e.preventDefault()
      window.dispatchEvent(new Event('focus-search'))
    } else {
      e.preventDefault()
      router.push(`${home}#search`)
    }
  }

  const tab = (key: keyof typeof icons, href: string, label: string, extra?: React.ReactNode, onClick?: (e: React.MouseEvent) => void) => (
    <Link
      key={key}
      href={href}
      className={`tabbar__tab${active === key ? ' is-active' : ''}`}
      aria-current={active === key ? 'page' : undefined}
      onClick={onClick}
    >
      <span className="tabbar__icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icons[key]}
        </svg>
        {extra}
      </span>
      <span className="tabbar__label">{label}</span>
    </Link>
  )

  return (
    <nav className="tabbar" aria-label={t.label}>
      {tab('home', home, t.home)}
      {tab('categories', `${home}#categories`, t.categories)}
      {tab('search', `${home}#search`, t.search, undefined, openSearch)}
      {tab('quiz', `/${lang}/quiz/`, t.quiz)}
      {tab('saved', `/${lang}/saved/`, t.saved, count > 0 ? <span className="tabbar__badge">{count > 99 ? '99+' : count}</span> : undefined)}
    </nav>
  )
}
