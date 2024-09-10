// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon'],
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
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  experimental: {
    scanPageMeta: true,
  },
  image: {
    dir: './assets/img',
  },
  icon: {
    serverBundle: {
      collections: ['fa-solid'],
    },
  },
  tailwindcss: {
    config: {
      plugins: [require('tailwind-hamburgers')],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Open Sans', 'sans-serif'], // Open Sans as the default sans font
            poppins: ['Poppins', 'sans-serif'], // Poppins as an additional option
          },
          colors: {
            primary: '#1c3464',
            secondary: '#34a6dc',
            'light-blue': '#dee1f8',
            'light-dark': '#4C5253',
            dark: '#101218',
          },
        },
      },
    },
  },
});
