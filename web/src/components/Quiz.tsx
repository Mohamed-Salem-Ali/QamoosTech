'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { loadCards, type Card } from '@/lib/cards'
import { buzz } from '@/lib/haptics'
import { maskTerm } from '@/lib/mask-term.mjs'
import { readQuizBest, recordQuizScore } from '@/lib/progress'
import { readSaved, writeSaved } from '@/lib/saved'
import { dirOf, ui, type Lang } from '@/lib/i18n'

const LENGTH = 10

type Question = { card: Card; options: Card[] }
type Phase = 'setup' | 'play' | 'done'

function shuffle<T>(items: T[]): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
  return a
}

/** Ten questions from the chosen category. Wrong options come from the same category when it has
 *  enough terms (harder and more useful than random ones), and no meaning appears twice. */
function buildQuestions(cards: Card[], category: string): Question[] {
  const pool = category ? cards.filter((c) => c.c === category) : cards
  return shuffle(pool)
    .slice(0, LENGTH)
    .map((card) => {
      const near = shuffle(pool.filter((c) => c.i !== card.i))
      const far = shuffle(cards.filter((c) => c.c !== card.c))
      const options: Card[] = [card]
      for (const c of [...near, ...far]) {
        if (options.length === 4) break
        if (!options.some((o) => o.m === c.m)) options.push(c)
      }
      return { card, options: shuffle(options) }
    })
}

const Flame = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path d="M12 2.5c.6 3.2-1.6 4.6-3 6.4C7.6 10.7 6.5 12.6 6.5 15a5.5 5.5 0 0 0 11 0c0-2.3-1-4-2.1-5.3-.2 1.3-.9 2.3-2 2.8.4-3.6-.4-7.3-1.4-10Z" fill="currentColor" />
  </svg>
)

/** A one-off burst for a new best score. CSS only; hidden for reduced motion (features.css). */
function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        x: Math.random() * 100,
        d: 1 + Math.random() * 1.3,
        delay: Math.random() * 0.4,
        r: Math.random() * 360,
        c: ['var(--brand)', 'var(--ochre)', 'var(--sage)', 'var(--ink-soft)'][i % 4],
      })),
    [],
  )
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p, i) => (
        <i key={i} style={{ insetInlineStart: `${p.x}%`, animationDuration: `${p.d}s`, animationDelay: `${p.delay}s`, background: p.c, rotate: `${p.r}deg` }} />
      ))}
    </div>
  )
}

