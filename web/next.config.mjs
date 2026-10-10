/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // lets a build run in a separate folder while 'next dev' is running (set NEXT_DIST_DIR=.next-build)
  distDir: process.env.NEXT_DIST_DIR || '.next',
  trailingSlash: true,
  images: { unoptimized: true },
  // app/global-not-found.tsx renders the whole document for URLs that match no page,
  // so the 404 page has its own html, body and stylesheets (see that file).
  experimental: { globalNotFound: true },
}

export default nextConfig
