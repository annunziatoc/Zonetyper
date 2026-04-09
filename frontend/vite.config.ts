import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({

    plugins: [react()],
    test: {
        globals: true,
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        open: false,
        watch: {
            usePolling: true,
        },
        proxy: {
            '/api': 'http://backend:5000'
        }
    },
    esbuild: {
        // drop: ['console', 'debugger']
    }
})