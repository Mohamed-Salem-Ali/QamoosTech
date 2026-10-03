/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // lets a build run in a separate folder while 'next dev' is running (set NEXT_DIST_DIR=.next-build)
  distDir: process.env.NEXT_DIST_DIR || '.next',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
