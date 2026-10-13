'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { buzz } from '@/lib/haptics'
import { ui, type Lang } from '@/lib/i18n'
import { recordReview } from '@/lib/review'
import type { SavedTerm } from '@/lib/saved'

// Shuffled copy, so each round starts in a different order.
function shuffle<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

// Practice with the saved terms: the front is the term, the back is its definition. The definitions come from the
// search index, which is downloaded only when someone starts practising. "Again later" moves a card to the end of the
// queue; "Got it" takes it out for this round. Every answer also schedules the term's next review (lib/review.ts).
export function Flashcards({ lang, items, onClose, doneMessage }: { lang: Lang; items: SavedTerm[]; onClose: () => void; doneMessage?: string }) {
  const t = ui[lang].saved
  const [definitions, setDefinitions] = useState<Record<string, string> | null>(null)
  const [failed, setFailed] = useState(false)
  const [queue, setQueue] = useState<SavedTerm[]>(() => shuffle(items))
  const [known, setKnown] = useState(0)
  const [shown, setShown] = useState(false)
  const current = queue[0]

  useEffect(() => {
    let alive = true
    fetch(`/search/${lang}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status))
        return r.json()
      })
      .then((rows: { id: string; summary: string }[]) => {
        if (alive) setDefinitions(Object.fromEntries(rows.map((x) => [x.id, x.summary])))
      })
      .catch(() => {
        if (alive) setFailed(true)
      })
    return () => {
      alive = false
    }
  }, [lang])

  function answer(gotIt: boolean) {
    if (current) recordReview(lang, current.id, gotIt)
    buzz(gotIt ? 12 : [25, 40, 25])
    setQueue((q) => (gotIt ? q.slice(1) : [...q.slice(1), q[0]]))
    if (gotIt) setKnown((k) => k + 1)
    setShown(false)
  }

  function restart() {
    setQueue(shuffle(items))
    setKnown(0)
    setShown(false)
  }

  // keyboards: Space or Enter shows the answer, 1 = again later, 2 = got it, Esc closes
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return
      const el = e.target instanceof HTMLElement ? e.target : null
      if (el?.closest('input, textarea, select, [contenteditable="true"]')) return
      if (e.key === 'Escape') return onClose()
      if (!current) return
      // a focused button already answers Space and Enter itself
      if (!shown && (e.key === ' ' || e.key === 'Enter') && !el?.closest('button, a')) {
        e.preventDefault()
        setShown(true)
      } else if (shown && (e.key === '1' || e.key === '2')) {
        e.preventDefault()
        answer(e.key === '2')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const definition = current && definitions ? definitions[current.id] : undefined

  return (
    <section className="flashcards" aria-label={t.practise}>
      <header className="flashcards__head">
        <span className="flashcards__progress" aria-live="polite">{t.progress(known, items.length)}</span>
        <button type="button" className="flashcards__close" onClick={onClose}>{t.close}</button>
      </header>

      {!current ? (
        <div className="flashcards__done">
          <p>{doneMessage ?? t.done}</p>
          <button type="button" className="btn btn--ghost" onClick={restart}>{t.restart}</button>
        </div>
      ) : (
        <article className="flashcard">
          <span className="flashcard__term" dir="ltr">{current.term}</span>
          {current.translation && <span className="flashcard__tr">{current.translation}</span>}

          {!shown ? (
            <button type="button" className="btn btn--ghost flashcard__show" onClick={() => setShown(true)}>
              {t.show}
              <kbd className="kbd-hint" aria-hidden="true">Space</kbd>
            </button>
          ) : (
            <div className="flashcard__answer" aria-live="polite">
              {definition ? (
                <p>{definition}</p>
              ) : failed ? (
                <p>
                  {t.unavailable}{' '}
                  <Link href={`/${lang}/t/${current.id}/`}>{t.openTerm}</Link>
                </p>
              ) : (
                <p>{t.loading}</p>
              )}
              <div className="flashcard__actions">
                <button type="button" className="btn btn--ghost" onClick={() => answer(false)} aria-keyshortcuts="1">
                  {t.again}
                  <kbd className="kbd-hint" aria-hidden="true">1</kbd>
                </button>
                <button type="button" className="btn" onClick={() => answer(true)} aria-keyshortcuts="2">
                  {t.gotIt}
                  <kbd className="kbd-hint" aria-hidden="true">2</kbd>
                </button>
              </div>
            </div>
          )}
        </article>
      )}
    </section>
  )
}
