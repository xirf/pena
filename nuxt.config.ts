// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [ '~/assets/css/main.css' ],
  typescript: {
    strict: true,
  },
  nitro: {
    preset: 'vercel-edge',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [ 'nuxt-icon' ],
})
