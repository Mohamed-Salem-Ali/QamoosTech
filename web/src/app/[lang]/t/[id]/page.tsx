import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/Reveal'
import { RichText } from '@/components/RichText'
import { Speak } from '@/components/Speak'
import { getAudioSources, voiceHints } from '@/lib/audio'
import { getCategories, getTerm, getTerms } from '@/lib/content'
import { languages, ui, type Lang } from '@/lib/i18n'

type Params = { lang: Lang; id: string }

export function generateStaticParams() {
  return languages.flatMap((l) => getTerms(l.code).map((t) => ({ lang: l.code, id: t.id })))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const term = getTerm(params.lang, params.id)
  if (!term) return {}
  return {
    title: term.translation ? `${term.term} — ${term.translation}` : term.term,
    description: term.definition.replace(/[`*]/g, '').slice(0, 160),
  }
}

export default function TermPage({ params }: { params: Params }) {
  const { lang } = params
  const t = ui[lang]
  const term = getTerm(lang, params.id)
  if (!term) notFound()
  const category = getCategories().find((c) => c.id === term.category)!
  const related = term.related.map((id) => getTerm(lang, id)).filter((x) => x !== undefined)

  return (
    <article className="container page term">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}/`}>{t.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${lang}/c/${category.id}/`}>{category.name[lang]}</Link>
      </nav>

      <header className="term__head">
        <div className="term__badges">
          <span className="pill">{category.name[lang]}</span>
          <span className={`level level--${term.level}`}>{t.level[term.level]}</span>
        </div>
        <h1 className="term__title" dir="ltr">{term.term}</h1>
        {term.translation && <p className="term__translation">{term.translation}</p>}
        <div className="term__pron">
          <span className="term__pron-label">{t.pronunciation}</span>
          <span className="term__pron-text" dir={lang === 'ar' ? 'rtl' : 'ltr'}>{term.pronunciation}</span>
          <Speak text={term.term} label={t.listen} browserLabel={t.browserVoice} sources={getAudioSources(term.id).map((a) => ({ ...a, label: voiceHints[a.voice] ? `${a.voice} · ${voiceHints[a.voice]}` : a.voice }))} />
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
    </article>
  )
}
