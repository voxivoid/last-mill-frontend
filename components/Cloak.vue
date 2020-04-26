<template>
  <div class="cloak">
    <svg
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 382.5 394.7"
      style="enable-background:new 0 0 382.5 394.7;"
    >
      <path
        d="M262.4,102.2c2.4-5.5-3.1-3.7-3.1-3.7s-66.5,55.7-68.4,56.5s-4.4-0.1-4.4-0.1c-25.7-10.4-40.9-10-40.9-10
  l-47,45.3c-28.7,2.2-42.2,14.8-42.2,14.8c-11.8,79.2-17.4,184.3-17.4,184.3s63.1,5.5,108.4,5.5s114.5-7,114.5-7
  s-8.2-106-13.7-151.9c-2.1-17.4-3.4-29.7-5.6-31.5c-10.6-10.5-37.6-14.5-37.6-14.5c-1.6-20.2,0.3-30.7,0.3-30.7L262.4,102.2z
   M160.5,354.4l-95.8-93c0,0,32.8,11.8,127.3-38.4L160.5,354.4z"
      />
      <path
        d="M286.4,181.4c0,0,17.2,39.8,41.6,121.9c0,0,28.5-42.7,53.5-62c0,0,2.4-1.5-0.2-3.4S291.1,181.6,286.4,181.4z
  "
      />
      <path
        d="M229.1,76.1c3.7-2,40.7,1.5,71.2,3.6c0,0,1.2-0.3,0-1.4c-1.2-1.1-44-58-50.2-71c-1.7-5.2-2.4-9-3.9-6.4
  c-1.5,2.6-3,19.3-7.4,38C234.4,57.1,228,74.6,229.1,76.1z"
      />
      <path
        d="M77.2,3.3c1.6,0.4-1.2,3.5,1.5,10.7c3.3,16.3,13.9,48.7,47.2,81.1c5.4,6.5-19.1-5.6-19.1-5.6
  S3.2,37.1,0.4,35.1c-2.8-2,10.1-4.6,19.4-6.7c7-1.6,32.7-13.1,47.4-20.1C72.1,6,75.6,2.9,77.2,3.3z"
      />
    </svg>
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
