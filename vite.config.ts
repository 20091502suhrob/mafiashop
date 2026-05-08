import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert(),
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    // Mana shu qism o'sha ogohlantirishni (Warning) yo'qotadi:
    chunkSizeWarningLimit: 2000, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    host: true,
    allowedHosts: true,
  },
});