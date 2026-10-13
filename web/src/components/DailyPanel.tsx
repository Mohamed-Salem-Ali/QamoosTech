'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { loadCards, seeded, type Card } from '@/lib/cards'
import { clearHistory, PROGRESS_EVENT, readRecent, readSeen, readStreak, today, type RecentTerm, type Streak } from '@/lib/progress'
import { BadgeShelf } from './Badges'
import { ui, type Lang } from '@/lib/i18n'
import { dueTerms, REVIEW_EVENT } from '@/lib/review'
import { readSaved } from '@/lib/saved'

type State = { word?: Card; seen: number; recent: RecentTerm[]; streak: Streak; due: number }

const Flame = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path d="M12 2.5c.6 3.2-1.6 4.6-3 6.4C7.6 10.7 6.5 12.6 6.5 15a5.5 5.5 0 0 0 11 0c0-2.3-1-4-2.1-5.3-.2 1.3-.9 2.3-2 2.8.4-3.6-.4-7.3-1.4-10Z" fill="currentColor" />
  </svg>
)

/** Home page block: today's term (the same for every visitor on the same day), the visit streak,
 *  how much of the dictionary this browser has explored, and where to continue. All client-side;
 *  the server renders an empty shell of the same size so nothing jumps when it fills in. */
export function DailyPanel({ lang, total }: { lang: Lang; total: number }) {
  const t = ui[lang].daily
  const [state, setState] = useState<State | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    let alive = true
    const sync = (cards?: Card[]) =>
      setState((prev) => ({
        word: cards ? cards[Math.floor(seeded(today())() * cards.length)] : prev?.word,
        seen: readSeen(lang).length,
        recent: readRecent(lang),
        streak: readStreak(),
        due: dueTerms(lang, readSaved(lang)).length,
      }))
    sync()
    loadCards(lang)
      .then((cards) => alive && sync(cards))
      .catch(() => {})
    const onChange = () => sync()
    window.addEventListener(PROGRESS_EVENT, onChange)
    window.addEventListener(REVIEW_EVENT, onChange)
    window.addEventListener('saved-changed', onChange)
    window.addEventListener('storage', onChange)
    return () => {
      alive = false
      window.removeEventListener(PROGRESS_EVENT, onChange)
      window.removeEventListener(REVIEW_EVENT, onChange)
      window.removeEventListener('saved-changed', onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [lang])

  const raw = state ? (state.seen / total) * 100 : 0
  // one or two terms out of 700+ still deserves a visible sliver and a label that is not "0%"
  const pct = raw > 0 && raw < 1 ? 1 : Math.min(100, Math.round(raw))
  const pctLabel = raw > 0 && raw < 1 ? '<1%' : `${pct}%`
  const ring = 2 * Math.PI * 26
  const dateLabel = new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <section className="section section--tight daily" aria-label={t.title}>
      <div className="container daily__grid">
        <article className={`daily__card daily__word${state?.word ? ' is-ready' : ''}`}>
          <p className="daily__eyebrow">
            <span className="daily__spark" aria-hidden="true" />
            {t.title}
            {state && <span className="daily__date">{dateLabel.format(new Date())}</span>}
          </p>
          {state?.word ? (
            <>
              <div className="daily__term-row">
                <h2 className="daily__term" dir="ltr">{state.word.t}</h2>
                {state.word.a && (
                  <button
                    type="button"
                    className={`daily__listen${playing ? ' is-playing' : ''}`}
                    aria-label={`${ui[lang].listen}: ${state.word.t}`}
                    onClick={() => {
                      const audio = new Audio(state.word!.a)
                      setPlaying(true)
                      audio.addEventListener('ended', () => setPlaying(false))
                      audio.play().catch(() => setPlaying(false))
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                      <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
                    </svg>
                  </button>
                )}
              </div>
              <p className="daily__meaning" dir={lang === 'ar' ? 'rtl' : 'ltr'}>{state.word.m}</p>
              <div className="daily__actions">
                <Link href={`/${lang}/t/${state.word.i}/`} className="cta cta--primary">{t.open}</Link>
                <Link href={`/${lang}/quiz/`} className="cta cta--ghost">{t.quizCta}</Link>
              </div>
              <p className="daily__foot">{t.tomorrow}</p>
            </>
          ) : (
            <div className="daily__skeleton" aria-hidden="true"><i /><i /><i /></div>
          )}
        </article>

        <article className="daily__card daily__me">
          <div className="daily__stats">
            <div className={`daily__streak${state && state.streak.count > 0 ? ' is-on' : ''}`}>
              <Flame />
              <div>
                <strong>{state ? t.streak(Math.max(state.streak.count, 0)) : ' '}</strong>
                <small>{t.streakHint}</small>
              </div>
            </div>
            <div className="daily__ring" role="img" aria-label={state ? t.explored(state.seen, total) : t.progress}>
              <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true">
                <circle cx="32" cy="32" r="26" className="daily__ring-track" />
                <circle cx="32" cy="32" r="26" className="daily__ring-fill" style={{ strokeDasharray: ring, strokeDashoffset: ring * (1 - pct / 100) }} />
              </svg>
              <span>{pctLabel}</span>
            </div>
          </div>
          <p className="daily__explored">{state ? t.explored(state.seen, total) : ' '}</p>
          {state && state.due > 0 && (
            <Link href={`/${lang}/saved/`} className="daily__due">
              <span className="daily__due-dot" aria-hidden="true" />
              {t.due(state.due)}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="daily__due-arrow">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          )}

          {state && state.recent.length > 0 ? (
            <>
              <Link href={`/${lang}/t/${state.recent[0].id}/`} className="daily__continue">
                <small>{t.continue}</small>
                <strong dir="ltr">{state.recent[0].term}</strong>
                {state.recent[0].translation && <em>{state.recent[0].translation}</em>}
              </Link>
              {state.recent.length > 1 && (
                <>
                  <p className="daily__label">{t.recent}</p>
                  <div className="chips">
                    {state.recent.slice(1, 7).map((r) => (
                      <Link key={r.id} href={`/${lang}/t/${r.id}/`} className="chip" dir="ltr">{r.term}</Link>
                    ))}
                  </div>
                </>
              )}
              <button type="button" className="daily__clear" onClick={() => clearHistory(lang)}>{t.clear}</button>
            </>
          ) : (
            <p className="daily__start">{t.start}</p>
          )}
          <BadgeShelf lang={lang} />
        </article>
      </div>
    </section>
  )
}
