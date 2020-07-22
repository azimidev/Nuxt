/*
 * NOTE: Please restart your server when you manipulate this file
 */
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal', // spa
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server', // static
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description || 'Paersclick.net description',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap',
      },
    ],
  },

  // NOTE: for SPA
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'white'
  // },

  // NOTE: for universal
  loading: {
    color: '#ff5000',
    height: '4px',
    duration: 5000,
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // internal plugins
    '@/plugins/internal.js', // its not needed because of auto importing components
    // external plugins
    '@/plugins/external.js',
    // filters
    '@/plugins/filters.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // SEE: https://github.com/nuxt-community/awesome-nuxt#modules
    // '@nuxtjs/proxy',
    'cookie-universal-nuxt',
  ],
  // proxy: {
  //   '/': {
  //     target: 'http://pars.test',
  //     pathRewrite: {
  //       '^/': '/',
  //     },
  //   },
  // },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // credentials: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
  // transition: 'page',
  transition: { name: 'fade', mode: 'out-in' },
  // ==========================================
  // rootDir: '/my-app/',
  // srcDir: '/src/',
  router: {
    middleware: 'log',
  },
  // publicPath: 'https://parsclick.net',
  // dev: process.env.NODE_ENV !== 'production',
  // ==========================================
  env: {
    baseUrl: process.env.BASE_URL || 'http://parsclick.test', // process.env.baseUrl
  },
  // ==========================================
  // quiet: false,
  // ssr: true,
  // cache: false,
  // cssSourceMap: true,
  // devtools: false,
  // friendlyErrors: true,
  // indicator: true,
  // optimizeCSS: false,
  // ==========================================
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     // terser-webpack-plugin
  //     // optimize-css-assets-webpack-plugin
  //   ],
  //   splitChunks: {
  //     chunks: 'all',
  //     automaticNameDelimiter: '.',
  //     name: undefined,
  //     cacheGroups: {},
  //   },
  // },
}
