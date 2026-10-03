import { Inter, IBM_Plex_Sans_Arabic, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { dirOf, type Lang } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'], variable: '--font-latin', display: 'swap' })
const arabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

// Applies the saved theme before first paint so there is no flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`

export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={dirOf(lang)} className={`${inter.variable} ${arabic.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
