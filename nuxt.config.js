// eslint-disable-next-line nuxt/no-cjs-in-config
const PrismicConfig = require('./prismic.config')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Pix - Cultivez vos compétences numériques',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,400i|Roboto:400,500,600'
      }
    ],
    script: [
      {
        innerHTML:
          '{ window.prismic = { endpoint: "' +
          PrismicConfig.apiEndpoint +
          '"} }'
      },
      { src: '//static.cdn.prismic.io/prismic.min.js' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/link-resolver.js',
    '~/plugins/html-serializer.js',
    '~/plugins/prismic-vue.js',
    '~/plugins/i18n.js',
    '~/plugins/components.js',
    '~/plugins/meta.js',
    { src: '~plugins/slide-menu', ssr: false }
  ],
  /*
   ** Redirections
   */
  serverMiddleware: ['~/middleware/seo.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    '@nuxtjs/moment',
    ['nuxt-matomo', { matomoUrl: 'https://stats.pix.fr/', siteId: 1 }]
  ],
  moment: {
    locales: ['fr']
  },
  styleResources: {
    scss: ['assets/scss/app.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  i18n: {
    defaultLocale: 'fr-fr',
    locales: [
      {
        code: 'fr-fr',
        file: 'fr-fr.js'
      },
      {
        code: 'en-gb',
        file: 'en-gb.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'fr-fr'
    }
  },
  router: {
    middleware: 'current-page-path'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }
}
