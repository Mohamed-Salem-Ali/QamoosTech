import type { Metadata, Viewport } from 'next'
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
  // the English site name is "QamoosTech" itself, so it gets the tagline instead of a doubled name
  const second = t.siteName === 'QamoosTech' ? t.tagline : t.siteName
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `QamoosTech | ${second}`, template: `%s | QamoosTech` },
    description: t.intro,
    icons: { apple: '/apple-touch-icon.png' },
  }
}

// Tints the mobile browser bar to the page background of each theme (globals.css --bg).
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#13110f' },
  ],
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  if (!isLang(raw)) notFound()
  const lang = raw
  const t = ui[lang]
  return (
    <Shell lang={lang}>
      <a className="skip" href="#main">{t.a11y.skip}</a>
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
