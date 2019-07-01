<template lang="pug">
.artist-thumbnail
  .overlay
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

.overlay
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background $overlay-background-color
  opacity 0
  transition opacity $animation-duration

  &:hover
    opacity 0.2

    @media $breakpoints-spec.lg-and-up
      & + .name
        opacity 1
        right 0


.name
  padding 16px 32px
  background $name-background-color
  position absolute
  bottom 0
  left 0
  font-weight bold
  transition all $animation-duration
  text-align right

  @media $breakpoints-spec.lg-and-up
    overflow hidden
    opacity 0
    right 100%

img
  object-fit cover
  width 100%
  height 100%
</style>
