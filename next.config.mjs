/** @type {import('next').NextConfig} */

import withSvgr from 'next-plugin-svgr';

const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

export default withSvgr(nextConfig);
