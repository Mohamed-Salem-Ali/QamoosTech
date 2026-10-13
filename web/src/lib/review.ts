// Spaced repetition for saved terms, kept in this browser only (like lib/saved.ts).
// Each saved term has a box (0 to 5) and a due day. "Got it" moves it up a box and pushes the next
// review further out (1, 3, 7, 16, 35 days); "Again" sends it back to box 0, due today. A saved term
// with no record yet is due today. This is the Leitner system: simple, predictable, no settings.

import { today } from './progress'
import type { SavedTerm } from './saved'

export type ReviewRecord = { box: number; due: string }
export const REVIEW_EVENT = 'review-changed'
export const MAX_BOX = 5
const INTERVALS = [0, 1, 3, 7, 16, 35]
const key = (lang: string) => `review:${lang}`

export function readReview(lang: string): Record<string, ReviewRecord> {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key(lang)) ?? '{}')
    return value && typeof value === 'object' ? (value as Record<string, ReviewRecord>) : {}
  } catch {
    return {}
  }
}

export function recordReview(lang: string, id: string, gotIt: boolean) {
  const all = readReview(lang)
  const box = gotIt ? Math.min((all[id]?.box ?? 0) + 1, MAX_BOX) : 0
  all[id] = { box, due: today(INTERVALS[box]) }
  try {
    localStorage.setItem(key(lang), JSON.stringify(all))
  } catch {}
  window.dispatchEvent(new Event(REVIEW_EVENT))
}

/** Saved terms whose review day has come (or that were never reviewed). */
export function dueTerms(lang: string, saved: SavedTerm[]): SavedTerm[] {
  const all = readReview(lang)
  const now = today()
  return saved.filter((s) => !all[s.id] || all[s.id].due <= now)
}

/** Whole days until a term is due (0 = today or overdue). */
export function daysUntil(due: string) {
  const ms = new Date(`${due}T00:00:00`).getTime() - new Date(`${today()}T00:00:00`).getTime()
  return Math.max(0, Math.round(ms / 86_400_000))
}
