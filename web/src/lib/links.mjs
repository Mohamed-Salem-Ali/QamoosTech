// Related links that point one way: A lists B, but B does not list A.
// Allowed by design (a broader term can point to a narrower one without a return link), but the count is reported
// so that weak links can be reviewed. Input: terms with `id` and `related` (the English reference set).
/** @param {{ id: string, related: string[] }[]} terms @returns {[string, string][]} */
export function oneWayLinks(terms) {
  const byId = new Map(terms.map((t) => [t.id, t]))
  const pairs = []
  for (const t of terms) {
    for (const r of t.related) {
      const back = byId.get(r)
      // a link to a missing term is an error elsewhere; here only real terms count
      if (back && !back.related.includes(t.id)) pairs.push([t.id, r])
    }
  }
  return pairs
}
