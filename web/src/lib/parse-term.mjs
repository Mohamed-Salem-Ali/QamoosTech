// Shared by the site and by scripts/validate-content.mjs.
// A term file = YAML frontmatter + four ordered sections (definition, context, examples, mistake).
import matter from 'gray-matter'

/**
 * @typedef {{ text: string, translation?: string }} Example
 * @typedef {{
 *   id: string, category: string, level: 'beginner' | 'intermediate', related: string[],
 *   term: string, translation?: string, pronunciation: string,
 *   definition: string, context: string, examples: Example[], mistake: string,
 * }} Term
 */

export const SECTION_COUNT = 4

/** @param {string} source @returns {{ term: Term, errors: string[] }} */
export function parseTerm(source) {
  const errors = []
  const { data, content } = matter(source)
  const sections = content.split(/^## .*$/m).slice(1).map((s) => s.trim())
  if (sections.length !== SECTION_COUNT) errors.push(`expected ${SECTION_COUNT} "##" sections, found ${sections.length}`)
  const [definition = '', context = '', examplesRaw = '', mistake = ''] = sections

  const examples = []
  for (const line of examplesRaw.split('\n')) {
    const top = line.match(/^- (.+)$/)
    const nested = line.match(/^\s+- (.+)$/)
    if (top) examples.push({ text: top[1].trim() })
    else if (nested && examples.length) examples[examples.length - 1].translation = nested[1].trim()
  }

  for (const key of ['id', 'category', 'level', 'term', 'pronunciation']) {
    if (!data[key]) errors.push(`missing frontmatter "${key}"`)
  }
  if (data.level && !['beginner', 'intermediate'].includes(data.level)) errors.push(`invalid level "${data.level}"`)
  if (!definition) errors.push('empty definition')
  if (!context) errors.push('empty context')
  if (examples.length < 2) errors.push('need at least 2 examples')
  if (!mistake) errors.push('empty common-mistake section')

  return {
    errors,
    term: {
      id: String(data.id ?? ''),
      category: String(data.category ?? ''),
      level: data.level ?? 'beginner',
      related: Array.isArray(data.related) ? data.related.map(String) : [],
      term: String(data.term ?? ''),
      translation: data.translation ? String(data.translation) : undefined,
      pronunciation: String(data.pronunciation ?? ''),
      definition,
      context,
      examples,
      mistake,
    },
  }
}
