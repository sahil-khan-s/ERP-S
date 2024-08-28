/** @type {import('next').NextConfig} */

import withSvgr from 'next-plugin-svgr';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
};

export default withSvgr(nextConfig);
