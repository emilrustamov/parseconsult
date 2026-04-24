import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    tailwindcss(),
    ...(mode === 'development' ? [vueDevTools()] : []),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return
          }
          if (id.includes('@lottiefiles') || id.includes('dotlottie')) {
            return 'vendor-lottie'
          }
          if (id.includes('vue-i18n')) {
            return 'vendor-i18n'
          }
          if (id.includes('vue-router')) {
            return 'vendor-router'
          }
          if (id.includes('vue3-carousel')) {
            return 'vendor-carousel'
          }
        },
      },
    },
  },
}))
