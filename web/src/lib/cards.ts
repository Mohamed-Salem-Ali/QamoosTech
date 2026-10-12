// Client loader for /<lang>/cards.json (see app/[lang]/cards.json/route.ts). Fetched once per page.
export type Card = { i: string; t: string; m: string; c: string; l: 'b' | 'i' }

const cache = new Map<string, Promise<Card[]>>()

export function loadCards(lang: string): Promise<Card[]> {
  let hit = cache.get(lang)
  if (!hit) {
    hit = fetch(`/${lang}/cards.json`).then((r) => {
      if (!r.ok) throw new Error(`cards: ${r.status}`)
      return r.json() as Promise<Card[]>
    })
    hit.catch(() => cache.delete(lang))
    cache.set(lang, hit)
  }
  return hit
}

/** Small seeded generator, so "term of the day" is the same for everyone on the same day. */
export function seeded(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  return () => {
    h += 0x6d2b79f5
    let t = h
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
