import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enables polling-based file watching
      interval: 1000,   // Sets the polling interval (in milliseconds)
    },
  },
})
