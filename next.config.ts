import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Disable X-Powered-By header
  poweredByHeader: false,

  // Enable gzip compression
  compress: true,

  // Enable static export for Cloudflare Pages
  output: "export",

  // Enable unoptimized images for static HTML export compatibility
  images: {
    unoptimized: true,
  },
}

export default nextConfig
