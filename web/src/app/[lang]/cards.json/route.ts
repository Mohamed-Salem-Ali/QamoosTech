import { getTerms } from '@/lib/content'
import { isLang, languages } from '@/lib/i18n'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return languages.map((l) => ({ lang: l.code }))
}

/** One line of plain text from markdown-ish content: no backticks or stars, cut at the first sentence. */
function short(text: string, max = 120) {
  const plain = text.replace(/[`*]/g, '').replace(/\s+/g, ' ').trim()
  const sentence = plain.match(/^(.+?[.!?؟])(\s|$)/)?.[1] ?? plain
  return sentence.length <= max ? sentence : `${sentence.slice(0, max - 1).trimEnd()}…`
}

// A light per-language list for the quiz and the term of the day (much smaller than the search index):
// i = id, t = term, m = meaning (the Arabic translation, or for English a one-sentence definition),
// c = category, l = level (b / i).
export async function GET(_: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) return new Response('Not found', { status: 404 })
  const cards = getTerms(lang).map((x) => ({
    i: x.id,
    t: x.term,
    m: x.translation || short(x.definition),
    c: x.category,
    l: x.level === 'beginner' ? 'b' : 'i',
  }))
  return Response.json(cards)
}
