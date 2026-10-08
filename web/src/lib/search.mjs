// Search for the glossary. Plain functions with no framework imports, so the site, the static build and the
// tests (`npm test`) all run the same code. Types come from the JSDoc below (tsconfig allows JS).

/**
 * @typedef {{
 *   id: string, term: string, translation?: string, pronunciation?: string,
 *   category: string, categoryName: string, summary: string,
 *   keywords?: string[], aliases?: string[],
 * }} SearchItem
 * @typedef {{ text: string, words: string[], set: Set<string> }} NamePart
 * @typedef {{
 *   item: SearchItem, names: NamePart[], nameWords: Set<string>, pron: string, pronWords: Set<string>,
 *   keys: string[], keyWords: Set<string>, body: string, bodyWords: Set<string>,
 * }} IndexedItem
 * @typedef {{ entries: IndexedItem[], idf: (word: string) => number }} SearchIndex
 */

// Normalizes Arabic and Latin text so "إِيدمبوتنسي" matches "ايدمبوتنسي", "API" matches "api" and "café" matches "cafe".
// Arabic: drop diacritics and tatweel, unify alef forms, alef maqsura and taa marbuta. Latin: drop accents (NFD, then the marks).
export function normalize(input) {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[ً-ٰـ]/g, '')
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Very common words that should not make a multi-word query match everything.
const STOP = new Set(['the', 'a', 'an', 'of', 'to', 'in', 'on', 'for', 'and', 'or', 'is', 'my', 'how', 'what', 'do', 'does', 'i', 'it', 'with', 'not', 'no', 'can', 'be', 'are', 'was', 'when', 'why', 'that', 'this', 'we', 'you', 'your', 'من', 'في', 'على', 'الى', 'عن', 'ما', 'هو', 'هي', 'كيف', 'ماذا'])

const words = (s) => s.split(' ').filter(Boolean)

// A query word matches a set of words when it is one of them, or, for 3+ letters, when it starts one ("deploy" finds "deployment").
function hasWord(set, token) {
  if (set.has(token)) return true
  if (token.length < 3) return false
  for (const w of set) if (w.startsWith(token)) return true
  return false
}

/** @returns {NamePart} */
const namePart = (text) => ({ text, words: words(text), set: new Set(words(text)) })

/**
 * Normalizes every item once, so typing does not re-normalize the whole glossary on each keystroke.
 * Also counts how many terms each word appears in, so common words ("git") weigh less than rare ones ("rebase").
 * @param {SearchItem[]} items
 * @returns {SearchIndex}
 */
export function createSearchIndex(items) {
  const entries = items.map((item) => {
    const names = [item.term, item.translation ?? '', ...(item.aliases ?? [])].map(normalize).filter(Boolean).map(namePart)
    const pron = normalize(item.pronunciation ?? '')
    const keys = (item.keywords ?? []).map(normalize).filter(Boolean)
    const body = normalize(item.summary)
    return {
      item,
      names,
      nameWords: new Set(names.flatMap((n) => n.words)),
      pron,
      pronWords: new Set(words(pron)),
      keys,
      keyWords: new Set(keys.flatMap(words)),
      body,
      bodyWords: new Set(words(body)),
    }
  })

  const termsWithWord = new Map()
  for (const e of entries) for (const w of e.nameWords) termsWithWord.set(w, (termsWithWord.get(w) ?? 0) + 1)
  const total = entries.length
  // inverse frequency: a word in every title says little; a word in one title says a lot
  const idf = (word) => Math.log(1 + total / (termsWithWord.get(word) ?? 1))

  return { entries, idf }
}

/**
 * Best score for one item (0 when nothing matches). The scale is described at runSearch.
 * @param {IndexedItem} e
 * @param {string} q the query without stop words (or as typed, if none is left)
 * @param {string[]} qWords the meaningful query words (stop words left out)
 * @param {(word: string) => number} idf
 */
function scoreItem(e, q, qWords, idf) {
  let best = 0
  const take = (score) => {
    if (score > best) best = score
  }
  const nameTexts = e.names.map((n) => n.text)
  const weightTotal = qWords.reduce((sum, w) => sum + idf(w), 0) || 1
  // the share of the query's weight that the words in `set` cover
  const weightIn = (set) => qWords.filter((w) => hasWord(set, w)).reduce((sum, w) => sum + idf(w), 0) / weightTotal

  // the whole query is a name, or it is how the term is said
  if (nameTexts.includes(q)) take(100)
  if (e.pron === q) take(95)
  if (nameTexts.some((n) => n.startsWith(q))) take(75)
  // one word of a name: "ci" in "ci cd", "lgtm" in "lgtm"
  if (e.nameWords.has(q)) take(90)
  // one word of the way it is said: "ستامبيد" in "كاش ستامبيد"
  if (e.pronWords.has(q)) take(85)
  if (q.length >= 3 && [...e.nameWords].some((w) => w.startsWith(q))) take(60)
  // search phrases, which hold misspellings too ("dedline" for Deadline)
  if (e.keys.includes(q)) take(55)
  if (e.keys.some((k) => k.startsWith(q))) take(50)
  if (nameTexts.some((n) => n.includes(q))) take(40)
  if (e.keys.some((k) => k.includes(q))) take(35)
  if (q.length >= 3 && e.body.includes(q)) take(12)

  // several meaningful words in any order: "what is a pull request", "git rebase"
  if (qWords.length >= 2) {
    for (const part of e.names) {
      const inName = weightIn(part.set)
      if (inName < 0.5) continue
      // how much of the name the query used: "Rebase" is all of itself, half of "Interactive Rebase"
      const ofName = part.words.filter((w) => qWords.includes(w)).length / part.words.length
      take(50 + 20 * inName + 10 * ofName)
    }
    const inKeys = weightIn(e.keyWords)
    if (inKeys >= 0.5) take(30 + 20 * inKeys)
    const inBody = weightIn(e.bodyWords)
    if (inBody >= 0.75) take(15 + 10 * inBody)
  }
  return best
}

/**
 * Ranking, highest first:
 * 100 exact name · 95 exact sound · 90 one word of a name · 85 one word of the sound · 75 name starts with the query
 * 50-80 several query words in one name (rarer words and more of the name used = higher) · 60 a name word starts with it
 * 40-55 search phrase · 35 phrase contains it · 12-25 definition only.
 * Stop words are ignored ("what is a pull request" = "pull request"). Ties keep the index order (alphabetical by English title).
 * @param {SearchIndex} index from createSearchIndex
 * @param {string} query
 * @param {number} [limit]
 * @returns {SearchItem[]}
 */
export function runSearch(index, query, limit = 8) {
  const normalized = normalize(query)
  if (normalized.length < 2) return []
  const tokens = words(normalized).filter((w) => !STOP.has(w))
  const q = tokens.length ? tokens.join(' ') : normalized
  const qWords = tokens
  const scored = []
  for (const e of index.entries) {
    const score = scoreItem(e, q, qWords, index.idf)
    if (score) scored.push({ item: e.item, score })
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.item)
}
