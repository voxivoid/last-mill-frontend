<template lang="pug">
.menu-desktop
  nuxt-link(v-for="page in pages" :key="page.to" :to="page.to")
    span.placeholder {{ page.name }}
    span.base {{ page.name }}
    span.hover {{ page.name }}
</template>

<script>
import MenuHelpers from "@/mixins/helpers.menu";

export default {
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
  grid-auto-columns max-content
  grid-gap 32px
  padding 16px 32px
  position absolute
  top 0
  left 100%
  transform-origin 0 0
  transform rotate(90deg)
  white-space nowrap
  background $colors-black

  a
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
