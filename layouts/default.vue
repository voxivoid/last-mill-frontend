<template lang="pug">
.layout
  cloak
  nuxt
  menu-custom.menu
</template>

<script>
import Cloak from "@/components/Cloak.vue";
import MenuCustom from "@/components/Menu.vue";

export default {
  components: {
    Cloak,
    MenuCustom,
  },
};
</script>

<style lang="stylus">
$menu-height = 100px

html
  font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box

*,
*:before,
*:after
  box-sizing border-box
  margin 0


.layout
  min-height 100vh
  max-height 100vh
  height 100vh
  display grid
  grid-template-columns 1fr $menu-height

.menu
  height $menu-height
  width 100vh
</style>
