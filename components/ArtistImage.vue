<template lang="pug">
.artist-image(:style="{backgroundImage: `url(${artist.photo})`}")
  .name {{ artist.name }}
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

.artist-image
  display grid
  place-items end start
  padding 16px 32px
  overflow hidden
  background-size cover
  background-position center
  background-color $colors-black

  @media $breakpoints-spec.lg-and-up
    place-items end end

.name
  font-size 32px
  color $colors-white
  font-weight bold

  @media $breakpoints-spec.lg-and-up
    font-size 64px
</style>
