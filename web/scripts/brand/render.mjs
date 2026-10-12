// Renders the brand rasters from their SVG/HTML sources with a locally installed Chrome or Edge:
//   public/og.png              1200x630 share card   (scripts/brand/og.html)
//   public/apple-touch-icon.png 180x180 home-screen icon (public/logo.svg as a full-bleed square)
// Run from web/:  node scripts/brand/render.mjs
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const candidates = [
  `${process.env.ProgramFiles}/Google/Chrome/Application/chrome.exe`,
  `${process.env['ProgramFiles(x86)']}/Google/Chrome/Application/chrome.exe`,
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  `${process.env.ProgramFiles}/Microsoft/Edge/Application/msedge.exe`,
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
]
const browser = candidates.find((p) => p && existsSync(p))
if (!browser) throw new Error('No Chrome or Edge found')

const web = resolve(import.meta.dirname, '../..')
function shot(page, out, w, h) {
  execFileSync(browser, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    `--window-size=${w},${h}`, '--virtual-time-budget=2000', `--screenshot=${out}`, page], { stdio: 'ignore' })
  console.log('wrote', out)
}

shot(pathToFileURL(join(web, 'scripts/brand/og.html')).href, join(web, 'public/og.png'), 1200, 630)

// iOS draws its own rounded mask, so the icon is the logo with its tile made a full-bleed square
const tmp = mkdtempSync(join(tmpdir(), 'qt-icon-'))
const square = readFileSync(join(web, 'public/logo.svg'), 'utf8')
  .replace('<rect width="64" height="64" rx="16"', '<rect width="64" height="64"')
  .replace('<svg ', '<svg width="180" height="180" style="display:block" ')
const iconPage = join(tmp, 'icon.html')
writeFileSync(iconPage, `<!doctype html><html><body style="margin:0;width:180px;height:180px;overflow:hidden">${square}</body></html>`)
shot(pathToFileURL(iconPage).href, join(web, 'public/apple-touch-icon.png'), 180, 180)
