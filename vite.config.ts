import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import SSR from 'vite-ssr/plugin';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
   build: {
      target: 'es2015',
      outDir: './_app/dist'
   },
   plugins: [Vue(), SSR(), WindiCSS()]
});
