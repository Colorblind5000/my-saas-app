// next.config.js
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'js', 'jsx'],
  experimental: {
    appDir: false, // Hvis du ikke bruger en app-mappe
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
