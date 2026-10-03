import { getTerms } from '@/lib/content'
import { languages } from '@/lib/i18n'

export const dynamic = 'force-static'

// Small static index used by the "Surprise me" buttons on every page: { en: { all: [...], byCategory: {...} }, ar: ... }
export function GET() {
  const out: Record<string, { all: string[]; byCategory: Record<string, string[]> }> = {}
  for (const l of languages) {
    const terms = getTerms(l.code)
    const byCategory: Record<string, string[]> = {}
    for (const t of terms) (byCategory[t.category] ??= []).push(t.id)
    out[l.code] = { all: terms.map((t) => t.id), byCategory }
  }
  return Response.json(out)
}
