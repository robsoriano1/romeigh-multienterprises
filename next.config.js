/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Future: configure i18n for Filipino/English
  // i18n: { locales: ['en', 'fil'], defaultLocale: 'en' },
}

module.exports = nextConfig
