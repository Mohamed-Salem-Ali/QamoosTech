// Achievements, worked out from what this browser already stores (explored terms, streak, quiz bests,
// saved list, review boxes): nothing new is tracked except which badges the visitor has already been
// told about, so the "unlocked" toast shows once per badge.

import { readQuizBest, readSeen, readStreak } from './progress'
import { MAX_BOX, readReview } from './review'
import { readSaved } from './saved'

export type BadgeId =
  | 'first'
  | 'explore10'
  | 'explore50'
  | 'explore150'
  | 'streak3'
  | 'streak7'
  | 'perfect'
  | 'listener'
  | 'collector'
  | 'reviewer'
  | 'master'
  | 'bilingual'

export type BadgeIcon = 'book' | 'compass' | 'flame' | 'star' | 'ear' | 'bookmark' | 'repeat' | 'crown' | 'globe'

export const BADGES: { id: BadgeId; icon: BadgeIcon }[] = [
  { id: 'first', icon: 'book' },
  { id: 'explore10', icon: 'compass' },
  { id: 'explore50', icon: 'compass' },
  { id: 'explore150', icon: 'crown' },
  { id: 'streak3', icon: 'flame' },
  { id: 'streak7', icon: 'flame' },
  { id: 'perfect', icon: 'star' },
  { id: 'listener', icon: 'ear' },
  { id: 'collector', icon: 'bookmark' },
  { id: 'reviewer', icon: 'repeat' },
  { id: 'master', icon: 'crown' },
  { id: 'bilingual', icon: 'globe' },
]

export const BADGES_EVENT = 'badges-changed'
const SHOWN = 'badges-shown'

/** Every badge this browser has earned, across both languages. */
export function earnedBadges(): Set<BadgeId> {
  const langs = ['ar', 'en']
  const seen = langs.map((l) => readSeen(l))
  const explored = Math.max(...seen.map((s) => s.length))
  const streak = readStreak()
  const bestStreak = Math.max(streak.best, streak.count)
  const quiz = Math.max(...langs.map((l) => readQuizBest(l)))
  const listen = Math.max(...langs.map((l) => readQuizBest(`${l}:listen`)))
  const saved = Math.max(...langs.map((l) => readSaved(l).length))
  const boxes = langs.flatMap((l) => Object.values(readReview(l)).map((r) => r.box))
  const both = seen[0].some((id) => seen[1].includes(id))

  const out = new Set<BadgeId>()
  if (explored >= 1) out.add('first')
  if (explored >= 10) out.add('explore10')
  if (explored >= 50) out.add('explore50')
  if (explored >= 150) out.add('explore150')
  if (bestStreak >= 3) out.add('streak3')
  if (bestStreak >= 7) out.add('streak7')
  if (quiz >= 10) out.add('perfect')
  if (listen >= 7) out.add('listener')
  if (saved >= 10) out.add('collector')
  if (boxes.some((b) => b >= 1)) out.add('reviewer')
  if (boxes.some((b) => b >= MAX_BOX)) out.add('master')
  if (both) out.add('bilingual')
  return out
}

/** Earned badges the visitor has not been told about yet; marks them as told. */
export function takeNewBadges(): BadgeId[] {
  const earned = earnedBadges()
  let shown: string[] = []
  try {
    const value: unknown = JSON.parse(localStorage.getItem(SHOWN) ?? 'null')
    if (Array.isArray(value)) shown = value.filter((x): x is string => typeof x === 'string')
    else {
      // first run after this feature shipped: count what was already earned as told, no toast storm
      localStorage.setItem(SHOWN, JSON.stringify([...earned]))
      return []
    }
  } catch {
    return []
  }
  const fresh = [...earned].filter((id) => !shown.includes(id))
  if (fresh.length) {
    try {
      localStorage.setItem(SHOWN, JSON.stringify([...shown, ...fresh]))
    } catch {}
  }
  return fresh
}
