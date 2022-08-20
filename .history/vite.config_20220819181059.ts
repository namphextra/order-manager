import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import StylelintPlugin from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), StylelintPlugin()],
  server: {
    port: 2000
  }
})
