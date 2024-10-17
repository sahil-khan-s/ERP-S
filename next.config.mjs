/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  webpack: (config) => {
    // Fix for regenerator runtime in Edge Runtime
    config.module.rules.push({
      test: /\.js$/,
      issuer: /\.[jt]sx?$/,
      use: ["babel-loader"],
      type: "javascript/auto",
    });

    return config;
  },
};

export default withSvgr(nextConfig);
