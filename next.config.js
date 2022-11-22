module.exports = {
  reactStrictMode: true,
  env: {
    MAPBOX_API_key: process.env.MAPBOX_API_key
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
