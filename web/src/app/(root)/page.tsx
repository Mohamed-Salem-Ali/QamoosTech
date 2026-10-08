import { defaultLang, languages } from '@/lib/i18n'

// Static export has no server redirect, so redirect on the client: the saved language if it is one we have, else the default.
const codes = JSON.stringify(languages.map((l) => l.code))
const script = `try{var c=${codes};var s=localStorage.getItem('lang');location.replace('/'+(c.indexOf(s)>=0?s:'${defaultLang}')+'/')}catch(e){location.replace('/${defaultLang}/')}`

export default function Root() {
  return (
    <main className="redirect">
      <meta httpEquiv="refresh" content={`1;url=/${defaultLang}/`} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p>
        {languages.map((l, i) => (
          <span key={l.code}>
            {i > 0 && ' · '}
            <a href={`/${l.code}/`}>{l.label}</a>
          </span>
        ))}
      </p>
    </main>
  )
}