export function Quiz({ lang, categories }: { lang: Lang; categories: { id: string; name: string }[] }) {
  const t = ui[lang].quiz
  const [cards, setCards] = useState<Card[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [category, setCategory] = useState('')
  const [phase, setPhase] = useState<Phase>('setup')
  const [questions, setQuestions] = useState<Question[]>([])
  const [at, setAt] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [results, setResults] = useState<boolean[]>([])
  const [combo, setCombo] = useState(0)
  const [best, setBest] = useState(0)
  const [newBest, setNewBest] = useState(false)
  const [savedMissed, setSavedMissed] = useState(false)
  const nextRef = useRef<HTMLButtonElement>(null)
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // ?c=<category> preselects a category (the "test yourself" link on category pages)
    const c = new URLSearchParams(location.search).get('c')
    if (c && categories.some((x) => x.id === c)) setCategory(c)
    setBest(readQuizBest(lang))
    loadCards(lang).then(setCards, () => setFailed(true))
  }, [lang, categories])

  // keep the chosen category visible in the phone's single-row chip scroller
  useEffect(() => {
    if (phase !== 'setup') return
    document.querySelector('.quiz__chip.is-on')?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [category, phase])

  useEffect(
    () => () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current)
    },
    [],
  )

  function start() {
    if (!cards) return
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
    setQuestions(buildQuestions(cards, category))
    setAt(0)
    setPicked(null)
    setResults([])
    setCombo(0)
    setNewBest(false)
    setSavedMissed(false)
    setPhase('play')
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  const next = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
    advanceTimer.current = null
    if (at + 1 >= questions.length) {
      const score = results.filter(Boolean).length
      const isBest = recordQuizScore(lang, score)
      setNewBest(isBest && score > 0)
      setBest(readQuizBest(lang))
      setPhase('done')
      if (isBest && score > 0) buzz([20, 60, 20, 60, 40])
    } else {
      setAt(at + 1)
      setPicked(null)
    }
  }, [at, questions.length, results, lang])

  // the auto-advance timer must call the latest `next` (it closes over the answers so far)
  const nextLatest = useRef(next)
  useEffect(() => {
    nextLatest.current = next
  }, [next])

  function pick(i: number) {
    if (picked !== null || phase !== 'play') return
    const q = questions[at]
    const right = q.options[i].i === q.card.i
    setPicked(i)
    setResults((r) => [...r, right])
    setCombo((c) => (right ? c + 1 : 0))
    buzz(right ? 15 : [40, 60, 40])
    // a right answer moves on by itself; a wrong one waits so the right answer can be read
    if (right) advanceTimer.current = setTimeout(() => nextLatest.current(), 950)
    else setTimeout(() => nextRef.current?.focus({ preventScroll: true }), 50)
  }

  // keyboard: 1 to 4 answers, Enter continues
  useEffect(() => {
    if (phase !== 'play') return
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return
      const n = Number(e.key)
      if (n >= 1 && n <= 4 && picked === null) pick(n - 1)
      else if (e.key === 'Enter' && picked !== null && e.target === document.body) {
        e.preventDefault()
        next()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const score = results.filter(Boolean).length
  const missed = questions.filter((_, i) => results[i] === false).map((q) => q.card)

  function saveMissed() {
    const list = readSaved(lang)
    const add = missed.filter((c) => !list.some((x) => x.id === c.i)).map((c) => ({ id: c.i, term: c.t, translation: lang === 'ar' ? c.m : undefined }))
    writeSaved(lang, [...list, ...add])
    setSavedMissed(true)
    buzz(15)
  }

  if (phase === 'setup') {
    return (
      <section className="quiz quiz--setup">
        <header className="page__head">
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </header>
        <p className="quiz__label">{t.scope}</p>
        <div className="quiz__scope" role="radiogroup" aria-label={t.scope}>
          {[{ id: '', name: t.all }, ...categories].map((c) => (
            <button
              key={c.id || 'all'}
              type="button"
              role="radio"
              aria-checked={category === c.id}
              className={`chip quiz__chip${category === c.id ? ' is-on' : ''}`}
              onClick={() => setCategory(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="quiz__start">
          <button type="button" className="cta cta--primary" onClick={start} disabled={!cards}>
            {cards ? t.start : t.loading}
          </button>
          {best > 0 && <span className="quiz__best">{t.best(best, LENGTH)}</span>}
        </div>
        {failed && (
          <p className="quiz__error" role="alert">
            {t.unavailable}
          </p>
        )}
      </section>
    )
  }

  if (phase === 'done') {
    const message = score === questions.length ? t.perfect : score >= questions.length * 0.6 ? t.good : t.keep
    const ring = 2 * Math.PI * 52
    return (
      <section className="quiz quiz--done" aria-live="polite">
        {newBest && <Confetti />}
        <p className="quiz__label">{t.result}</p>
        <div className="quiz__score">
          <svg viewBox="0 0 120 120" width="160" height="160" aria-hidden="true">
            <circle cx="60" cy="60" r="52" className="quiz__score-track" />
            <circle cx="60" cy="60" r="52" className="quiz__score-fill" style={{ strokeDasharray: ring, strokeDashoffset: ring * (1 - score / questions.length) }} />
          </svg>
          <strong>{t.score(score, questions.length)}</strong>
        </div>
        {newBest && <p className="quiz__newbest">{t.newBest}</p>}
        <p className="quiz__message">{message}</p>
        <p className="quiz__best">{t.best(best, LENGTH)}</p>
        <div className="quiz__actions">
          <button type="button" className="cta cta--primary" onClick={start}>
            {t.again}
          </button>
          <button type="button" className="cta cta--ghost" onClick={() => setPhase('setup')}>
            {t.scope}
          </button>
        </div>
        {missed.length > 0 && (
          <div className="quiz__missed">
            <h2>{t.review}</h2>
            <ul>
              {missed.map((c) => (
                <li key={c.i}>
                  <Link href={`/${lang}/t/${c.i}/`}>
                    <strong dir="ltr">{c.t}</strong>
                    <span>{c.m}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <button type="button" className="cta cta--ghost" onClick={saveMissed} disabled={savedMissed}>
              {savedMissed ? t.savedMissed : t.saveMissed}
            </button>
          </div>
        )}
      </section>
    )
  }

  const q = questions[at]
  const rightIndex = q.options.findIndex((o) => o.i === q.card.i)
  return (
    <section className="quiz quiz--play">
      <div className="quiz__top">
        <span className="quiz__count">{t.question(at + 1, questions.length)}</span>
        {combo >= 2 && (
          <span className="quiz__combo" key={combo}>
            <Flame />
            {t.combo(combo)}
          </span>
        )}
        <button type="button" className="quiz__quit" onClick={() => setPhase('setup')}>
          {t.quit}
        </button>
      </div>
      <ol className="quiz__dots" aria-hidden="true">
        {questions.map((_, i) => (
          <li key={i} className={results[i] === true ? 'is-right' : results[i] === false ? 'is-wrong' : i === at ? 'is-now' : ''} />
        ))}
      </ol>

      <div className="quiz__card" key={at}>
        <p className="quiz__prompt">{t.pick}</p>
        <h1 className="quiz__term" dir="ltr">
          {q.card.t}
        </h1>
        <div className="quiz__options">
          {q.options.map((o, i) => {
            const state = picked === null ? '' : i === rightIndex ? ' is-right' : i === picked ? ' is-wrong' : ' is-dim'
            return (
              <button key={o.i} type="button" className={`quiz__option${state}`} onClick={() => pick(i)} disabled={picked !== null} dir={dirOf(lang)}>
                <kbd aria-hidden="true">{i + 1}</kbd>
                <span>{maskTerm(o.m, o.t)}</span>
              </button>
            )
          })}
        </div>
        <p className="quiz__feedback" aria-live="assertive">
          {picked === null ? '' : picked === rightIndex ? t.correct : `${t.wrong}: ${q.card.m}`}
        </p>
        {picked !== null && picked !== rightIndex && (
          <div className="quiz__next">
            <button ref={nextRef} type="button" className="cta cta--primary" onClick={next}>
              {t.next}
            </button>
            <Link href={`/${lang}/t/${q.card.i}/`} className="cta cta--ghost">
              {ui[lang].daily.open}
            </Link>
          </div>
        )}
      </div>
      <p className="quiz__keys">{t.keys}</p>
    </section>
  )
}
