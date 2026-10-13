// QamoosTech service worker: makes the site installable and readable offline.
// - Pages: network first (always fresh when online), the last copy when offline, else /offline.html.
// - Next.js build files (/_next/static, content-hashed): cache first, they never change.
// - Everything else from this site (search index, cards, logo, audio): served from the cache
//   when present and refreshed in the background.
// Bump VERSION to drop every old cache on the next visit. Registered by components/PwaBits.tsx.
const VERSION = 'v1'
const PAGES = `pages-${VERSION}`
const ASSETS = `assets-${VERSION}`
const PRECACHE = ['/offline.html', '/logo.svg', '/icon-192.png', '/manifest.webmanifest']
const MAX_PAGES = 80

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(ASSETS).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.endsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

async function trim(cacheName, max) {
  const cache = await caches.open(cacheName)
  const keys = await cache.keys()
  for (const key of keys.slice(0, Math.max(0, keys.length - max))) await cache.delete(key)
}

async function networkFirstPage(request) {
  const cache = await caches.open(PAGES)
  try {
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone()).then(() => trim(PAGES, MAX_PAGES))
    }
    return response
  } catch {
    const hit = (await cache.match(request, { ignoreSearch: true })) || (await caches.match(request, { ignoreSearch: true }))
    return hit || (await caches.match('/offline.html'))
  }
}

async function cacheFirst(request) {
  const hit = await caches.match(request)
  if (hit) return hit
  const response = await fetch(request)
  if (response.ok) (await caches.open(ASSETS)).put(request, response.clone())
  return response
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(ASSETS)
  const hit = await cache.match(request)
  const refresh = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone())
      return response
    })
    .catch(() => hit || Response.error())
  return hit || refresh
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  // Vercel analytics and the worker itself always go to the network
  if (url.pathname.startsWith('/_vercel') || url.pathname === '/sw.js') return
  // audio is fetched with Range requests; let the browser handle those directly
  if (request.headers.has('range')) return

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstPage(request))
  } else if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request))
  } else {
    event.respondWith(staleWhileRevalidate(request))
  }
})
