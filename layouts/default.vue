<template lang="pug">
.layout
  cloak
  simplebar.page
    nuxt
  menu-mobile(v-if="$sizes.md_and_down")
  menu-desktop.menu-desktop(v-else)
</template>

<script>
import { mapState } from "vuex";

import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

import Cloak from "@/components/Cloak.vue";
import MenuDesktop from "@/components/MenuDesktop.vue";
import MenuMobile from "@/components/MenuMobile.vue";

export default {
  components: {
    simplebar,
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

*,
*:before,
*:after
  box-sizing border-box
  margin 0

a
  text-decoration none

.layout
  min-height 100vh
  max-height 100vh
  height 100vh

  @media $breakpoints-spec.lg-and-up
    display grid
    grid-template-columns 1fr
    grid-template-columns 1fr $menu-height

.menu-desktop
  height $menu-height
  width 100vh

.page
  min-height 100vh
  max-height 100vh
  overflow-y auto

.simplebar-track
  .simplebar-scrollbar
    &:before
      background $colors-white
      opacity 0.5

    &.simplebar-visible
      &:before
        opacity 1
</style>
