'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { loadCards, type Card } from '@/lib/cards'
import { buzz } from '@/lib/haptics'
import { maskTerm } from '@/lib/mask-term.mjs'
import { readQuizBest, recordQuizScore } from '@/lib/progress'
import { readSaved, writeSaved } from '@/lib/saved'
import { ShareTerm } from './ShareTerm'
import { dirOf, ui, type Lang } from '@/lib/i18n'

const LENGTH = 10

type Question = { card: Card; options: Card[] }
type Phase = 'setup' | 'play' | 'done'
type Mode = 'meaning' | 'listen'

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
 *  enough terms (harder and more useful than random ones), and no option text appears twice.
 *  Listening questions only use terms that have recorded audio; a category with too few of them
 *  falls back to every recorded term. */
function buildQuestions(cards: Card[], category: string, mode: Mode): Question[] {
  const usable = mode === 'listen' ? cards.filter((c) => c.a) : cards
  const inCategory = category ? usable.filter((c) => c.c === category) : usable
  const pool = inCategory.length >= 4 ? inCategory : usable
  const label = (c: Card) => (mode === 'listen' ? c.t : c.m)
  return shuffle(pool)
    .slice(0, LENGTH)
    .map((card) => {
      const near = shuffle(pool.filter((c) => c.i !== card.i))
      const far = shuffle(cards.filter((c) => c.c !== card.c))
      const options: Card[] = [card]
      for (const c of [...near, ...far]) {
        if (options.length === 4) break
        if (!options.some((o) => label(o) === label(c))) options.push(c)
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
  const [mode, setMode] = useState<Mode>('meaning')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const bestKey = mode === 'listen' ? `${lang}:listen` : lang
  // recorded terms per category, for the listening mode's chips
  const audioCount = useMemo(() => {
    if (!cards) return null
    const counts: Record<string, number> = {}
    for (const c of cards) if (c.a) counts[c.c] = (counts[c.c] ?? 0) + 1
    return counts
  }, [cards])

  // switching to listening drops a category that has too few recordings
  useEffect(() => {
    if (mode === 'listen' && category && audioCount && (audioCount[category] ?? 0) < 4) setCategory('')
  }, [mode, category, audioCount])
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
    if (new URLSearchParams(location.search).get('mode') === 'listen') setMode('listen')
    loadCards(lang).then(setCards, () => setFailed(true))
  }, [lang, categories])

  useEffect(() => {
    setBest(readQuizBest(bestKey))
  }, [bestKey])

  // listening: play the term as each question appears (and on the replay button)
  const play = useCallback((url?: string) => {
    if (!url) return
    audioRef.current?.pause()
    const audio = new Audio(url)
    audioRef.current = audio
    audio.play().catch(() => {})
  }, [])
  useEffect(() => {
    if (phase === 'play' && mode === 'listen') play(questions[at]?.card.a)
  }, [phase, mode, at, questions, play])
  useEffect(() => () => audioRef.current?.pause(), [])

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
    setQuestions(buildQuestions(cards, category, mode))
    setAt(0)
    setPicked(null)
    setResults([])
    setCombo(0)
    setNewBest(false)
    setSavedMissed(false)
    setPhase('play')
    // keep the choice in the address, so "challenge a friend" (and a reload) opens the same kind of quiz
    const params = new URLSearchParams()
    if (category) params.set('c', category)
    if (mode === 'listen') params.set('mode', 'listen')
    const query = params.toString()
    history.replaceState(history.state, '', `${location.pathname}${query ? `?${query}` : ''}`)
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  const next = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
    advanceTimer.current = null
    if (at + 1 >= questions.length) {
      const score = results.filter(Boolean).length
      const isBest = recordQuizScore(bestKey, score)
      setNewBest(isBest && score > 0)
      setBest(readQuizBest(bestKey))
      setPhase('done')
      if (isBest && score > 0) buzz([20, 60, 20, 60, 40])
    } else {
      setAt(at + 1)
      setPicked(null)
    }
  }, [at, questions.length, results, bestKey])

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
        <p className="quiz__label">{t.mode}</p>
        <div className="quiz__modes" role="radiogroup" aria-label={t.mode}>
          {(['meaning', 'listen'] as const).map((m) => (
            <button key={m} type="button" role="radio" aria-checked={mode === m} className={`quiz__mode${mode === m ? ' is-on' : ''}`} onClick={() => setMode(m)}>
              <span className="quiz__mode-icon" aria-hidden="true">
                {m === 'meaning' ? (
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M8 8h8M8 12h6" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /></svg>
                )}
              </span>
              <strong>{m === 'meaning' ? t.modeMeaning : t.modeListen}</strong>
              <small>{m === 'meaning' ? t.modeMeaningHint : t.modeListenHint}</small>
            </button>
          ))}
        </div>
        <p className="quiz__label">{t.scope}</p>
        <div className="quiz__scope" role="radiogroup" aria-label={t.scope}>
          {[{ id: '', name: t.all }, ...categories].map((c) => {
            // listening needs recorded terms: a category with fewer than four cannot fill the options
            const recorded = c.id && audioCount ? audioCount[c.id] ?? 0 : null
            const off = mode === 'listen' && recorded !== null && recorded < 4
            return (
              <button
                key={c.id || 'all'}
                type="button"
                role="radio"
                aria-checked={category === c.id}
                disabled={off}
                className={`chip quiz__chip${category === c.id ? ' is-on' : ''}`}
                onClick={() => setCategory(c.id)}
              >
                {c.name}
                {mode === 'listen' && recorded !== null && <span className="quiz__chip-count">{recorded}</span>}
              </button>
            )
          })}
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
        {/* the link keeps the category and mode (?c=, ?mode=), so a friend gets the same kind of quiz */}
        <ShareTerm title="QamoosTech" text={t.shareText(score, questions.length)} labels={{ share: t.challenge, copied: ui[lang].share.copied }} />
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
        <p className="quiz__prompt">{mode === 'listen' ? t.listenPrompt : t.pick}</p>
        {mode === 'listen' ? (
          <div className="quiz__listen">
            <button type="button" className="quiz__play" onClick={() => play(q.card.a)} aria-label={t.play}>
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
              </svg>
              <span className="quiz__play-wave" aria-hidden="true" />
            </button>
            <span className="quiz__replay">{t.replay}</span>
            {picked !== null && <p className="quiz__reveal">{q.card.m}</p>}
          </div>
        ) : (
          <h1 className="quiz__term" dir="ltr">
            {q.card.t}
          </h1>
        )}
        <div className="quiz__options">
          {q.options.map((o, i) => {
            const state = picked === null ? '' : i === rightIndex ? ' is-right' : i === picked ? ' is-wrong' : ' is-dim'
            return (
              <button
                key={o.i}
                type="button"
                className={`quiz__option${state}${mode === 'listen' ? ' quiz__option--term' : ''}`}
                onClick={() => pick(i)}
                disabled={picked !== null}
                dir={mode === 'listen' ? 'ltr' : dirOf(lang)}
              >
                <kbd aria-hidden="true">{i + 1}</kbd>
                <span>{mode === 'listen' ? o.t : maskTerm(o.m, o.t)}</span>
              </button>
            )
          })}
        </div>
        <p className="quiz__feedback" aria-live="assertive">
          {picked === null ? '' : picked === rightIndex ? t.correct : `${t.wrong}: ${mode === 'listen' ? q.card.t : q.card.m}`}
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
