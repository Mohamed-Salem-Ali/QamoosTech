'use client'

import { useEffect, useState } from 'react'
import { PROGRESS_EVENT, readSeen } from '@/lib/progress'
import { ui, type Lang } from '@/lib/i18n'

// The "app" layer: registers the service worker (public/sw.js) in production builds, offers to
// install the site once a visitor has actually used it (3+ terms opened, never in the first
// minute), and says when the connection drops or returns.

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> }

const DISMISSED = 'install-dismissed-at'
const ENGAGED = 3
const SNOOZE_DAYS = 14

function snoozed() {
  try {
    const at = Number(localStorage.getItem(DISMISSED) || 0)
    return Date.now() - at < SNOOZE_DAYS * 86_400_000
  } catch {
    return true
  }
}

const isStandalone = () => matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true
const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent) && !/crios|fxios/i.test(navigator.userAgent)

export function PwaBits({ lang }: { lang: Lang }) {
  const t = ui[lang].pwa
  const [installEvent, setInstallEvent] = useState<InstallEvent | null>(null)
  const [offer, setOffer] = useState<'install' | 'ios' | null>(null)
  const [net, setNet] = useState<'offline' | 'online' | null>(null)

  // service worker: production only, so `next dev` never serves stale pages
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return
    const register = () => navigator.serviceWorker.register('/sw.js').catch(() => {})
    if (document.readyState === 'complete') register()
    else window.addEventListener('load', register, { once: true })
  }, [])

  // install offer
  useEffect(() => {
    if (isStandalone()) return
    const onPrompt = (e: Event) => {
      e.preventDefault()
      setInstallEvent(e as InstallEvent)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    const onInstalled = () => setOffer(null)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  useEffect(() => {
    if (isStandalone() || snoozed()) return
    const check = () => {
      if (readSeen(lang).length < ENGAGED) return
      if (installEvent) setOffer('install')
      else if (isIos()) setOffer('ios')
    }
    const timer = setTimeout(check, 2500)
    window.addEventListener(PROGRESS_EVENT, check)
    return () => {
      clearTimeout(timer)
      window.removeEventListener(PROGRESS_EVENT, check)
    }
  }, [lang, installEvent])

  // connection notice
  useEffect(() => {
    let hide: ReturnType<typeof setTimeout> | undefined
    const goOffline = () => setNet('offline')
    const goOnline = () => {
      setNet('online')
      clearTimeout(hide)
      hide = setTimeout(() => setNet(null), 2500)
    }
    if (!navigator.onLine) goOffline()
    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      clearTimeout(hide)
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [])

  function dismiss() {
    setOffer(null)
    try {
      localStorage.setItem(DISMISSED, String(Date.now()))
    } catch {}
  }

  async function install() {
    if (!installEvent) return
    await installEvent.prompt()
    const { outcome } = await installEvent.userChoice
    setInstallEvent(null)
    if (outcome === 'accepted') setOffer(null)
    else dismiss()
  }

  return (
    <>
      {offer && (
        <aside className="install" role="dialog" aria-label={t.install}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" width="44" height="44" alt="" />
          <div className="install__text">
            <strong>{t.install}</strong>
            <p>{offer === 'ios' ? t.iosHint : t.installHint}</p>
          </div>
          <div className="install__actions">
            {offer === 'install' ? (
              <>
                <button type="button" className="cta cta--primary" onClick={install}>{t.install}</button>
                <button type="button" className="install__later" onClick={dismiss}>{t.dismiss}</button>
              </>
            ) : (
              <button type="button" className="cta cta--ghost" onClick={dismiss}>{t.ok}</button>
            )}
          </div>
        </aside>
      )}
      {net && (
        <div className={`toast toast--net toast--${net}`} role="status">
          <span className="toast__dot" aria-hidden="true" />
          {net === 'offline' ? t.offline : t.online}
        </div>
      )}
    </>
  )
}
