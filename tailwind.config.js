/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#dbd6d6',
                    dark: '#1f1f1f',
                },
                surface: {
                    DEFAULT: '#f8f9fa',
                    dark: '#31748F',
                },
                'text-primary': {
                    DEFAULT: '#1a1a1a',
                    dark: '#E0E0E0',
                },
                'text-secondary': {
                    DEFAULT: '#6b7280',
                    dark: '#95AFC7',
                },
                action: {
                    DEFAULT: '#d63384',
                    dark: '#CB6583',
                },
                interactive: {
                    DEFAULT: '#0d6efd',
                    dark: '#6E87EE',
                },
                success: {
                    DEFAULT: '#198754',
                    dark: '#5FB3B4',
                },
                border: {
                    DEFAULT: '#dee2e6',
                    dark: '#6E6A86',
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}