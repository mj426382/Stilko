import pkg from './package'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/'
        }
      }
    : {}

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'STILKO - Producent kotew montażowych do okien i drzwi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Firma STILKO Monika Fołtyn w swojej ofercie posiada kotwy do okien PCV, kotew do okien drewnianych - kotwa wbijana, kotwy obrotowe oraz kotwy do okien aluminiowych.' },
      { hid: 'og:description', name: 'og:description', content: 'Producnt kotew montażowych do okien oraz drzwi z trzydziestoletnim doświadczeniem. Stilko to grupa pasjonatów ceniących sobie jakość.' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'STILKO - I wszystko w metalu' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'STILKO - I wszystko w metalu' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,700|Ubuntu:400,700&display=swap',
        rel: 'stylesheet'
      }
    ]
  },

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-173107191-1'
    }]
  ],

  ...routerBase,

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-scrollto', mode: 'client' }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['~/assets/_variables.scss']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
