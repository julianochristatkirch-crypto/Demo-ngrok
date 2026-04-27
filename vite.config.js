import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        hmr: process.env.NGROK_URL ? {
            host: process.env.NGROK_URL.replace('https://', '').replace('http://', ''),
            port: 443,
            protocol: 'https',
        } : undefined,
    },
});
