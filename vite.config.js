import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 1. Add this import
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/DHAARA-WEB/',
  plugins: [
    react(), // 2. Add this to the plugins array
    tailwindcss(),
  ],
})