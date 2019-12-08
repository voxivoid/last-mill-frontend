<template lang="pug">
.layout
  cloak
  menu-mobile(v-if="$sizes.md_and_down")
  menu-desktop.menu-desktop(v-else)
  nuxt.page-scroll
</template>

<script>
import { mapState } from "vuex";

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
  font-family 'Maven Pro', sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box

body
  margin 0

*,
*:before,
*:after
  box-sizing border-box

h1
  font-size 32px

  @media $breakpoints-spec.lg-and-up
    font-size 48px

h2
  font-size 24px

  @media $breakpoints-spec.lg-and-up
    font-size 32px

h3
  font-size 18px

  @media $breakpoints-spec.lg-and-up
    font-size 24px

a
  color $colors-blue
  text-decoration none

.layout
  min-height 100vh
  max-height 100vh
  height 100vh

  @media $breakpoints-spec.lg-and-up
    display grid
    grid-template-rows auto 1fr

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
</style>
