<template lang="pug">
.menu-mobile
  menu-toggle.menu-toggle(v-model="isOpen")
  .overlay(:class="{'is-open': isOpen}")
    nuxt-link.logo(:to="localePath('index')" @click.native="isOpen = !isOpen")
      windmill(fill="white")
    locale-selector.locale-selector
    nuxt-link.link(v-for="page in pages" :key="page.to" :to="localePath(page.to)" @click.native="isOpen = !isOpen")
      span.base {{ page.name }}
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
  padding $menu-toggle-padding + 32px 0
  position fixed
  top 0
  bottom 0
  left 100vw
  right 0
  background $colors-black
  z-index -1
  opacity 0
  transition all 0.3s

  & > .link
    border-bottom 1px dashed $colors-grey

  &.is-open
    left 0
    z-index 998
    opacity 1
    box-shadow 0 14px 28px rgba($colors-black, 0.25), 0 10px 10px rgba($colors-black ,0.22)

    @media $breakpoints-spec.sm-and-up
      left 50vw

.link
  display grid
  align-content center
  padding 0 32px
  color $colors-white

.logo
  display flex
  align-content center
  justify-content center

  svg
    height 100%

.locale-selector
  display grid
  align-content center
  justify-content center
</style>
