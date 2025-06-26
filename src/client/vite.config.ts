import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    proxy: {
      '/api': { // This is the path prefix in your frontend requests
        target: 'http://localhost:3000', // The URL of your backend server
        changeOrigin: true, // Changes the origin of the host header to the target URL
      },
    },
  },
})
