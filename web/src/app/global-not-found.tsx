import type { Metadata } from 'next'
import Link from 'next/link'
import '@/styles/globals.css'
import '@/styles/polish.css'

export const metadata: Metadata = { title: '404 | QamoosTech' }

// Shown for any URL that matches no page (served as 404.html). It renders the whole document
// because no other layout wraps it. It is bilingual, because the request does not say which
// language the visitor wants, and the two links take them to either glossary.
export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr">
      <body>
        <main id="main" className="container page notfound">
          <p className="eyebrow notfound__code">404</p>
          <h1>Page not found</h1>
          <p>This page does not exist, or it moved.</p>
          <p dir="rtl" className="notfound__ar">هذه الصفحة غير موجودة، أو ربما انتقلت.</p>
          <nav className="hero__cta" aria-label="Choose a language">
            <Link className="cta cta--primary" href="/en/">Open the English glossary</Link>
            <Link className="cta cta--ghost" href="/ar/">افتح القاموس العربي</Link>
          </nav>
        </main>
      </body>
    </html>
  )
}
