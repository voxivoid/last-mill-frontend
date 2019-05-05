<template lang="pug">
.cloak
  windmill
</template>

<script>
import Windmill from "@/components/svgs/Windmill.vue";

export default {
  components: {
    Windmill,
  },
};
</script>

<style lang="stylus" scoped>
$animation-duration = 1s
.cloak
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color white
  display grid
  justify-content center
  align-content center
  animation fade-out $animation-duration forwards

svg
  animation scale $animation-duration forwards

@keyframes scale
  0%, 70%
    width 100px

  100%
    width 200px

@keyframes fade-out
  0%, 70%
    opacity 1
    z-index 10000

  100%
    opacity 0
    z-index -1
</style>
