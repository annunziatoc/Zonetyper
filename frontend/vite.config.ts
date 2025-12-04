import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import JavaScriptObfuscator from 'vite-plugin-javascript-obfuscator'

export default defineConfig({
    plugins: [
        tailwindcss(),
        react(),
        JavaScriptObfuscator({
            include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
            exclude: [/node_modules/],
            apply: 'build',
            options: {
                compact: true,
                simplify: true,
                stringArray: true,
                stringArrayThreshold: 0.75,
                stringArrayEncoding: ['base64'],
                identifierNamesGenerator: 'hexadecimal',
                disableConsoleOutput: true,
                renameGlobals: false,
            }
        })
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        open: false,
        watch: {
            usePolling: true,
        }
    },
    esbuild: {
        drop: ['console', 'debugger']
    }
})