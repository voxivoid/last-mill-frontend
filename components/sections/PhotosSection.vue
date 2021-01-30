<template lang="pug">
section
  .section-container.photos
    img(src="~/assets/images/headphones.jpg")
    img(src="~/assets/images/mic.jpg")
    img(src="~/assets/images/mpc.jpg")
</template>

<script>

export default {
  data() {
    return {
    };
  },
  i18n: {
    messages: {
      us: {

      },
      pt: {

      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.photos
  background $colors-black
  display grid
  width 100%
  grid-gap 16px

  @media $breakpoints-spec.md-and-up
    grid-auto-flow column

img
  width 100%
</style>
