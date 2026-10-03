import Link from 'next/link'
import { RandomTerm } from './RandomTerm'
import { Reveal } from './Reveal'
import { ui, type Lang } from '@/lib/i18n'

type Item = { id: string; term: string; translation?: string }
type CategoryLink = { id: string; name: string; description: string }

const Arrow = ({ dir }: { dir: 'prev' | 'next' }) => (
  <svg className={`explore__arrow explore__arrow--${dir}`} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

/** "Keep exploring" block shown at the bottom of term pages: previous/next, a random pick, and more from the same category. */
export function ExploreTerm({ lang, current, categoryId, categoryName, prev, next, more }: {
  lang: Lang
  current: string
  categoryId: string
  categoryName: string
  prev?: Item
  next?: Item
  more: Item[]
}) {
  const t = ui[lang]
  return (
    <Reveal>
      <section className="explore" aria-labelledby="explore-title">
        <div className="explore__head">
          <h2 id="explore-title">{t.keepExploring}</h2>
          <div className="explore__actions">
            <RandomTerm lang={lang} label={t.hero.random} exclude={current} />
          </div>
        </div>

        {(prev || next) && (
          <div className="explore__pair">
            {prev && (
              <Link href={`/${lang}/t/${prev.id}/`} className="explore__card explore__card--prev" rel="prev">
                <Arrow dir="prev" />
                <span>
                  <small>{t.previous}</small>
                  <strong dir="ltr">{prev.term}</strong>
                  {prev.translation && <em>{prev.translation}</em>}
                </span>
              </Link>
            )}
            {next && (
              <Link href={`/${lang}/t/${next.id}/`} className="explore__card explore__card--next" rel="next">
                <span>
                  <small>{t.next}</small>
                  <strong dir="ltr">{next.term}</strong>
                  {next.translation && <em>{next.translation}</em>}
                </span>
                <Arrow dir="next" />
              </Link>
            )}
          </div>
        )}

        {more.length > 0 && (
          <div className="explore__more">
            <p className="explore__label">{t.moreIn(categoryName)}</p>
            <div className="chips">
              {more.map((m) => (
                <Link key={m.id} href={`/${lang}/t/${m.id}/`} className="chip" dir="ltr">{m.term}</Link>
              ))}
              <Link href={`/${lang}/c/${categoryId}/`} className="chip chip--all">{t.seeAll} →</Link>
            </div>
          </div>
        )}
      </section>
    </Reveal>
  )
}

/** Shown at the bottom of category pages: random term from this category, plus the next categories. */
export function ExploreCategory({ lang, categoryId, others }: { lang: Lang; categoryId: string; others: CategoryLink[] }) {
  const t = ui[lang]
  return (
    <Reveal>
      <section className="explore" aria-labelledby="explore-title">
        <div className="explore__head">
          <h2 id="explore-title">{t.keepExploring}</h2>
          <div className="explore__actions">
            <RandomTerm lang={lang} label={t.surpriseInCategory} category={categoryId} />
            <RandomTerm lang={lang} label={t.hero.random} />
          </div>
        </div>
        <div className="explore__pair">
          {others.map((c) => (
            <Link key={c.id} href={`/${lang}/c/${c.id}/`} className="explore__card">
              <span>
                <small>{t.nextCategory}</small>
                <strong>{c.name}</strong>
                <em>{c.description}</em>
              </span>
              <Arrow dir="next" />
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
