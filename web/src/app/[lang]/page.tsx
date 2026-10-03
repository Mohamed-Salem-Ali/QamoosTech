import type { Metadata } from 'next'
import Link from 'next/link'
import { CountUp } from '@/components/CountUp'
import { HeroArt, type FloatCard } from '@/components/HeroArt'
import { RandomTerm } from '@/components/RandomTerm'
import { Reveal } from '@/components/Reveal'
import { SearchBox } from '@/components/SearchBox'
import { Splash } from '@/components/Splash'
import { pageAlternates } from '@/lib/alternates'
import { author } from '@/lib/author'
import { getCategories, getTerm, getTerms } from '@/lib/content'
import { languages, ui, type Lang } from '@/lib/i18n'
import type { SearchItem } from '@/lib/search'

export function generateStaticParams() {
  return languages.map((l) => ({ lang: l.code }))
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  return { alternates: pageAlternates(params.lang, (l) => `/${l}/`) }
}

// Terms shown as floating cards in the hero (each needs an Arabic translation in content/ar).
const HERO_CARDS: { id: string; className: string; depth: number }[] = [
  { id: 'idempotency', className: 'hc1', depth: 18 },
  { id: 'pull-request', className: 'hc2', depth: 30 },
  { id: 'scope-creep', className: 'hc3', depth: 22 },
  { id: 'rate-limiting', className: 'hc4', depth: 26 },
  { id: 'deadline', className: 'hc5', depth: 16 },
  { id: 'rollback', className: 'hc6', depth: 34 },
]

export default function Home({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const t = ui[lang]
  const h = t.hero
  const terms = getTerms(lang)
  const categories = getCategories()
  const catName = (id: string) => categories.find((c) => c.id === id)!.name[lang]
  const roundedCount = Math.floor(terms.length / 10) * 10

  const items: SearchItem[] = terms.map((x) => ({
    id: x.id,
    term: x.term,
    translation: x.translation,
    category: x.category,
    categoryName: catName(x.category),
    summary: x.definition,
  }))

  const cards: FloatCard[] = HERO_CARDS.flatMap((c) => {
    const en = getTerm('en', c.id)
    const ar = getTerm('ar', c.id)
    return en && ar?.translation ? [{ id: c.id, term: en.term, translation: ar.translation, depth: c.depth, className: c.className }] : []
  })

  const ticker = terms.filter((_, i) => i % 3 === 0).slice(0, 14)

  return (
    <>
      <Splash lang={lang} />
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <i className="blob blob--cyan" />
          <i className="blob blob--indigo" />
          <i className="blob blob--violet" />
          <div className="hero__dots" />
          <div className="hero__spot" />
        </div>
        <HeroArt cards={cards} lang={lang} />

        <div className="container hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {h.eyebrow(roundedCount)}
          </p>
          <h1 className="hero__title" aria-label={`${h.prefix} ${h.words[0]}`}>
            <span aria-hidden="true">{h.prefix}</span>{' '}
            <span className="rotator" aria-hidden="true">
              {h.words.map((w, i) => (
                <span key={w} className="rotator__word" style={{ ['--i' as string]: i }}>
                  {w}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero__intro">{h.intro(roundedCount)}</p>
          <SearchBox
            lang={lang}
            items={items}
            placeholder={t.searchPlaceholder}
            empty={t.noResults}
            label={t.searchLabel}
            hintPrefix={h.try}
            hintExamples={h.examples}
          />
          <div className="hero__cta">
            <Link href="#categories" className="cta cta--primary">
              {h.browse}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="cta__arrow">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </Link>
            <RandomTerm ids={terms.map((x) => x.id)} lang={lang} label={h.random} />
          </div>
          <ul className="stats" aria-label="Stats">
            <li><CountUp to={terms.length} /><span>{h.stats.terms}</span></li>
            <li><CountUp to={categories.length} /><span>{h.stats.categories}</span></li>
            <li><CountUp to={languages.length} /><span>{h.stats.languages}</span></li>
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

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="about">
              <div>
                <p className="about__kicker">{t.builtBy}</p>
                <h2 className="about__name">{author.name[lang]}</h2>
                <p className="about__role">{author.role[lang]}</p>
                <p className="about__text">{t.aboutText}</p>
              </div>
              <div className="about__links">
                <a className="cta cta--primary" href={author.portfolio} target="_blank" rel="noopener noreferrer">
                  {t.portfolio}
                </a>
                <a className="cta cta--ghost" href={author.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="cta cta--ghost" href={author.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
