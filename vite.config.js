import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        tienda: resolve(import.meta.dirname, 'tienda.html'),
        historia: resolve(import.meta.dirname, 'mi-historia.html'),
      },
    },
  },
});