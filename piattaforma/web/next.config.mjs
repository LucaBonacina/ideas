/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL || 'http://localhost:8181';

const nextConfig = {
  // Il browser chiama /api/...: Next inoltra al backend, senza esporne l'indirizzo.
  async rewrites() {
    return [{ source: '/api/:path*', destination: `${API_URL}/:path*` }];
  },
  poweredByHeader: false,
  // Immagine Docker minima per Cloud Run (server.js con le sole dipendenze necessarie).
  output: 'standalone',
};

export default nextConfig;
