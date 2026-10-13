// Renders the brand rasters from their SVG/HTML sources with a locally installed Chrome or Edge:
//   public/og.png              1200x630 share card   (scripts/brand/og.html)
//   public/apple-touch-icon.png 180x180 home-screen icon (public/logo.svg as a full-bleed square)
//   public/icon-192.png, icon-512.png, icon-maskable-512.png   install icons (manifest.webmanifest)
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

const tmp = mkdtempSync(join(tmpdir(), 'qt-icon-'))
const logo = readFileSync(join(web, 'public/logo.svg'), 'utf8')
const TILE = '<rect width="64" height="64" rx="16"'

/** Renders an SVG string to a square PNG, transparent outside the drawing. */
function svgToPng(svg, out, size) {
  const page = join(tmp, `${size}-${Math.random().toString(36).slice(2)}.html`)
  const sized = svg.replace('<svg ', `<svg width="${size}" height="${size}" style="display:block" `)
  writeFileSync(page, `<!doctype html><html><body style="margin:0;width:${size}px;height:${size}px;overflow:hidden;background:transparent">${sized}</body></html>`)
  execFileSync(browser, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--default-background-color=00000000',
    `--window-size=${size},${size}`, '--virtual-time-budget=1000', `--screenshot=${out}`, pathToFileURL(page).href], { stdio: 'ignore' })
  console.log('wrote', out)
}

// iOS draws its own rounded mask, so the icon is the logo with its tile made a full-bleed square
const square = logo.replace(TILE, '<rect width="64" height="64"')
svgToPng(square, join(web, 'public/apple-touch-icon.png'), 180)

// install icons (public/manifest.webmanifest): the logo as it is, and a maskable one whose mark sits
// inside the central 80% safe zone, so Android's circle or squircle mask never cuts into it
svgToPng(logo, join(web, 'public/icon-192.png'), 192)
svgToPng(logo, join(web, 'public/icon-512.png'), 512)
const at = square.indexOf('>', square.indexOf('<rect width="64" height="64"')) + 1
const maskable = `${square.slice(0, at)}<g transform="translate(32 32) scale(0.74) translate(-32 -32)">${square.slice(at, square.lastIndexOf('</svg>'))}</g></svg>`
svgToPng(maskable, join(web, 'public/icon-maskable-512.png'), 512)
