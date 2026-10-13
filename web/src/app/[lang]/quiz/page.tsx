import type { Metadata } from 'next'
import Link from 'next/link'
import { Quiz } from '@/components/Quiz'
import { pageAlternates, socialFor } from '@/lib/alternates'
import { getCategories } from '@/lib/content'
import { languages, ui, type Lang } from '@/lib/i18n'

type Params = { lang: Lang }

export function generateStaticParams() {
  return languages.map((l) => ({ lang: l.code }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params
  const t = ui[lang].quiz
  return { title: t.title, description: t.intro, alternates: pageAlternates(lang, (l) => `/${l}/quiz/`), ...socialFor(lang, t.title, t.intro) }
}

export default async function QuizPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params
  const t = ui[lang]
  const categories = getCategories().map((c) => ({ id: c.id, name: c.name[lang] }))
  return (
    <div className="container page quiz-page">
      <nav className="crumbs" aria-label={t.a11y.breadcrumb}>
        <Link href={`/${lang}/`}>{t.home}</Link>
        <span aria-hidden="true">/</span>
        <span>{t.quiz.title}</span>
      </nav>
      <Quiz lang={lang} categories={categories} />
    </div>
  )
}
