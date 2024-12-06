import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"
import dotenv from 'dotenv';

dotenv.config();


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {

        target: process.env.VITE_BASE_URL,

        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});