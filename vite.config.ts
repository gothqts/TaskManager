import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import autoprefixer from 'autoprefixer'


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(),],
    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
    },
    resolve: {
        alias: {
            assets: '/src/assets',
            navigation: '/src/navigation',
            services: '/src/services',
            screens: '/src/screens',
            shared: '/src/shared',
            styles: '/src/styles',
            types: '/src/types',
            utils: '/src/utils',
        },
    },
})
