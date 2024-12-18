import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig['experimental'] = {
    ppr: true,
    swcPlugins: [[require.resolve('tempo-devtools/swc'), {}]],
  };
}

export default nextConfig;
