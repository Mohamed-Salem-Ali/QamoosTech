import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Shell } from '@/components/Shell'
import { author } from '@/lib/author'
import { isLang, languages, ui } from '@/lib/i18n'
import { SITE_URL } from '@/lib/site'

export function generateStaticParams() {
  return languages.map((l) => ({ lang: l.code }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: raw } = await params
  if (!isLang(raw)) return {}
  const t = ui[raw]
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `QamoosTech | ${t.siteName}`, template: `%s | QamoosTech` },
    description: t.intro,
  }
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  if (!isLang(raw)) notFound()
  const lang = raw
  const t = ui[lang]
  return (
    <Shell lang={lang}>
      <a className="skip" href="#main">Skip to content</a>
      <Header lang={lang} />
      <main id="main">{children}</main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>{t.footer}</span>
          <span className="footer__links">
            <span>{t.madeBy}{' '}<a href={author.portfolio} target="_blank" rel="noopener noreferrer">{author.name[lang]}</a></span>
            <a href={author.portfolio} target="_blank" rel="noopener noreferrer">{t.portfolio}</a>
            <a href={author.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={author.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={author.repo} target="_blank" rel="noopener noreferrer">{t.contribute}</a>
          </span>
        </div>
      </footer>
    </Shell>
  )
}
