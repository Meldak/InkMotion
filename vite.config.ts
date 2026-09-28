import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://melda.github.io/InkMotion/"  // <== CAMBIAR POR EL NOMBRE DE LA GITHUB PAGE [nombre.github.io]
})
