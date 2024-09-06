// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/image'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'pl',
    locales: [
      {
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl.json',
        name: 'Polski',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
      },
    ],
    langDir: 'locales/',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  experimental: {
    scanPageMeta: true,
  },
  image: {
    dir: './assets/img',
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#1c3464',
            secondary: '#34a6dc',
          },
        },
      },
    },
  },
});
