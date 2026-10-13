'use client'

import { useState } from 'react'
import { buzz } from '@/lib/haptics'

/** Share a term: the phone's own share sheet where there is one (WhatsApp, Telegram, Slack...),
 *  otherwise the link is copied and a short "copied" note appears. */
export function ShareTerm({ title, text, labels }: { title: string; text: string; labels: { share: string; copied: string } }) {
  const [copied, setCopied] = useState(false)

  async function share() {
    const url = location.href.split('#')[0]
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, text, url })
        return
      } catch (e) {
        // the visitor closed the sheet: nothing to do
        if (e instanceof DOMException && e.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      buzz(12)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard blocked: fall back to the address bar, there is nothing more to do here
    }
  }

  return (
    <button type="button" className={`share-btn${copied ? ' is-done' : ''}`} onClick={share} aria-live="polite">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {copied ? (
          <path d="M5 12.5 10 17l9-10" />
        ) : (
          <>
            <circle cx="18" cy="5.5" r="2.5" />
            <circle cx="6" cy="12" r="2.5" />
            <circle cx="18" cy="18.5" r="2.5" />
            <path d="m8.2 10.8 7.6-4.1M8.2 13.2l7.6 4.1" />
          </>
        )}
      </svg>
      {copied ? labels.copied : labels.share}
    </button>
  )
}
