/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  env: {
    ALGOLIA_APPLICATION_ID: process.env.ALGOLIA_APPLICATION_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
  },

  optimizeFonts: false,
};

module.exports = nextConfig;
