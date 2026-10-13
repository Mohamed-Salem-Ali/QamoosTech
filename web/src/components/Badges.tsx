'use client'

import { useEffect, useState } from 'react'
import { BADGES, BADGES_EVENT, earnedBadges, takeNewBadges, type BadgeIcon, type BadgeId } from '@/lib/achievements'
import { buzz } from '@/lib/haptics'
import { PROGRESS_EVENT } from '@/lib/progress'
import { REVIEW_EVENT } from '@/lib/review'
import { ui, type Lang } from '@/lib/i18n'

const paths: Record<BadgeIcon, React.ReactNode> = {
  book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM8 8h8M8 12h5" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  flame: <path d="M12 2.5c.6 3.2-1.6 4.6-3 6.4C7.6 10.7 6.5 12.6 6.5 15a5.5 5.5 0 0 0 11 0c0-2.3-1-4-2.1-5.3-.2 1.3-.9 2.3-2 2.8.4-3.6-.4-7.3-1.4-10Z" />,
  star: <path d="M12 3.5 14.4 8.6l5.6.7-4.1 3.9 1 5.5L12 16.1l-4.9 2.6 1-5.5L4 9.3l5.6-.7L12 3.5Z" />,
  ear: <path d="M7 10a5 5 0 0 1 10 0c0 3-3 3.5-3 6.5a3 3 0 0 1-5.5 1.6M10 10a2 2 0 0 1 4 0" />,
  bookmark: <path d="M6 3.5h12V21l-6-4-6 4V3.5Z" />,
  repeat: <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.7 5.6L4 15.5M4 20v-4.5h4.5" />,
  crown: <path d="m3.5 8 4.5 4 4-7 4 7 4.5-4-2 11h-13l-2-11Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </>
  ),
}

export function BadgeIconSvg({ icon, size = 22 }: { icon: BadgeIcon; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[icon]}
    </svg>
  )
}

const iconOf = (id: BadgeId) => BADGES.find((b) => b.id === id)!.icon

/** Listens for progress anywhere on the site and celebrates each newly earned badge once. */
export function BadgeWatcher({ lang }: { lang: Lang }) {
  const t = ui[lang].badges
  const [queue, setQueue] = useState<BadgeId[]>([])

  useEffect(() => {
    const check = () => {
      const fresh = takeNewBadges()
      if (fresh.length) {
        setQueue((q) => [...q, ...fresh])
        window.dispatchEvent(new Event(BADGES_EVENT))
      }
    }
    // first call also records badges earned before this feature existed, so they do not all pop at once
    check()
    const events = [PROGRESS_EVENT, REVIEW_EVENT, 'saved-changed']
    for (const e of events) window.addEventListener(e, check)
    return () => {
      for (const e of events) window.removeEventListener(e, check)
    }
  }, [])

  const current = queue[0]
  useEffect(() => {
    if (!current) return
    buzz([15, 50, 25])
    const id = setTimeout(() => setQueue((q) => q.slice(1)), 3800)
    return () => clearTimeout(id)
  }, [current])

  if (!current) return null
  return (
    <div className="badge-toast" role="status" key={current}>
      <span className="badge-toast__icon">
        <BadgeIconSvg icon={iconOf(current)} size={24} />
      </span>
      <span>
        <small>{t.unlocked}</small>
        <strong>{t.list[current].name}</strong>
      </span>
    </div>
  )
}

/** The home page shelf: earned badges in colour, the rest dimmed, each with what it takes. */
export function BadgeShelf({ lang }: { lang: Lang }) {
  const t = ui[lang].badges
  const [earned, setEarned] = useState<Set<BadgeId> | null>(null)

  useEffect(() => {
    const sync = () => setEarned(earnedBadges())
    sync()
    const events = [PROGRESS_EVENT, REVIEW_EVENT, BADGES_EVENT, 'saved-changed']
    for (const e of events) window.addEventListener(e, sync)
    return () => {
      for (const e of events) window.removeEventListener(e, sync)
    }
  }, [])

  if (!earned) return null
  return (
    <details className="badges">
      <summary>
        <span className="badges__title">{t.title}</span>
        <span className="badges__count">{t.count(earned.size, BADGES.length)}</span>
        <span className="badges__peek" aria-hidden="true">
          {BADGES.filter((b) => earned.has(b.id))
            .slice(0, 5)
            .map((b) => (
              <i key={b.id}>
                <BadgeIconSvg icon={b.icon} size={14} />
              </i>
            ))}
        </span>
      </summary>
      <ul className="badges__grid">
        {BADGES.map((b) => {
          const on = earned.has(b.id)
          return (
            <li key={b.id} className={on ? 'is-on' : ''}>
              <span className="badges__icon">
                <BadgeIconSvg icon={b.icon} />
              </span>
              <strong>{t.list[b.id].name}</strong>
              <small>{on ? t.list[b.id].desc : `${t.locked} · ${t.list[b.id].desc}`}</small>
            </li>
          )
        })}
      </ul>
    </details>
  )
}
