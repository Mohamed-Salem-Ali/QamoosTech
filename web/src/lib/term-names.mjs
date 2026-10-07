// The names a term can be found by, normalised the same way everywhere (validator, dedupe check, search index).

/** Lower-case, letters and digits only, single spaces: "Access Control List (ACL)" -> "access control list acl". */
export function normName(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
}

/**
 * Every name a term answers to: its id, its title, the title without a "(ACRONYM)", the acronym itself,
 * and each part of a "A / B" title. Aliases are not included (they are separate).
 * @param {{ id: string, term: string }} term
 */
export function termNames(term) {
  const names = new Set([term.id.replace(/-/g, ' '), term.term])
  for (const part of term.term.split(/\s*\/\s*/)) {
    names.add(part.replace(/\s*\(.*?\)\s*/g, ' ').trim())
    for (const m of part.matchAll(/\((.*?)\)/g)) names.add(m[1])
  }
  return [...names].filter(Boolean)
}
