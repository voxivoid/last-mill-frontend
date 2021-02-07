import i18n from "./i18n";

export default {
  ssr: false,

  /*
  ** Headers of the page
  */
  head: {
    title: "Last Mill",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Last Mill website" },
      { name: "keywords", content: "Last Mill, Produção Audiovisual, Produção de Vídeo, BEcoming, Videoclipes, Estúdio de Vídeo, Fontoura FX, Márcio Oliveira Monteiro, Visual Mind Films" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon_16.png", sizes: "16x16" },
      { rel: "icon", type: "image/png", href: "/favicon_32.png", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/favicon_48.png", sizes: "48x48" },
      { href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;1,400&display=swap", rel: "stylesheet" },
      { href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css", rel: "stylesheet" },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [
    "reset-css/reset.css",
    "element-ui/lib/theme-chalk/index.css",
    "@/assets/main.css",
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/vue-lazyload",
    "@/plugins/element-ui",
  ],

  /*
  ** Nuxt.js modules
  */
  buildModules: ["@nuxtjs/tailwindcss"],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    ["nuxt-i18n", i18n],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [/^element-ui/],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
