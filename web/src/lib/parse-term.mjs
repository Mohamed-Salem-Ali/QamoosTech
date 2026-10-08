// Shared by the site and by the scripts (validate, qa, enrich).
// A term file = YAML frontmatter + four required "##" sections in this order:
//   definition, context, examples, mistake
// followed by two OPTIONAL sections, recognised by their heading text (so they can be present in any combination):
//   "Don't confuse with" / "لا تخلطه مع"      -> confuse
//   "Say it at work"     / "قلها في العمل"     -> say   (bullet list like examples: English line + nested Arabic translation)
import matter from 'gray-matter'

/**
 * @typedef {{ text: string, translation?: string }} Example
 * @typedef {{
 *   id: string, category: string, subcategory?: string, level: 'beginner' | 'intermediate', related: string[],
 *   tags: string[], aliases: string[],
 *   term: string, translation?: string, pronunciation: string,
 *   definition: string, context: string, examples: Example[], mistake: string,
 *   confuse?: string, say?: Example[], keywords?: string[], featured?: number,
 * }} Term
 */

export const REQUIRED_SECTIONS = 4
export const CONFUSE_HEADINGS = ["Don't confuse with", 'لا تخلطه مع']
export const SAY_HEADINGS = ['Say it at work', 'قلها في العمل']

function parseBullets(raw) {
  const items = []
  for (const line of raw.split('\n')) {
    const top = line.match(/^- (.+)$/)
    const nested = line.match(/^\s+- (.+)$/)
    if (top) items.push({ text: top[1].trim() })
    else if (nested && items.length) items[items.length - 1].translation = nested[1].trim()
  }
  return items
}

/** @param {string} source @returns {{ term: Term, errors: string[] }} */
export function parseTerm(source) {
  const errors = []
  const { data, content } = matter(source)

  // split into [{ heading, body }]
  const parts = content.split(/^## (.*)$/m)
  const sections = []
  for (let i = 1; i < parts.length; i += 2) sections.push({ heading: parts[i].trim(), body: (parts[i + 1] ?? '').trim() })

  if (sections.length < REQUIRED_SECTIONS) errors.push(`expected at least ${REQUIRED_SECTIONS} "##" sections, found ${sections.length}`)
  const [definition = '', context = '', examplesRaw = '', mistake = ''] = sections.slice(0, REQUIRED_SECTIONS).map((s) => s.body)

  let confuse
  let say
  for (const s of sections.slice(REQUIRED_SECTIONS)) {
    if (CONFUSE_HEADINGS.includes(s.heading)) {
      if (confuse !== undefined) errors.push('duplicate "don\'t confuse with" section')
      confuse = s.body
    } else if (SAY_HEADINGS.includes(s.heading)) {
      if (say !== undefined) errors.push('duplicate "say it at work" section')
      say = parseBullets(s.body)
    } else {
      errors.push(`unknown section "${s.heading}"`)
    }
  }

  const examples = parseBullets(examplesRaw)

  if (data.featured !== undefined && !Number.isInteger(Number(data.featured))) errors.push(`invalid featured "${data.featured}" (a whole number 1 to 6)`)
  for (const key of ['id', 'category', 'level', 'term', 'pronunciation']) {
    if (!data[key]) errors.push(`missing frontmatter "${key}"`)
  }
  if (data.level && !['beginner', 'intermediate'].includes(data.level)) errors.push(`invalid level "${data.level}"`)
  if (!definition) errors.push('empty definition')
  if (!context) errors.push('empty context')
  if (examples.length < 2) errors.push('need at least 2 examples')
  if (!mistake) errors.push('empty common-mistake section')
  if (confuse !== undefined && !confuse) errors.push('empty "don\'t confuse with" section')
  if (say !== undefined && say.length === 0) errors.push('empty "say it at work" section')

  return {
    errors,
    term: {
      id: String(data.id ?? ''),
      category: String(data.category ?? ''),
      subcategory: data.subcategory ? String(data.subcategory) : undefined,
      level: data.level ?? 'beginner',
      related: Array.isArray(data.related) ? data.related.map(String) : [],
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      aliases: Array.isArray(data.aliases) ? data.aliases.map(String) : [],
      term: String(data.term ?? ''),
      translation: data.translation ? String(data.translation) : undefined,
      pronunciation: String(data.pronunciation ?? ''),
      definition,
      context,
      examples,
      mistake,
      confuse,
      say,
      keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : undefined,
      // 1 to 6: the hero card this term fills (see app/[lang]/page.tsx)
      featured: data.featured === undefined ? undefined : Number(data.featured),
    },
  }
}
