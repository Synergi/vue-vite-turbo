/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    setupFiles: [
      '../../vitest.setup.ts',
      'vitest-localstorage-mock',
      './__mocks__/setupMocks.ts',
    ],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
  },
  resolve: {},
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
