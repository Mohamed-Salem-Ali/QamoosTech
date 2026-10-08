import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CopyButton } from '@/components/CopyButton'
import { ExploreTerm } from '@/components/Explore'
import { Reveal } from '@/components/Reveal'
import { RichText } from '@/components/RichText'
import { SaveTerm } from '@/components/SaveTerm'
import { Speak } from '@/components/Speak'
import { pageAlternates, socialFor } from '@/lib/alternates'
import type { Term } from '@/lib/content'
import { SITE_URL } from '@/lib/site'
import { getAudioSources, voiceHints } from '@/lib/audio'
import { getCategories, getTags, getTerm, getTerms, getTermsByCategory } from '@/lib/content'
import { dirOf, languages, ui, type Lang } from '@/lib/i18n'

type Params = { lang: Lang; id: string }

export function generateStaticParams() {
  return languages.flatMap((l) => getTerms(l.code).map((t) => ({ lang: l.code, id: t.id })))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const term = getTerm(params.lang, params.id)
  if (!term) return {}
  const title = term.translation ? `${term.term} — ${term.translation}` : term.term
  const description = term.definition.replace(/[`*]/g, '').slice(0, 160)
  return {
    title,
    description,
    alternates: pageAlternates(params.lang, (l) => `/${l}/t/${params.id}/`),
    ...socialFor(params.lang, title, description),
  }
}

// schema.org DefinedTerm: lets search engines show the term as a definition, in the page's own language
function definedTermJson(lang: Lang, term: Term) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    alternateName: [term.translation, ...term.aliases].filter((x): x is string => Boolean(x)),
    description: term.definition.replace(/[`*]/g, ''),
    inLanguage: lang,
    url: `${SITE_URL}/${lang}/t/${term.id}/`,
    inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'QamoosTech', url: SITE_URL },
  }
}

export default function TermPage({ params }: { params: Params }) {
  const { lang } = params
  const t = ui[lang]
  const term = getTerm(lang, params.id)
  if (!term) notFound()
  const category = getCategories().find((c) => c.id === term.category)!
  const subcategory = category.subcategories?.find((s) => s.id === term.subcategory)
  const tagNames = term.tags.map((id) => getTags().find((x) => x.id === id)?.name[lang] ?? id)
  // previous / next in the same category (alphabetical, wrapping around) and a few more from it
  const siblings = getTermsByCategory(lang, term.category)
  const at = siblings.findIndex((x) => x.id === term.id)
  const prev = siblings.length > 1 ? siblings[(at - 1 + siblings.length) % siblings.length] : undefined
  const next = siblings.length > 1 ? siblings[(at + 1) % siblings.length] : undefined
  const more = siblings.filter((x) => x.id !== term.id && x.id !== prev?.id && x.id !== next?.id).slice(0, 6)
  const toItem = (x: { id: string; term: string; translation?: string }) => ({ id: x.id, term: x.term, translation: x.translation })
  const related = term.related.map((id) => getTerm(lang, id)).filter((x) => x !== undefined)

  return (
    <article className="container page term">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJson(lang, term)).replace(/</g, '\\u003c') }} />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}/`}>{t.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${lang}/c/${category.id}/`}>{category.name[lang]}</Link>
      </nav>

      <header className="term__head">
        <div className="term__badges">
          <span className="pill">{category.name[lang]}</span>
          {subcategory && (
            <Link href={`/${lang}/c/${category.id}/#${subcategory.id}`} className="pill pill--sub">{subcategory.name[lang]}</Link>
          )}
          <span className={`level level--${term.level}`}>{t.level[term.level]}</span>
          {tagNames.map((name) => (
            <span key={name} className="pill pill--tag" dir="ltr">{name}</span>
          ))}
        </div>
        <h1 className="term__title" dir="ltr">{term.term}</h1>
        {term.translation && <p className="term__translation">{term.translation}</p>}
        <div className="term__pron">
          <span className="term__pron-label">{t.pronunciation}</span>
          <span className="term__pron-text" dir={dirOf(lang)}>{term.pronunciation}</span>
          <Speak text={term.term} label={t.listen} browserLabel={t.browserVoice} sources={getAudioSources(term.id).map((a) => ({ ...a, label: voiceHints[a.voice] ? `${a.voice} · ${voiceHints[a.voice]}` : a.voice }))} />
          <SaveTerm lang={lang} term={{ id: term.id, term: term.term, translation: term.translation }} labels={{ save: t.saved.save, saved: t.saved.saved }} />
        </div>
      </header>

      <Reveal>
        <section className="panel">
          <h2>{t.definition}</h2>
          <p><RichText text={term.definition} /></p>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className="panel">
          <h2>{t.context}</h2>
          <p><RichText text={term.context} /></p>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="panel">
          <h2>{t.examples}</h2>
          <ul className="examples">
            {term.examples.map((ex, i) => (
              <li key={i}>
                <q className="examples__en"><RichText text={ex.text} /></q>
                {ex.translation && <span className="examples__tr"><RichText text={ex.translation} /></span>}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal delay={100}>
        <section className="panel panel--warn">
          <h2>{t.mistake}</h2>
          <p><RichText text={term.mistake} /></p>
        </section>
      </Reveal>

      {term.confuse && (
        <Reveal delay={110}>
          <section className="panel panel--confuse">
            <h2>{t.confuse}</h2>
            <p><RichText text={term.confuse} /></p>
          </section>
        </Reveal>
      )}

      {term.say && term.say.length > 0 && (
        <Reveal delay={120}>
          <section className="panel panel--say">
            <h2>{t.sayIt}</h2>
            <ul className="say">
              {term.say.map((s, i) => (
                <li key={i}>
                  <span className="say__hint">{i === 0 ? t.sayHintMeeting : t.sayHintWritten}</span>
                  <q dir="ltr" className="say__en"><RichText text={s.text} /></q>
                  {s.translation && <span className="say__tr"><RichText text={s.translation} /></span>}
                  <CopyButton text={s.text} label={t.copy} doneLabel={t.copied} />
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}

      {related.length > 0 && (
        <Reveal delay={120}>
          <section className="related">
            <h2>{t.related}</h2>
            <div className="chips">
              {related.map((r) => (
                <Link key={r.id} href={`/${lang}/t/${r.id}/`} className="chip" dir="ltr">{r.term}</Link>
              ))}
            </div>
          </section>
        </Reveal>
      )}
      <ExploreTerm
        lang={lang}
        current={term.id}
        categoryId={category.id}
        categoryName={category.name[lang]}
        prev={prev && toItem(prev)}
        next={next && toItem(next)}
        more={more.map(toItem)}
      />
    </article>
  )
}
