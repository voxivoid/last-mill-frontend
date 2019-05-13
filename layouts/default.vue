<template lang="pug">
.layout
  cloak
  nuxt
  menu-desktop
</template>

<script>
import { debounce } from "lodash";

import Cloak from "@/components/Cloak.vue";
import MenuDesktop from "@/components/MenuDesktop.vue";
import MenuMobile from "@/components/MenuMobile.vue";

export default {
  components: {
    Cloak,
    MenuDesktop,
    MenuMobile,
  },
  data() {
    return {
      $resizeListener: null,
    };
  },
  mounted() {
    this.resize();
    this.$resizeListener = window.addEventListener("resize", debounce(this.resize, 300));
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

$menu-height = 64px

html
  font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box

*,
*:before,
*:after
  box-sizing border-box
  margin 0


.layout
  min-height 100vh
  max-height 100vh
  height 100vh
  display grid
  grid-template-columns 1fr

  @media $breakpoints-spec.lg-and-up
    grid-template-columns 1fr $menu-height

.menu-desktop
  height $menu-height
  width 100vh
</style>
