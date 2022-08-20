import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginStylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginStylelint()],
  server: {
    port: 2000
  }
})
