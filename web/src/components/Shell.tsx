import { Analytics } from '@vercel/analytics/next'
import { Inter, IBM_Plex_Sans_Arabic, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { dirOf, type Lang } from '@/lib/i18n'
import { writingSystems } from '@/lib/writing-systems.mjs'

// Only the font of the page's own language is preloaded; the others load on demand (display: swap).
// Fewer weights = fewer bytes before first paint: 400 for text, 600 for headings/bold.
const arabicPreload = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '600'], variable: '--font-arabic', display: 'swap', preload: true })
const arabicLazy = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '600'], variable: '--font-arabic', display: 'swap', preload: false })
const latinPreload = Inter({ subsets: ['latin'], variable: '--font-latin', display: 'swap', preload: true })
const latinLazy = Inter({ subsets: ['latin'], variable: '--font-latin', display: 'swap', preload: false })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-mono', display: 'swap', preload: false })

// Applies the saved theme before first paint so there is no flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`

export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  // the font of the page's own writing system is preloaded; the other loads on demand
  const arabicPage = writingSystems[lang] === 'arabic'
  const arabic = arabicPage ? arabicPreload : arabicLazy
  const latin = arabicPage ? latinLazy : latinPreload
  return (
    <html lang={lang} dir={dirOf(lang)} className={`${latin.variable} ${arabic.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        {/* Vercel Web Analytics. Every page renders one Shell, so each view is counted once. */}
        <Analytics />
      </body>
    </html>
  )
}
