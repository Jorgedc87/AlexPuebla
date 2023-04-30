import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@layoutCss': path.resolve(__dirname, './src/styles/components/Layout'),
      '@components': path.resolve(__dirname, './src/components'),
      // Agrega aquí cualquier otro alias que necesites
    },
  },
})
