<template lang="pug">
.menu-toggle(@click="$emit('input', !value)")
  .toggle(:class="{'is-active': value}")
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/colors'

$hamburger-color = $colors-black
$cross-color = $colors-white

.menu-toggle
  position relative
  display grid
  align-content center
  justify-content center
  height 24px
  cursor pointer

.toggle
  transition all 75ms ease,opacity 75ms ease .12s

  &, &:before, &:after
    width 30px
    height 4px
    background $hamburger-color
    border-radius 4px

  &:before, &:after
    position absolute
    content ''
    opacity 1

  &:before
    top 0

  &:after
    bottom 0

  &.is-active
    transform rotate(45deg)

    &, &:before, &:after
      background $cross-color
      height 2px

    &:after
      transform rotate(-90deg)
</style>
