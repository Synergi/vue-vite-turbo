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
      name: 'ipscapeI18n',
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
        banner: `
/**
 *  Copyright ${new Date(Date.now()).getFullYear()} ipSCAPE 
 *  @license MIT
**/
`,
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
