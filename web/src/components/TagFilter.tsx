'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Reveal } from './Reveal'
import { ui, type Lang } from '@/lib/i18n'

// Plain copies of the terms, so the server page can pass them to this client component.
export type FilterTerm = { id: string; term: string; translation?: string; level: 'beginner' | 'intermediate'; tags: string[] }
export type FilterGroup = { sub?: { id: string; name: string }; terms: FilterTerm[] }
export type FilterTag = { id: string; name: string }

// The category page body: tag chips that narrow the term cards, plus the subcategory links and headings.
// The whole list is still in the server HTML; choosing a tag only hides the cards that do not match.
export function TagFilter({ lang, categoryName, groups, tags }: { lang: Lang; categoryName: string; groups: FilterGroup[]; tags: FilterTag[] }) {
  const t = ui[lang]
  const [active, setActive] = useState<string | null>(null)
  const total = groups.reduce((n, g) => n + g.terms.length, 0)
  const shown = groups
    .map((g) => ({ ...g, terms: active ? g.terms.filter((x) => x.tags.includes(active)) : g.terms }))
    .filter((g) => g.terms.length > 0)
  const count = shown.reduce((n, g) => n + g.terms.length, 0)

  return (
    <>
      {tags.length > 0 && (
        <div className="tag-filter" role="group" aria-label={t.tagFilter.label}>
          <button type="button" className="chip tag-filter__chip" aria-pressed={active === null} onClick={() => setActive(null)}>
            {t.tagFilter.all}
          </button>
          {tags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              className="chip tag-filter__chip"
              dir="ltr"
              aria-pressed={active === tag.id}
              onClick={() => setActive(active === tag.id ? null : tag.id)}
            >
              {tag.name}
            </button>
          ))}
        </div>
      )}
      <p className="tag-filter__status" aria-live="polite">{active ? t.tagFilter.showing(count, total) : ''}</p>
      {groups.length > 1 && (
        <nav className="subnav" aria-label={categoryName}>
          {shown.map(({ sub, terms }) =>
            sub ? (
              <a key={sub.id} href={`#${sub.id}`} className="subnav__link">
                {sub.name} <span className="subnav__count">{terms.length}</span>
              </a>
            ) : null,
          )}
        </nav>
      )}
      {shown.map(({ sub, terms }) => (
        <section key={sub?.id ?? 'all'} id={sub?.id} className="subgroup" aria-labelledby={sub ? `${sub.id}-title` : undefined}>
          {sub && (
            <h2 id={`${sub.id}-title`} className="subgroup__title">
              {sub.name} <span className="subgroup__count">{terms.length}</span>
            </h2>
          )}
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
        </section>
      ))}
    </>
  )
}
