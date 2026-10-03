import type { MetadataRoute } from 'next'
import { getCategories, getTerms } from '@/lib/content'
import { languages } from '@/lib/i18n'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

// Every page in every language, each with links to its translations (hreflang) so search engines connect them.
export default function sitemap(): MetadataRoute.Sitemap {
  const alt = (pathFor: (lang: string) => string) => ({
    languages: Object.fromEntries(languages.map((l) => [l.code, `${SITE_URL}${pathFor(l.code)}`])),
  })
  const entries: MetadataRoute.Sitemap = []
  const home = (l: string) => `/${l}/`
  for (const l of languages) entries.push({ url: `${SITE_URL}${home(l.code)}`, priority: 1, alternates: alt(home) })
  for (const c of getCategories()) {
    const p = (l: string) => `/${l}/c/${c.id}/`
    for (const l of languages) entries.push({ url: `${SITE_URL}${p(l.code)}`, priority: 0.7, alternates: alt(p) })
  }
  for (const t of getTerms('en')) {
    const p = (l: string) => `/${l}/t/${t.id}/`
    for (const l of languages) entries.push({ url: `${SITE_URL}${p(l.code)}`, priority: 0.8, alternates: alt(p) })
  }
  return entries
}
