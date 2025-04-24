import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import cesium from 'vite-plugin-cesium';
import ghPages from 'vite-plugin-gh-pages';
// https://vite.dev/config/
export default defineConfig({
  base: '/cesium-test-app/',
  plugins: [react(),tailwindcss(),cesium(),ghPages()],
})
