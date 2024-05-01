// https://nuxt.com/docs/api/configuration/nuxt-config

const BASE_URL = 'test.bilgi.edu.tr'; // Change this to your domain

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n', // https://i18n.nuxtjs.org/
    'nuxt-gtag', // https://github.com/johannschopplich/nuxt-gtag#readme
    '@nuxtjs/google-fonts', // https://google-fonts.nuxtjs.org/
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light', // default value of $colorMode.preference (dark/light/system)
    fallback: 'light',
    classSuffix: ''
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      siteurl: `https://${BASE_URL}`,
      apiUrl: BASE_URL,
      email: 'info@bilgi.edu.tr' // Change this to your email
    }
  },
  $development: { 
    runtimeConfig: {
      public: {
        siteurl: 'http://localhost:3000', 
      }
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' 
    },
    defaultLocale: 'en',
    strategy: 'prefix',
    lazy: true,
    langDir: 'lang',
    customRoutes: 'config',
    locales: [
      { code: 'en', iso: 'en-GB', name: 'English', file: 'en.ts'},
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe', file: 'tr.ts'}
    ],
    pages: {
      about: {
        en: '/about',
        tr: '/hakkimizda',
      },
      // about_whoweare: {
      //   en: '/about/whoweare',
      //   tr: '/hakkimizda/kimiz',
      // },
      contact: {
        en: '/contact',
        tr: '/iletisim',
      },
      news: {
        en: '/news',
        tr: '/haberler',
      },
      products: {
        en: '/products',
        tr: '/urunler',
      },
    },
  },
  gtag: {
    id: 'G-XXXXXXXXXX'
  },
  googleFonts: {
    families: {
      // Roboto: true,
      // 'Josefin+Sans': true,
      // Lato: [100, 300],
      Raleway: [400, 700],
      Inter: '200..700',
      // 'Crimson Pro': {
      //   wght: '200..900',
      //   ital: '200..700',
      // }
    }
  }
})