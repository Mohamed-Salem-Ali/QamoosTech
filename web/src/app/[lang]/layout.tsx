import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Shell } from '@/components/Shell'
import { isLang, languages, ui } from '@/lib/i18n'

export function generateStaticParams() {
  return languages.map((l) => ({ lang: l.code }))
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  if (!isLang(params.lang)) return {}
  const t = ui[params.lang]
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://qamoostech.vercel.app'),
    title: { default: `QamoosTech | ${t.siteName}`, template: `%s | QamoosTech` },
    description: t.intro,
    alternates: { languages: Object.fromEntries(languages.map((l) => [l.code, `/${l.code}/`])) },
  }
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isLang(params.lang)) notFound()
  const lang = params.lang
  const t = ui[lang]
  return (
    <Shell lang={lang}>
      <a className="skip" href="#main">Skip to content</a>
      <Header lang={lang} />
      <main id="main">{children}</main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>{t.footer}</span>
          <Link href="https://github.com/Mohamed-Salem-Ali/QamoosTech" target="_blank" rel="noopener noreferrer">
            GitHub · {t.contribute}
          </Link>
        </div>
      </footer>
    </Shell>
  )
}
