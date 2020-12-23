<template lang="pug">
.menu-mobile
  menu-toggle.menu-toggle(v-model="isOpen")
  .overlay(:class="{'is-open': isOpen}")
    nuxt-link.logo(:to="localePath('index')" @click.native="isOpen = !isOpen")
      windmill(fill="white")

    nuxt-link.link.heading(v-for="page in pages" :key="page.to" :to="localePath(page.to)" @click.native="isOpen = !isOpen")
      span.base {{ page.name }}

    locale-selector.locale-selector
</template>

<script>
import LocaleSelector from "@/components/LocaleSelector.vue";
import MenuToggle from "@/components/MenuToggle.vue";
import Windmill from "@/components/svgs/Windmill.vue";

import MenuHelpers from "@/mixins/helpers.menu";

export default {
  components: {
    LocaleSelector,
    MenuToggle,
    Windmill,
  },
  mixins: [MenuHelpers],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

$menu-toggle-padding = 16px
$menu-toggle-height = 32px

.menu-mobile
  font-weight bold

.menu-toggle
  position fixed
  right $menu-toggle-padding
  top $menu-toggle-padding
  height $menu-toggle-height
  z-index 999

.overlay
  display grid
  grid-auto-rows 64px
  padding $menu-toggle-padding + 32px 32px
  position fixed
  top 0
  bottom 0
  left 100vw
  right 0
  background $colors-black
  z-index -1
  opacity 0
  transition all 0.3s

  &.is-open
    left 0
    z-index 998
    opacity 1
    box-shadow 0 14px 28px rgba($colors-black, 0.25), 0 10px 10px rgba($colors-black ,0.22)

    @media $breakpoints-spec.sm-and-up
      left calc(100vw - 500px)

.link
  display grid
  align-content center
  color $colors-white
  transition color 0.2s

  &:hover
    color $colors-grey

.logo
  align-self start
  width 50px

  svg
    height 100%

.locale-selector
  align-self center
  justify-self center
</style>
