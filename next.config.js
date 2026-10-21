/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { runtime: 'experimental-edge' },
  compress: true,
  typescript: { ignoreBuildErrors: true },
};


module.exports = nextConfig;
