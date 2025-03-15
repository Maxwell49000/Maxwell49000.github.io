import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // L'alias @ pointe vers le dossier src
    },
  },
  assetsInclude: ['**/*.PNG'],
  base: '/' // Met ici ton repo GitHub Pages
})
