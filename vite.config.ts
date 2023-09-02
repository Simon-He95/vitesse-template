/// <reference types="vitest" />

import Unocss from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePlugin as vitePluginInspectorLibCss } from 'unplugin-inspector-lib-css'
import { name } from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = '/'
  let plugins = [
    Vue({
      reactivityTransform: true,
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    Unocss(),
  ]

  let build: Record<string, any> = {
    target: 'es2015',
    cssTarget: 'chrome61',
  }

  if (mode === 'npm') {
    plugins = [
      Vue({
        reactivityTransform: true,
      }),
      cssInjectedByJsPlugin(),
      Unocss(),
      dts({
        entryRoot: 'src/components',
      }),
      vitePluginInspectorLibCss(),
    ]
    build = {
      target: 'es2015',
      cssTarget: 'chrome61',
      copyPublicDir: false,
      lib: {
        entry: './src/exports.ts',
        formats: ['cjs', 'es', 'umd'],
        name,
        fileName: 'index',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
          exports: 'named',
        },
      },
    }
  }

  return {
    base,
    plugins,
    build,
  }
})
