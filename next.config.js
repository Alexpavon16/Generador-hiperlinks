/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Asegura que Next.js genera archivos estáticos
    distDir: 'out', // Cambia la carpeta de salida
  };
  
  module.exports = nextConfig;
  