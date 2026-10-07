import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExploreCategory } from '@/components/Explore'
import { Reveal } from '@/components/Reveal'
import { pageAlternates } from '@/lib/alternates'
import { getCategories, getTermsByCategory, getTermsBySubcategory } from '@/lib/content'
import { languages, ui, type Lang } from '@/lib/i18n'

type Params = { lang: Lang; category: string }

export function generateStaticParams() {
  return languages.flatMap((l) => getCategories().map((c) => ({ lang: l.code, category: c.id })))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const c = getCategories().find((x) => x.id === params.category)
  return { title: c?.name[params.lang], description: c?.description[params.lang], alternates: pageAlternates(params.lang, (l) => `/${l}/c/${params.category}/`) }
}

export default function CategoryPage({ params }: { params: Params }) {
  const { lang } = params
  const t = ui[lang]
  const category = getCategories().find((c) => c.id === params.category)
  if (!category) notFound()
  const terms = getTermsByCategory(lang, category.id)
  const groups = getTermsBySubcategory(lang, category)
  const all = getCategories()
  const idx = all.findIndex((c) => c.id === category.id)
  const others = [1, 2].map((n) => all[(idx + n) % all.length]).map((c) => ({ id: c.id, name: c.name[lang], description: c.description[lang] }))

  return (
    <div className="container page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}/`}>{t.home}</Link>
        <span aria-hidden="true">/</span>
        <span>{category.name[lang]}</span>
      </nav>
      <header className="page__head">
        <h1>{category.name[lang]}</h1>
        <p>{category.description[lang]}</p>
        <span className="pill">{t.termsCount(terms.length)}</span>
      </header>
      {groups.length > 1 && (
        <nav className="subnav" aria-label={category.name[lang]}>
          {groups.map(({ sub, terms: list }) =>
            sub ? (
              <a key={sub.id} href={`#${sub.id}`} className="subnav__link">
                {sub.name[lang]} <span className="subnav__count">{list.length}</span>
              </a>
            ) : null,
          )}
        </nav>
      )}
      {groups.map(({ sub, terms: list }) => (
        <section key={sub?.id ?? 'all'} id={sub?.id} className="subgroup" aria-labelledby={sub ? `${sub.id}-title` : undefined}>
          {sub && (
            <h2 id={`${sub.id}-title`} className="subgroup__title">
              {sub.name[lang]} <span className="subgroup__count">{list.length}</span>
            </h2>
          )}
          <div className="grid grid--terms">
            {list.map((term, i) => (
              <Reveal key={term.id} delay={(i % 3) * 60}>
                <Link href={`/${lang}/t/${term.id}/`} className="card term-card">
                  <span className="term-card__term" dir="ltr">{term.term}</span>
                  {term.translation && <span className="term-card__tr">{term.translation}</span>}
                  <span className={`level level--${term.level}`}>{t.level[term.level]}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
      <ExploreCategory lang={lang} categoryId={category.id} others={others} />
    </div>
  )
}
