<template>
  <div class="cloak">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-106 223.2 382.5 394.7"
    ><path d="M156.4 325.4c2.4-5.5-3.1-3.7-3.1-3.7s-66.5 55.7-68.4 56.5c-1.9.8-4.4-.1-4.4-.1-25.7-10.4-40.9-10-40.9-10l-47 45.3c-28.7 2.2-42.2 14.8-42.2 14.8C-61.4 507.4-67 612.5-67 612.5S-3.9 618 41.4 618s114.5-7 114.5-7-8.2-106-13.7-151.9c-2.1-17.4-3.4-29.7-5.6-31.5C126 417.1 99 413.1 99 413.1c-1.6-20.2.3-30.7.3-30.7l57.1-57zM54.5 577.6l-95.8-93S-8.5 496.4 86 446.2L54.5 577.6zM180.4 404.6s17.2 39.8 41.6 121.9c0 0 28.5-42.7 53.5-62 0 0 2.4-1.5-.2-3.4s-90.2-56.3-94.9-56.5zM123.1 299.3c3.7-2 40.7 1.5 71.2 3.6 0 0 1.2-.3 0-1.4s-44-58-50.2-71c-1.7-5.2-2.4-9-3.9-6.4-1.5 2.6-3 19.3-7.4 38-4.4 18.2-10.8 35.7-9.7 37.2zM-28.8 226.5c1.6.4-1.2 3.5 1.5 10.7 3.3 16.3 13.9 48.7 47.2 81.1 5.4 6.5-19.1-5.6-19.1-5.6s-103.6-52.4-106.4-54.4c-2.8-2 10.1-4.6 19.4-6.7 7-1.6 32.7-13.1 47.4-20.1 4.9-2.3 8.4-5.4 10-5z" /></svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
$animation-duration = 2s
$color = black

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

path
  fill white
  stroke: $color;
  stroke-width 2px
  stroke-dasharray 100%
  stroke-dashoffset 0
  animation stroke-animation "calc(%s * 0.6)" % $animation-duration forwards

svg
  width 200px
  height 200px


@keyframes stroke-animation
  0%, 10%
    stroke-dashoffset 100%
  80%
    fill white
    stroke-dashoffset 0
  90%, 100%
    stroke-dasharray 0
    fill $color

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
