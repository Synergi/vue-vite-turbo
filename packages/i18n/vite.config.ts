/// <reference types="vitest"/>

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  resolve: {},
  build: {
    lib: {
      name: 'I18n',
      entry: fileURLToPath(new URL('./index.ts', import.meta.url)),
      formats: ['es', 'iife'],
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'index.mjs';
          case 'iife':
            return 'index.js';
          default:
            return 'index.js';
        }
      },
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
  },
});
