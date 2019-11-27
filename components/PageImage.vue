<template lang="pug">
.page-image(:style="{backgroundImage: `url(${imgSrc})`}")
  h1.title {{ title }}
  .gradient
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.page-image
  display grid
  place-items end start
  padding 16px 32px
  overflow hidden
  background-size cover
  background-position center
  background-color $colors-black
  position relative

  @media $breakpoints-spec.lg-and-up
    place-items end end

.title
  font-size 32px
  color $colors-white
  font-weight bold
  z-index 1
  margin 0

  @media $breakpoints-spec.lg-and-up
    font-size 48px

.gradient
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, $colors-black 100%)

  @media $breakpoints-spec.lg-and-up
    background linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, $colors-black 100%)
</style>
