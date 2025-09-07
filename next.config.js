/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    domains: ['raw.githubusercontent.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      },
    });
    return config;
  },
  experimental: {
    optimizePackageImports: ['react-icons']
  }
}

module.exports = withVideos(nextConfig)