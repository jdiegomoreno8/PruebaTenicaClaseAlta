import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/jdiegomoreno8/PruebaTenicaClaseAlta.git',  // reemplaza con el nombre exacto de tu repo en GitHub
  plugins: [vue()],
})
