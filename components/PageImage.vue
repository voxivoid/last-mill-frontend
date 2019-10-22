<template lang="pug">
.page-image(:style="{backgroundImage: `url(${imgSrc})`}")
  .title {{ title }}
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

  @media $breakpoints-spec.lg-and-up
    place-items end end

.title
  font-size 32px
  color $colors-white
  font-weight bold

  @media $breakpoints-spec.lg-and-up
    font-size 64px
</style>
