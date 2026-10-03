import { languages } from './i18n'

/** canonical + hreflang links for one page, given its path in a language (e.g. (l) => `/${l}/t/rag/`). */
export function pageAlternates(lang: string, pathFor: (lang: string) => string) {
  return {
    canonical: pathFor(lang),
    languages: Object.fromEntries(languages.map((l) => [l.code, pathFor(l.code)])),
  }
}
