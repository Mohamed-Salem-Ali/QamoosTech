'use client'

import { useRef, useState } from 'react'
import { downloadProgress, restoreProgress } from '@/lib/backup'
import { ui, type Lang } from '@/lib/i18n'

/** Saved page: download the progress file, or restore one (after a confirm, then a reload so every
 *  part of the page reads the restored data). */
export function BackupPanel({ lang }: { lang: Lang }) {
  const t = ui[lang].backup
  const input = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle')

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    if (!window.confirm(t.confirm)) return
    try {
      await restoreProgress(file)
      location.reload()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="backup" aria-labelledby="backup-title">
      <div className="backup__text">
        <h2 id="backup-title">{t.title}</h2>
        <p>{t.text}</p>
      </div>
      <div className="backup__actions">
        <button
          type="button"
          className="cta cta--ghost"
          onClick={() => {
            downloadProgress()
            setStatus('saved')
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
          </svg>
          {t.download}
        </button>
        <button type="button" className="cta cta--ghost" onClick={() => input.current?.click()}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 20V9M7 14l5-5 5 5M5 4h14" />
          </svg>
          {t.restore}
        </button>
        <input ref={input} type="file" accept="application/json,.json" hidden onChange={onFile} />
      </div>
      <p className="backup__status" aria-live="polite">
        {status === 'saved' ? t.saved : status === 'error' ? t.error : ''}
      </p>
    </section>
  )
}
