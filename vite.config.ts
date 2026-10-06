/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // The app always opens at http://localhost:5173. If that port is taken, it stops instead of picking another.
  server: { port: 5173, strictPort: true },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    css: false,
  },
});
