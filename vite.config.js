import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // On dit à Vitest d'ignorer le dossier e2e et les node_modules
    exclude: ['e2e/**', 'node_modules/**'],
  },
});
