/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "build",
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  babel: {
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-object-rest-spread',
      // Add other plugins if needed
    ],
  },
};

module.exports = nextConfig;
