import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  cacheDir: path.resolve(__dirname, ".vite"),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
