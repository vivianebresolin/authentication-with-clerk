import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // https://github.com/vitejs/vite/discussions/5912
  define: {
    global: 'globalThis',
  },
})
