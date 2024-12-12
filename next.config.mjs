/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'assets-global.website-files.com',
      'th.bing.com',
      'mir-s3-cdn-cf.behance.net',
      'verse.io',
      'img.freepik.com',
      'thumbs.dreamstime.com', // Added this domain
    ],
  },
};

export default nextConfig;
