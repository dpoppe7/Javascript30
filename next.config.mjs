/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/projects/:path*',
        destination: '/projects/:path*',
      },
    ];
  },
};

export default nextConfig;
