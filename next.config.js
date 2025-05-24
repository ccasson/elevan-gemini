/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'img.icons8.com'], // Add other domains if you use images from elsewhere
  },
};

module.exports = nextConfig;
