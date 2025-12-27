import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/home/',
  plugins: [react()],
})

//para subir alterações no github pages: npm run build e npm run deploy