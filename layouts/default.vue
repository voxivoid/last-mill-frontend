<template lang="pug">
.layout
  cloak
  nuxt
</template>

<script>
import { mapState } from "vuex";

import Cloak from "@/components/Cloak.vue";

export default {
  components: {
    Cloak,
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Last Mill é um estúdio de produção musical e vídeo." },
        { name: "keywords", content: "last mill, produção musical, produção de vídeo, videoclipes, videoclips, estúdio de vídeo, koopper, fontoura fx, márcio oliveira monteiro, estúdio lisboa, gravação musical, hip hop, rap, música urbana, kizomba, afro, música popular, estúdio" },
        ...i18nHead.meta,
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon_16.png", sizes: "16x16" },
        { rel: "icon", type: "image/png", href: "/favicon_32.png", sizes: "32x32" },
        { rel: "icon", type: "image/png", href: "/favicon_48.png", sizes: "48x48" },
        { href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;1,400&display=swap", rel: "stylesheet" },
        { href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css", rel: "stylesheet" },
        ...i18nHead.link,
      ],
    };
  },
  data() {
    return {
      $resizeListener: null,
    };
  },
  computed: {
    ...mapState({
      $sizes: state => state.breakpoints.sizes,
    }),
  },
  mounted() {
    this.resize();
    this.$resizeListener = window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$resizeListener);
  },
  methods: {
    resize() {
      this.$store.commit("breakpoints/setSizes", window.innerWidth);
    },
  },
};
</script>

<style lang="stylus">
@import '~assets/breakpoints'
@import '~assets/colors'

$menu-height = 65px

html
  font-family 'Raleway', sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  color #374151

body
  line-height 1.5rem
  margin 0

*,
*:before,
*:after
  box-sizing border-box

a
  color $colors-blue
  text-decoration none

.font-heading
  letter-spacing 0.2rem

.layout
  min-height 100vh
  max-height 100vh
  height 100vh

.menu-desktop
  height $menu-height
  width 100vh
  overflow-y auto

.page-scroll
  min-height 100vh
  max-height 100vh
  overflow-y auto

  @media $breakpoints-spec.md-and-up
    min-height initial
    height 100%


.simplebar-track
  .simplebar-scrollbar
    &:before
      background $colors-white
      opacity 0.5

    &.simplebar-visible
      &:before
        opacity 1

@media $breakpoints-spec.md-and-down
  .simplebar-content > *
    min-height 100vh
</style>
