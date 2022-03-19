/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  typescript: {
    ignoreBuildErrors: true, //FIXME
  },
  eslint: {
    ignoreDuringBuilds: true, //FIXME
  },
}

module.exports = nextConfig
