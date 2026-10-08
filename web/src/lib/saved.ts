// Saved terms live in this browser only (localStorage), one list per language. Storage can be blocked
// (private windows, cleared site data), so every access is guarded and the page still works without it.

export type SavedTerm = { id: string; term: string; translation?: string }

const key = (lang: string) => `saved-terms:${lang}`

export function readSaved(lang: string): SavedTerm[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key(lang)) ?? '[]')
    if (!Array.isArray(value)) return []
    return value.filter((x): x is SavedTerm => typeof x?.id === 'string' && typeof x?.term === 'string')
  } catch {
    return []
  }
}

export function writeSaved(lang: string, items: SavedTerm[]) {
  try {
    localStorage.setItem(key(lang), JSON.stringify(items))
  } catch {
    // storage is blocked: the change is not kept, but the page keeps working
  }
  window.dispatchEvent(new Event('saved-changed'))
}
