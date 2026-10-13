// Backup and restore of everything QamoosTech keeps in this browser (saved terms, review schedule,
// explored terms, streak, quiz bests, badges, theme). There are no accounts, so a file is the only
// way to move progress to a new phone or keep it safe before clearing the browser.

const PREFIXES = ['saved-terms:', 'seen-terms:', 'recent-terms:', 'review:', 'quiz-best:']
const KEYS = ['visit-streak', 'badges-shown', 'theme', 'lang', 'swipe-hint-seen']
const APP = 'qamoostech'
const VERSION = 1

type Backup = { app: string; version: number; exportedAt: string; data: Record<string, string> }

function ours(key: string) {
  return KEYS.includes(key) || PREFIXES.some((p) => key.startsWith(p))
}

export function exportProgress(): Backup {
  const data: Record<string, string> = {}
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && ours(key)) data[key] = localStorage.getItem(key) ?? ''
  }
  return { app: APP, version: VERSION, exportedAt: new Date().toISOString(), data }
}

/** Starts a download of the backup file. */
export function downloadProgress() {
  const backup = exportProgress()
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = Object.assign(document.createElement('a'), { href: url, download: `qamoostech-progress-${backup.exportedAt.slice(0, 10)}.json` })
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

/** Reads a backup file and writes its values back. Only QamoosTech keys are restored; anything else in the
 *  file is ignored, so a wrong or edited file cannot write unrelated data. Returns how many keys came back. */
export async function restoreProgress(file: File): Promise<number> {
  const parsed: unknown = JSON.parse(await file.text())
  const backup = parsed as Partial<Backup>
  if (!backup || backup.app !== APP || typeof backup.data !== 'object' || backup.data === null) throw new Error('not a QamoosTech backup')
  let count = 0
  for (const [key, value] of Object.entries(backup.data)) {
    if (!ours(key) || typeof value !== 'string') continue
    localStorage.setItem(key, value)
    count++
  }
  return count
}
