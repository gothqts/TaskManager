import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            assets: '/src/assets',
            navigation: '/src/navigation',
            screens: '/src/screens',
            shared: '/src/shared',
            styles: '/src/styles',
            types: '/src/types',
            utils: '/src/utils',
        },
    },
})
