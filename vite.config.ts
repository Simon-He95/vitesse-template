/// <reference types="vitest" />

import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { name } from './package.json'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name,
      entry: './src/exports.ts',
      fileName: f => `index.${f}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [Vue({
    reactivityTransform: true,

  }), // https://github.com/antfu/unplugin-auto-import
  AutoImport({
    imports: [
      'vue',
      'vue/macros',
      'vue-router',
      '@vueuse/core',
    ],
    dts: true,
  }), Components({
    dts: true,
  }), Unocss()],
})
