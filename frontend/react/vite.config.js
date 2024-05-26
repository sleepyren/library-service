import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {  
    host: true, //this is so I can test on mobile
    port: 5173
}
,
  preview: {
    port: 5173
  }
})
