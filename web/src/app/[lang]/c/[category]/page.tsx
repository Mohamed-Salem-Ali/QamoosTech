import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExploreCategory } from '@/components/Explore'
import { TagFilter, type FilterGroup, type FilterTag } from '@/components/TagFilter'
import { pageAlternates, socialFor } from '@/lib/alternates'
import { getCategories, getTags, getTermsByCategory, getTermsBySubcategory } from '@/lib/content'
import { languages, ui, type Lang } from '@/lib/i18n'

type Params = { lang: Lang; category: string }

export function generateStaticParams() {
  return languages.flatMap((l) => getCategories().map((c) => ({ lang: l.code, category: c.id })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang, category: categoryId } = await params
  const c = getCategories().find((x) => x.id === categoryId)
  const title = c?.name[lang]
  const description = c?.description[lang]
  return {
    title,
    description,
    alternates: pageAlternates(lang, (l) => `/${l}/c/${categoryId}/`),
    ...socialFor(lang, title ?? 'QamoosTech', description ?? ''),
  }
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { lang, category: categoryId } = await params
  const t = ui[lang]
  const category = getCategories().find((c) => c.id === categoryId)
  if (!category) notFound()
  const terms = getTermsByCategory(lang, category.id)
  // plain copies for the client-side tag filter (see components/TagFilter.tsx)
  const groups: FilterGroup[] = getTermsBySubcategory(lang, category).map(({ sub, terms: list }) => ({
    sub: sub ? { id: sub.id, name: sub.name[lang] } : undefined,
    terms: list.map((x) => ({ id: x.id, term: x.term, translation: x.translation, level: x.level, tags: x.tags })),
  }))
  // the tags this category uses, most used first
  const counts = new Map<string, number>()
  for (const x of terms) for (const tag of x.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  const tags: FilterTag[] = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => ({ id, name: getTags().find((x) => x.id === id)?.name[lang] ?? id }))
  const all = getCategories()
  const idx = all.findIndex((c) => c.id === category.id)
  const others = [1, 2].map((n) => all[(idx + n) % all.length]).map((c) => ({ id: c.id, name: c.name[lang], description: c.description[lang] }))

  return (
    <div className="container page">
      <nav className="crumbs" aria-label={ui[lang].a11y.breadcrumb}>
        <Link href={`/${lang}/`}>{t.home}</Link>
        <span aria-hidden="true">/</span>
        <span>{category.name[lang]}</span>
      </nav>
      <header className="page__head">
        <h1>{category.name[lang]}</h1>
        <p>{category.description[lang]}</p>
        <div className="page__head-actions">
          <span className="pill">{t.termsCount(terms.length)}</span>
          {terms.length >= 4 && (
            <Link href={`/${lang}/quiz/?c=${category.id}`} className="quiz-link">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3.5 14.4 8.6l5.6.7-4.1 3.9 1 5.5L12 16.1l-4.9 2.6 1-5.5L4 9.3l5.6-.7L12 3.5Z" />
              </svg>
              {t.quiz.inCategory}
            </Link>
          )}
        </div>
      </header>
      <TagFilter lang={lang} categoryName={category.name[lang]} groups={groups} tags={tags} />
      <ExploreCategory lang={lang} categoryId={category.id} others={others} />
    </div>
  )
}
