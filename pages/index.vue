<template lang="pug">
.home
  div.on-top
    logo-horizontal.logo
    h2(class="font-heading lowercase tracking-widest mt-4") {{ $t("slogan") }}
    p(class="fixed bottom-1 right-1") Know more
  .overlay
  video(width="100%" muted autoplay loop playsinline src="/videos/home_720p.mp4")
</template>

<script>
import LogoHorizontal from "@/components/svgs/LogoHorizontal.vue";

export default {
  components: {
    LogoHorizontal,
  },
  i18n: {
    messages: {
      us: {
        slogan: "The path between dream and reality",
      },
      pt: {
        slogan: "O caminho entre o sonho e a realidade",
      },
    },
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

.on-top
  z-index 2

h2
  color white
  text-align center
  font-weight lighter
  font-size 16px

  @media $breakpoints-spec.md-and-up
    font-size 24px


video
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  height 100vh
  object-fit cover
</style>
