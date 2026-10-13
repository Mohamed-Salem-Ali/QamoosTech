'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { ui, type Lang } from '@/lib/i18n'

/** The list of keyboard shortcuts, opened with "?" anywhere or from the footer link. A native <dialog>,
 *  so focus stays inside it and Esc closes it. The footer link is hidden on touch screens (no keyboard).
 *  Also makes "/" work on every page: where there is no search box, it opens the home page's search. */
export function KeyboardHelp({ lang }: { lang: Lang }) {
  const t = ui[lang].keys
  const dialog = useRef<HTMLDialogElement>(null)
  const router = useRouter()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.key !== '?' && e.key !== '/') || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return
      const el = e.target instanceof HTMLElement ? e.target : null
      if (el?.isContentEditable || el?.closest('input, textarea, select')) return
      if (e.key === '?') {
        e.preventDefault()
        if (!dialog.current?.open) dialog.current?.showModal()
      } else if (!document.querySelector('.search input')) {
        // the home page's own search box handles "/" itself
        e.preventDefault()
        dialog.current?.close()
        router.push(`/${lang}/#search`)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lang, router])

  return (
    <>
      <button type="button" className="keys-link" onClick={() => dialog.current?.showModal()} aria-keyshortcuts="?">
        {t.open}
      </button>
      <dialog
        ref={dialog}
        className="keys"
        aria-labelledby="keys-title"
        // a click on the backdrop (the dialog box itself, outside its content) closes it
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close()
        }}
      >
        <div className="keys__inner">
          <header className="keys__head">
            <h2 id="keys-title">{t.title}</h2>
            <button type="button" className="keys__close" onClick={() => dialog.current?.close()} aria-label={t.close}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </header>
          {t.groups.map((g) => (
            <section key={g.name} className="keys__group">
              <h3>{g.name}</h3>
              <dl>
                {g.items.map(([key, what]) => (
                  <div key={key}>
                    <dt>
                      <kbd dir="ltr">{key}</kbd>
                    </dt>
                    <dd>{what}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </dialog>
    </>
  )
}
