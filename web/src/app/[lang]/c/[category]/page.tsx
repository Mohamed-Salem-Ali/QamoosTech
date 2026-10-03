import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/Reveal'
import { getCategories, getTermsByCategory } from '@/lib/content'
import { languages, ui, type Lang } from '@/lib/i18n'

type Params = { lang: Lang; category: string }

export function generateStaticParams() {
  return languages.flatMap((l) => getCategories().map((c) => ({ lang: l.code, category: c.id })))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const c = getCategories().find((x) => x.id === params.category)
  return { title: c?.name[params.lang], description: c?.description[params.lang] }
}

export default function CategoryPage({ params }: { params: Params }) {
  const { lang } = params
  const t = ui[lang]
  const category = getCategories().find((c) => c.id === params.category)
  if (!category) notFound()
  const terms = getTermsByCategory(lang, category.id)

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
      <div className="grid grid--terms">
        {terms.map((term, i) => (
          <Reveal key={term.id} delay={(i % 3) * 60}>
            <Link href={`/${lang}/t/${term.id}/`} className="card term-card">
              <span className="term-card__term" dir="ltr">{term.term}</span>
              {term.translation && <span className="term-card__tr">{term.translation}</span>}
              <span className={`level level--${term.level}`}>{t.level[term.level]}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
