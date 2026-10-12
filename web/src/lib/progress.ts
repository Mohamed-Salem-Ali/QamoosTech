// Learning progress kept in this browser only (localStorage), like the saved list (lib/saved.ts):
// which terms were opened (per language), the last few for "continue where you left off", and a
// daily visit streak shared by both languages. Every access is guarded: with storage blocked the
// site works the same, it just does not remember.

export type RecentTerm = { id: string; term: string; translation?: string }
export type Streak = { last: string; count: number; best: number }

const SEEN = (lang: string) => `seen-terms:${lang}`
const RECENT = (lang: string) => `recent-terms:${lang}`
const STREAK = 'visit-streak'
const RECENT_MAX = 8

export const PROGRESS_EVENT = 'progress-changed'

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage blocked or full: progress is not kept, the page keeps working
  }
}

/** Local calendar day as YYYY-MM-DD (the visitor's day, not UTC). */
export function today(offsetDays = 0) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return d.toLocaleDateString('en-CA')
}

export function readSeen(lang: string): string[] {
  const value = read<unknown>(SEEN(lang), [])
  return Array.isArray(value) ? value.filter((x): x is string => typeof x === 'string') : []
}

export function readRecent(lang: string): RecentTerm[] {
  const value = read<unknown>(RECENT(lang), [])
  return Array.isArray(value) ? value.filter((x): x is RecentTerm => typeof x?.id === 'string' && typeof x?.term === 'string') : []
}

/** The streak as it stands today: a streak whose last visit was before yesterday has lapsed. */
export function readStreak(): Streak {
  const s = read<Partial<Streak>>(STREAK, {})
  const last = typeof s.last === 'string' ? s.last : ''
  const best = typeof s.best === 'number' ? s.best : 0
  const alive = last === today() || last === today(-1)
  return { last, count: alive && typeof s.count === 'number' ? s.count : 0, best }
}

/** Called once per term page view. */
export function recordVisit(lang: string, term: RecentTerm) {
  const seen = readSeen(lang)
  if (!seen.includes(term.id)) write(SEEN(lang), [...seen, term.id])
  write(RECENT(lang), [term, ...readRecent(lang).filter((x) => x.id !== term.id)].slice(0, RECENT_MAX))

  const s = readStreak()
  if (s.last !== today()) {
    const count = s.last === today(-1) ? s.count + 1 : 1
    write(STREAK, { last: today(), count, best: Math.max(s.best, count) })
  }
  window.dispatchEvent(new Event(PROGRESS_EVENT))
}

export function clearHistory(lang: string) {
  try {
    localStorage.removeItem(SEEN(lang))
    localStorage.removeItem(RECENT(lang))
  } catch {}
  window.dispatchEvent(new Event(PROGRESS_EVENT))
}

const QUIZ_BEST = (lang: string) => `quiz-best:${lang}`

export function readQuizBest(lang: string): number {
  const v = read<unknown>(QUIZ_BEST(lang), 0)
  return typeof v === 'number' ? v : 0
}

/** Stores the score if it beats the best one; returns true when it is a new best. */
export function recordQuizScore(lang: string, score: number) {
  if (score <= readQuizBest(lang)) return false
  write(QUIZ_BEST(lang), score)
  return true
}
