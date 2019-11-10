<template lang="pug">
.home
  logo-horizontal.logo
  .overlay
  video(width="100%" autoplay loop muted)
    source(src="/videos/home_720p.mp4" type="video/mp4")
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
  background linear-gradient(90deg, rgba(0,0,0,0) 0%, $colors-black 100%);

.logo
  max-width 512px
  z-index 2

video
  position absolute
  top 0
  bottom 0
  left 0
  right 0
</style>
