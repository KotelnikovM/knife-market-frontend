import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    fs: {
      strict: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      entities: '/src/entities',
      widgets: '/src/widgets',
      shared: '/src/shared',
      pages: '/src/pages',
      features: '/src/features',
      app: '/src/app',
    },
  },
});
