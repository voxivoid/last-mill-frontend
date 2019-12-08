<template lang="pug">
.home
  logo-horizontal.logo
  .overlay
  video(width="100%" muted autoplay loop playsinline src="/videos/home_720p.mp4")
</template>

<script>
import LogoHorizontal from "@/components/svgs/LogoHorizontal.vue";

export default {
  components: {
    LogoHorizontal,
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/colors'
@import '~assets/breakpoints'

.home
  position relative
  display grid
  place-items center center
  background $colors-black
  height 100%
  width 100%
  padding 32px
  overflow hidden

.overlay
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  z-index 1
  background linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, $colors-black 100%);

.logo
  max-width 512px
  z-index 2

video
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  height 100vh
  object-fit cover
</style>
