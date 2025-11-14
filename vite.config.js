import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
//my repo name
    base: "/e-plantShopping",
    plugins: [react()],
})
