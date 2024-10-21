import * as path from "path";

export default defineNuxtConfig({
    modules: [ "@primevue/nuxt-module"],
    css: ['@/assets/styles/tailwind.css', '@/assets/styles/base.css', '@/assets/styles/styles.scss'],
    primevue: {
        options: { theme: 'none' },
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    }
});
