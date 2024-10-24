import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/test-repo",
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
})
