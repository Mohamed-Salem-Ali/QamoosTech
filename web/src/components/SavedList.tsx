'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Flashcards } from './Flashcards'
import { ui, type Lang } from '@/lib/i18n'
import { daysUntil, dueTerms, MAX_BOX, readReview, REVIEW_EVENT, type ReviewRecord } from '@/lib/review'
import { readSaved, writeSaved, type SavedTerm } from '@/lib/saved'

// The saved terms of one language, read from this browser. Renders nothing until the browser has been read,
// so the server HTML never shows a wrong list. The practise button starts with what is due today (spaced
// repetition, lib/review.ts); when nothing is due it offers every saved term instead.
export function SavedList({ lang, labels }: { lang: Lang; labels: { empty: string; remove: string } }) {
  const t = ui[lang].saved
  const [items, setItems] = useState<SavedTerm[] | null>(null)
  const [review, setReview] = useState<Record<string, ReviewRecord>>({})
  const [session, setSession] = useState<{ items: SavedTerm[]; due: boolean } | null>(null)

  useEffect(() => {
    const sync = () => {
      setItems(readSaved(lang))
      setReview(readReview(lang))
    }
    sync()
    window.addEventListener('saved-changed', sync)
    window.addEventListener(REVIEW_EVENT, sync)
    return () => {
      window.removeEventListener('saved-changed', sync)
      window.removeEventListener(REVIEW_EVENT, sync)
    }
  }, [lang])

  if (items === null) return null
  if (items.length === 0) return <p className="saved__empty">{labels.empty}</p>

  const due = dueTerms(lang, items)

  return (
    <>
      {session ? (
        <Flashcards lang={lang} items={session.items} onClose={() => setSession(null)} doneMessage={session.due ? t.doneToday : undefined} />
      ) : (
        <div className="saved__start">
          <button
            type="button"
            className={`btn saved__practise${due.length ? ' is-due' : ''}`}
            onClick={() => setSession(due.length ? { items: due, due: true } : { items, due: false })}
          >
            {due.length ? t.reviewDue(due.length) : t.practiseAll}
          </button>
          <p className="saved__how">{t.howItWorks}</p>
        </div>
      )}
      <ul className="saved">
        {items.map((x) => {
          const rec = review[x.id]
          const box = rec?.box ?? 0
          return (
            <li key={x.id} className="saved__item">
              <Link href={`/${lang}/t/${x.id}/`} className="saved__link">
                <span dir="ltr">{x.term}</span>
                {x.translation && <span className="saved__tr">{x.translation}</span>}
                <span className="saved__meta">
                  <span className="saved__mastery" role="img" aria-label={t.mastery(box, MAX_BOX)}>
                    {Array.from({ length: MAX_BOX }, (_, i) => (
                      <i key={i} className={i < box ? 'is-on' : ''} />
                    ))}
                  </span>
                  <span className={`saved__next${!rec || daysUntil(rec.due) === 0 ? ' is-due' : ''}`}>{t.nextIn(rec ? daysUntil(rec.due) : 0)}</span>
                </span>
              </Link>
              <button type="button" className="saved__remove" onClick={() => writeSaved(lang, readSaved(lang).filter((y) => y.id !== x.id))}>
                {labels.remove}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
