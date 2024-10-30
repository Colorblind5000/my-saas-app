// next.config.js
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['tsx', 'ts', 'js', 'jsx'], // Sikrer at alle filtyper understøttes
    experimental: {
      appDir: true, // Hvis du bruger en app-mappe, aktiver dette
    },
  };
  
  module.exports = nextConfig;
  