import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    reactStrictMode: true,
    output: 'export',
    // 'next dev' works in its own folder. A build always writes its working files to .next (with
    // output: 'export', distDir only moves the exported site), so a build used to overwrite the files of
    // a running dev server and break it. NEXT_DIST_DIR=.next-build puts the exported site there instead of out/.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : process.env.NEXT_DIST_DIR || '.next',
    trailingSlash: true,
    images: { unoptimized: true },
    // app/global-not-found.tsx renders the whole document for URLs that match no page,
    // so the 404 page has its own html, body and stylesheets (see that file).
    experimental: { globalNotFound: true },
  }
}
