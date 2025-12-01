/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  transpilePackages: ['lucide-react'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
