<template lang="pug">
.menu-desktop
  nuxt-link.logo(:to="localePath('index')")
    windmill(fill="white")

  .links
    nuxt-link.link(v-for="page in pages" :key="page.to" :to="localePath(page.to)")
      span.placeholder {{ page.name }}
      span.base {{ page.name }}
      span.hover {{ page.name }}

  locale-selector
</template>

<script>
import Windmill from "@/components/svgs/Windmill.vue";
import LocaleSelector from "@/components/LocaleSelector.vue";

import MenuHelpers from "@/mixins/helpers.menu";

export default {
  components: {
    LocaleSelector,
    Windmill,
  },
  mixins: [MenuHelpers],
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.menu-desktop
  display grid
  align-content center
  grid-auto-flow column
  grid-template-columns auto 1fr
  grid-gap 32px
  padding 16px 32px
  white-space nowrap
  background $colors-black
  width 100%

  .link
    display grid
    align-content center
    justify-content center
    position relative
    overflow hidden
    color $colors-white

    .base, .hover
      transition transform .3s

    &:hover
      .base, .hover
        transform translateY(100%)

.links
  display grid
  align-content center
  grid-auto-flow column
  grid-auto-columns max-content
  grid-gap 32px
  overflow-x auto

.logo
  height 100%

  svg
    object-fit contain
    height 100%

.base
  position absolute

.hover
  position absolute
  top -100%
  font-weight bold

.placeholder
  visibility hidden
  font-weight bold
</style>
