import type { Metadata } from 'next'
import Link from 'next/link'
import '@/styles/globals.css'
import '@/styles/polish.css'
import '@/styles/features.css'
import { LogoMark } from '@/components/Logo'
import { NotFoundHelp } from '@/components/NotFoundHelp'
import { fontClasses, themeScript } from '@/components/Shell'

export const metadata: Metadata = { title: '404 | QamoosTech', icons: { apple: '/apple-touch-icon.png' } }

// Shown for any URL that matches no page (served as 404.html). It renders the whole document
// because no other layout wraps it. It is bilingual, because the request does not say which
// language the visitor wants, and the two links take them to either glossary. When the address
// looks like a mistyped term, NotFoundHelp offers the closest terms.
export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr" className={fontClasses('en')} suppressHydrationWarning>
      <head>
        {/* the visitor's own theme and text size, as on every other page */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <main id="main" className="container page notfound">
          <Link href="/" className="notfound__logo" aria-label="QamoosTech">
            <LogoMark size={56} />
          </Link>
          <p className="eyebrow notfound__code">404</p>
          <h1>Page not found</h1>
          <p>This page does not exist, or it moved.</p>
          <p dir="rtl" lang="ar" className="notfound__ar">هذه الصفحة غير موجودة، أو ربما انتقلت.</p>
          <NotFoundHelp />
          <nav className="hero__cta" aria-label="Choose a language">
            <Link className="cta cta--primary" href="/en/">Open the English glossary</Link>
            <Link className="cta cta--ghost" href="/ar/" lang="ar">افتح القاموس العربي</Link>
          </nav>
        </main>
      </body>
    </html>
  )
}
