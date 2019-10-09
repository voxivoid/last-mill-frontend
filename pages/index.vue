<template lang="pug">
.home
  logo-horizontal.logo
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
  display grid
  place-items center center
  background $colors-black
  height 100%
  width 100%
  padding 32px

.logo
  max-width 512px
</style>
