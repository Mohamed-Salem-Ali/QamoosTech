// Normalizes Arabic and Latin text so "إِيدمبوتنسي" matches "ايدمبوتنسي" and "API" matches "api".
export function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export type SearchItem = { id: string; term: string; translation?: string; category: string; categoryName: string; summary: string }

export function runSearch(items: SearchItem[], query: string, limit = 8) {
  const q = normalize(query)
  if (!q) return []
  const scored: { item: SearchItem; score: number }[] = []
  for (const item of items) {
    const term = normalize(item.term)
    const tr = normalize(item.translation ?? '')
    const body = normalize(item.summary)
    let score = 0
    if (term === q || tr === q) score = 100
    else if (term.startsWith(q) || tr.startsWith(q)) score = 80
    else if (term.split(' ').some((w) => w.startsWith(q)) || tr.split(' ').some((w) => w.startsWith(q))) score = 60
    else if (term.includes(q) || tr.includes(q)) score = 40
    else if (body.includes(q)) score = 15
    if (score) scored.push({ item, score })
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.item)
}
