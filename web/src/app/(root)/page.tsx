// Static export has no server redirect, so redirect on the client (saved language, else Arabic).
const script = `try{var l=localStorage.getItem('lang');location.replace('/'+(l==='en'?'en':'ar')+'/')}catch(e){location.replace('/ar/')}`

export default function Root() {
  return (
    <main className="redirect">
      <meta httpEquiv="refresh" content="1;url=/ar/" />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p>
        <a href="/ar/">العربية</a> · <a href="/en/">English</a>
      </p>
    </main>
  )
}
