import type { Metadata } from 'next'
import Link from 'next/link'
import { SavedList } from '@/components/SavedList'
import { languages, ui, type Lang } from '@/lib/i18n'

type Params = { lang: Lang }

export function generateStaticParams() {
  return languages.map((l) => ({ lang: l.code }))
}

// The list lives in each visitor's own browser, so there is nothing for search engines to index here.
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params
  return { title: ui[lang].saved.title, robots: { index: false, follow: true } }
}

export default async function SavedPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params
  const t = ui[lang]
  return (
    <div className="container page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}/`}>{t.home}</Link>
        <span aria-hidden="true">/</span>
        <span>{t.saved.title}</span>
      </nav>
      <header className="page__head">
        <h1>{t.saved.title}</h1>
        <p>{t.saved.intro}</p>
      </header>
      <SavedList lang={lang} labels={{ empty: t.saved.empty, remove: t.saved.remove }} />
    </div>
  )
}
