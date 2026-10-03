// Static export has no server redirect, so redirect on the client (saved language, else the default language: English).
const script = `try{var l=localStorage.getItem('lang');location.replace('/'+(l==='ar'?'ar':'en')+'/')}catch(e){location.replace('/en/')}`

export default function Root() {
  return (
    <main className="redirect">
      <meta httpEquiv="refresh" content="1;url=/en/" />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p>
        <a href="/en/">English</a> · <a href="/ar/">العربية</a>
      </p>
    </main>
  )
}
