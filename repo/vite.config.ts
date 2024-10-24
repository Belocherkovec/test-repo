import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  let base = "/";

  if (command === 'build') {
    base = "./test-repo";
  }

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  }
})
