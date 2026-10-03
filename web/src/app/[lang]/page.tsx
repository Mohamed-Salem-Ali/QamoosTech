import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { SearchBox } from '@/components/SearchBox'
import { Splash } from '@/components/Splash'
import { getCategories, getTerms } from '@/lib/content'
import { languages, ui, type Lang } from '@/lib/i18n'
import type { SearchItem } from '@/lib/search'

export function generateStaticParams() {
  return languages.map((l) => ({ lang: l.code }))
}

export default function Home({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const t = ui[lang]
  const terms = getTerms(lang)
  const categories = getCategories()
  const catName = (id: string) => categories.find((c) => c.id === id)!.name[lang]

  const items: SearchItem[] = terms.map((x) => ({
    id: x.id,
    term: x.term,
    translation: x.translation,
    category: x.category,
    categoryName: catName(x.category),
    summary: x.definition,
  }))

  // Marquee of real terms; doubled so the loop is seamless.
  const ticker = terms.filter((_, i) => i % 3 === 0).slice(0, 14)

  return (
    <>
      <Splash lang={lang} />
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <p className="eyebrow">{t.siteName} · QamoosTech</p>
          <h1 className="hero__title">{t.tagline}</h1>
          <p className="hero__intro">{t.intro}</p>
          <SearchBox lang={lang} items={items} placeholder={t.searchPlaceholder} empty={t.noResults} label={t.searchLabel} />
          <ul className="stats" aria-label="Stats">
            <li><strong>{terms.length}</strong><span>{lang === 'ar' ? 'مصطلح' : 'terms'}</span></li>
            <li><strong>{categories.length}</strong><span>{lang === 'ar' ? 'تصنيف' : 'categories'}</span></li>
            <li><strong>{languages.length}</strong><span>{lang === 'ar' ? 'لغات' : 'languages'}</span></li>
          </ul>
        </div>
        <div className="ticker" aria-hidden="true" dir="ltr">
          <div className="ticker__track">
            {[...ticker, ...ticker].map((x, i) => (
              <span key={i} className="ticker__chip">{x.term}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="container">
          <Reveal>
            <h2 className="section__title">{t.categories}</h2>
          </Reveal>
          <div className="grid">
            {categories.map((c, i) => {
              const count = terms.filter((x) => x.category === c.id).length
              return (
                <Reveal key={c.id} delay={(i % 3) * 70}>
                  <Link href={`/${lang}/c/${c.id}/`} className="card category">
                    <span className="category__num" dir="ltr">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{c.name[lang]}</h3>
                    <p>{c.description[lang]}</p>
                    <span className="category__count">{t.termsCount(count)}</span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
