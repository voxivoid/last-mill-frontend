<template lang="pug">
.artist-thumbnail
  .overlay
  .name
    h2 {{ artist.name }}
    p {{ artist[`role_${locale}`] }}
  img(:src="artist.photo")
</template>

<script>
import LocaleHelpers from "@/mixins/helpers.locale";

export default {
  mixins: [
    LocaleHelpers,
  ],
  props: {
    artist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

$overlay-background-color = $colors-white
$name-background-color = $colors-white
$animation-duration = 0.3s

.artist-thumbnail
  position relative
  height 100%
  width 100%
  overflow hidden
  cursor pointer

  @media $breakpoints-spec.lg-and-up
    &::after
      position absolute
      bottom 0
      left 0
      right 100%
      height 1px
      background white
      content ''
      transition right $animation-duration

    &:hover
      &::after
        right 0


.overlay
  @media $breakpoints-spec.lg-and-up
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background $overlay-background-color
    opacity 0
    transition opacity $animation-duration
    z-index 2

    &:hover
      opacity 0.2

      & + .name
        opacity 1
        right 0

      & ~ img
        filter blur(10px)
        transform scale(1.2)

p
  font-size 16px
  margin 0

h2
  margin 0

.name
  padding 8px 16px
  position absolute
  bottom 0
  left 0
  color $colors-white
  z-index 1
  margin 0

  @media $breakpoints-spec.md-and-up
    padding 16px 32px

  @media $breakpoints-spec.lg-and-up
    background transparent
    font-size 64px
    opacity 0
    transition opacity $animation-duration

img
  object-fit contain
  width 100%
  height 100%
  transition transform $animation-duration
</style>
