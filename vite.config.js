import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // NOTE this is what we will use when this application is in production
  // base: path.resolve(__dirname, './docs/'),
  build: {
    outDir: 'docs',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})

