/** @type {import('next').NextConfig} */
const nextConfig = {
  future: { webpack5: true },
  headers: [
    {
      key: 'Cache-Control',
      value: 'no-store, max-age=0',
    },
  ],
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = {
      fs: false,
      process: require.resolve('process/browser'),
    }
    return config
  },
  images: { domains: ['storage.googleapis.com'] },
}

module.exports = nextConfig
