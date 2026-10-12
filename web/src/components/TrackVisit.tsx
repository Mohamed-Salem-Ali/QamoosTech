'use client'

import { useEffect } from 'react'
import { recordVisit, type RecentTerm } from '@/lib/progress'

/** Marks the term as explored, adds it to "recently viewed", and counts today toward the streak. */
export function TrackVisit({ lang, term }: { lang: string; term: RecentTerm }) {
  useEffect(() => {
    recordVisit(lang, term)
  }, [lang, term])
  return null
}
