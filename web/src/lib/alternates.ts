import { defaultLang, languages, type Lang } from './i18n'

/** canonical + hreflang links for one page, given its path in a language (e.g. (l) => `/${l}/t/rag/`). x-default is the default language. */
export function pageAlternates(lang: string, pathFor: (lang: string) => string) {
  return {
    canonical: pathFor(lang),
    languages: {
      ...Object.fromEntries(languages.map((l) => [l.code, pathFor(l.code)])),
      'x-default': pathFor(defaultLang),
    },
  }
}

// One bilingual share card for every page (public/og.png, rendered from scripts/brand/og.html).
const ogImage = { url: '/og.png', width: 1200, height: 630, alt: 'QamoosTech | قاموس تك' }

/** Open Graph and Twitter card for one page, in its own language. */
export function socialFor(lang: Lang, title: string, description: string) {
  const locale = languages.find((l) => l.code === lang)!.ogLocale
  return {
    openGraph: { title, description, siteName: 'QamoosTech', locale, type: 'website' as const, images: [ogImage] },
    twitter: { card: 'summary_large_image' as const, title, description, images: [ogImage.url] },
  }
}
