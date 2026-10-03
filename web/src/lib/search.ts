// Normalizes Arabic and Latin text so "إِيدمبوتنسي" matches "ايدمبوتنسي" and "API" matches "api".
export function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export type SearchItem = {
  id: string
  term: string
  translation?: string
  category: string
  categoryName: string
  summary: string
  /** natural-language phrases people might type to find this term (both languages), generated at build time */
  keywords?: string[]
}

// Very common words that should not make a multi-word query match everything.
const STOP = new Set(['the', 'a', 'an', 'of', 'to', 'in', 'on', 'for', 'and', 'or', 'is', 'my', 'how', 'what', 'do', 'does', 'i', 'it', 'with', 'not', 'no', 'can', 'be', 'are', 'was', 'when', 'why', 'that', 'this', 'we', 'you', 'your', 'من', 'في', 'على', 'الى', 'عن', 'ما', 'هو', 'هي', 'كيف', 'ماذا'])

const tokens = (s: string) => s.split(' ').filter((w) => w.length > 1 && !STOP.has(w))

/**
 * Ranking, highest first:
 * 100 exact term/translation · 80 prefix · 60 a word starts with it · 40 contained
 * 50 matches a generated search phrase · 12-45 multi-word query: share of its words found in term/phrases/summary
 */
export function runSearch(items: SearchItem[], query: string, limit = 8) {
  const q = normalize(query)
  if (!q) return []
  const qTokens = tokens(q)
  const scored: { item: SearchItem; score: number }[] = []
  for (const item of items) {
    const term = normalize(item.term)
    const tr = normalize(item.translation ?? '')
    const body = normalize(item.summary)
    const keys = (item.keywords ?? []).map(normalize)
    let score = 0
    if (term === q || tr === q) score = 100
    else if (term.startsWith(q) || tr.startsWith(q)) score = 80
    else if (term.split(' ').some((w) => w.startsWith(q)) || tr.split(' ').some((w) => w.startsWith(q))) score = 60
    else if (keys.some((k) => k === q || k.startsWith(q))) score = 55
    else if (term.includes(q) || tr.includes(q)) score = 40
    else if (keys.some((k) => k.includes(q))) score = 50

    if (!score && qTokens.length > 0) {
      // natural-language query: how many of its words appear in the term, its search phrases, or its definition
      const hay = `${term} ${tr} ${keys.join(' ')}`
      const inKeys = qTokens.filter((w) => hay.includes(w)).length
      const inBody = qTokens.filter((w) => body.includes(w)).length
      const share = Math.max(inKeys, 0) / qTokens.length
      if (inKeys > 0 && share >= 0.5) score = 20 + Math.round(share * 25)
      else if (inBody / qTokens.length >= 0.75 && qTokens.length > 1) score = 14
    }
    if (!score && body.includes(q)) score = 12
    if (score) scored.push({ item, score })
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.item)
}
