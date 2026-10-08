'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Flashcards } from './Flashcards'
import { ui, type Lang } from '@/lib/i18n'
import { readSaved, writeSaved, type SavedTerm } from '@/lib/saved'

// The saved terms of one language, read from this browser. Renders nothing until the browser has been read,
// so the server HTML never shows a wrong list.
export function SavedList({ lang, labels }: { lang: Lang; labels: { empty: string; remove: string } }) {
  const [items, setItems] = useState<SavedTerm[] | null>(null)
  const [practising, setPractising] = useState(false)

  useEffect(() => {
    const sync = () => setItems(readSaved(lang))
    sync()
    window.addEventListener('saved-changed', sync)
    return () => window.removeEventListener('saved-changed', sync)
  }, [lang])

  if (items === null) return null
  if (items.length === 0) return <p className="saved__empty">{labels.empty}</p>

  return (
    <>
      {practising ? (
        <Flashcards lang={lang} items={items} onClose={() => setPractising(false)} />
      ) : (
        <button type="button" className="btn saved__practise" onClick={() => setPractising(true)}>
          {ui[lang].saved.practise}
        </button>
      )}
      <ul className="saved">
        {items.map((x) => (
          <li key={x.id} className="saved__item">
            <Link href={`/${lang}/t/${x.id}/`} className="saved__link">
              <span dir="ltr">{x.term}</span>
              {x.translation && <span className="saved__tr">{x.translation}</span>}
            </Link>
            <button type="button" className="saved__remove" onClick={() => writeSaved(lang, readSaved(lang).filter((y) => y.id !== x.id))}>
              {labels.remove}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
