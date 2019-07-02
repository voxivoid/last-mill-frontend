<template lang="pug">
.artist-thumbnail
  .overlay
  .name-grid
    .name {{ artist.name }}
  img(:src="artist.photo")
</template>

<script>
export default {
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

      & + .name-grid
        opacity 1
        right 0

      & ~ img
        filter blur(10px)
        transform scale(1.2)

.name-grid
  display grid
  align-items end
  justify-content end
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  z-index 1

  @media $breakpoints-spec.lg-and-up
    opacity 0
    align-items end
    justify-content end
    transition opacity $animation-duration

.name
  padding 16px 32px
  background $name-background-color
  font-weight bold

  @media $breakpoints-spec.lg-and-up
    background transparent
    color $colors-white
    font-size 64px
    font-weight bold

img
  object-fit cover
  width 100%
  height 100%
  transition transform   $animation-duration
</style>
