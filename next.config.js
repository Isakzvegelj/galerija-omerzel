/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/galerija-omerzel',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    qualities: [75, 80, 85, 90, 95],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
