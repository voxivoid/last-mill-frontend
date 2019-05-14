<template lang="pug">
.menu-mobile
  menu-toggle.menu-toggle(v-model="isOpen")
  .overlay(:class="{'is-open': isOpen}")
    nuxt-link(v-for="page in pages" :key="page.to" :to="page.to")
      span.base {{ page.name }}
</template>

<script>
import MenuToggle from "@/components/MenuToggle.vue";

import MenuHelpers from "@/mixins/helpers.menu";

export default {
  components: {
    MenuToggle,
  },
  mixins: [MenuHelpers],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'

$menu-toggle-padding = 16px
$menu-toggle-height = 32px

.menu-toggle
  position fixed
  right $menu-toggle-padding
  top $menu-toggle-padding
  height $menu-toggle-height
  z-index 999

.overlay
  display grid
  grid-auto-rows 64px
  padding $menu-toggle-padding + 32px
  position fixed
  top 0
  bottom 0
  left 100vh
  right 0
  background white
  z-index -1
  opacity 0
  transition all 0.3s

  &.is-open
    left 50vh
    z-index 998
    opacity 1
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

</style>
