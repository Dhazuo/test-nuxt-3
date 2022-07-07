let available = [
  {
      id: 5,
      name: "algo"
  },
  {
      id: 4,
      name: "fksldfkl"
  }
];

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'universal',
  target: 'static',
  ssr: true,
  router: {
    base: '/text-nuxt2/'
  },
  generate: {
    routes() {
      return available.map(element => {
        return '/directory/microsite/' + `/${element.id}/` + element.name
      })
    }
  },
  head: {
    title: 'text-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
