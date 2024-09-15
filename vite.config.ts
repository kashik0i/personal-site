import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {VitePWA} from 'vite-plugin-pwa'
import {svelteInspector} from '@sveltejs/vite-plugin-svelte-inspector';
import path from "path";

import manifest from './manifest.json'

export default defineConfig({
    resolve: {
        alias: {
            $lib: path.resolve("./src/lib"),
        },
    },
    plugins: [
        svelte({prebundleSvelteLibraries: true}),
        VitePWA({
            registerType: 'autoUpdate', devOptions: {
                enabled: true
            },
            manifest: manifest
        }),
        svelteInspector({
            toggleKeyCombo: 'meta-shift',
            showToggleButton: 'always',
            toggleButtonPos: 'bottom-right'
        })
    ],
})
