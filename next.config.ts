import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Autorizamos a este dominio
        port: '',
        pathname: '/**', // Permitimos cualquier ruta dentro de ese dominio
      },
    ],
  },
};

export default nextConfig;