/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  // images Configuration.
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['restro.infotechgravity.com'],
  },
};

module.exports = nextConfig;
