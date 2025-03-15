import {URL, fileURLToPath} from "node:url";
import {svelte} from "@sveltejs/vite-plugin-svelte";
import {defineConfig} from "vite";
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    // base: '/ama/',
    plugins: [svelte(), VitePWA({
        registerType: 'autoUpdate', manifest: {
            name: 'My Awesome App',
            short_name: 'MyApp',
            description: 'My Awesome App description',
            theme_color: '#ffffff',
            "icons": [
                {
                    "src": "pwa-64x64.png",
                    "sizes": "64x64",
                    "type": "image/png"
                },
                {
                    "src": "pwa-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "pwa-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                },
                {
                    "src": "maskable-icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                }
            ]
        }
    })],
    resolve: {
        alias: [
            // "@/*": ["./src/*"],
            // "@models/*": ["src/core/models/*"],
            // "@ui/*": ["src/modules/ui/components/*"],
            // "@services/*": ["src/core/services/*"],
            // "@store/*": ["src/core/store/*"],
            // "@views/*": [".src/core/views/*"],
            // "@utils/*": ["src/utils/*"],
            // "@assets/*": ["src/assets/*"]
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url)),
            },
            {
                find: "@assets",
                replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
            },
            {
                find: "@views",
                replacement: fileURLToPath(
                    new URL("./src/core/views", import.meta.url),
                ),
            },
            {
                find: "@utils",
                replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
            },
            {
                find: "@ui",
                replacement: fileURLToPath(
                    new URL("./src/modules/ui/components", import.meta.url),
                ),
            },
            {
                find: "@models",
                replacement: fileURLToPath(
                    new URL(".src/core/models", import.meta.url),
                ),
            },
            {
                find: "@services",
                replacement: fileURLToPath(
                    new URL(".src/core/services", import.meta.url),
                ),
            },
            {
                find: "@store",
                replacement: fileURLToPath(new URL(".src/core/store", import.meta.url)),
            },
        ],
    },
});
