// Hides a term inside its own meaning, so a quiz option like "A digital certificate is..." does not
// give the answer away. The term's parts are masked too: "Pull Request (PR)" hides "Pull Request"
// and "PR", "ASAP / EOD" hides both, and a trailing plural ("s" / "es") goes with the word.
// Plain JavaScript so tests/mask-term.test.mjs can import it directly.

/** @param {string} meaning @param {string} term @returns {string} */
export function maskTerm(meaning, term) {
  const clean = term.replace(/[*]/g, '')
  // distinctive single tokens: acronyms (API, PR) and tokens with symbols (A/B, CI/CD, .env)
  const tokens = clean.split(/\s+/).filter((w) => /^[A-Z0-9]{2,}$/.test(w) || (/[^\p{L}]/u.test(w) && /\p{L}/u.test(w) && w.length >= 2))
  const parts = [clean, ...clean.split(/[()/]| vs /i), ...tokens]
    .map((x) => x.replace(/[()]/g, '').trim())
    .filter((x, i, all) => x.length >= 2 && all.indexOf(x) === i)
    .sort((a, b) => b.length - a.length)
  let out = meaning
  for (const part of parts) {
    const escaped = part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    out = out.replace(new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}(e?s)?(?=$|[^\\p{L}\\p{N}])`, 'giu'), '$1___')
  }
  return out
}
