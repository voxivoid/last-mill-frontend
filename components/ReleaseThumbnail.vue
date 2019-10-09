<template lang="pug">
.release-thumbnail
  img(:src="release.image")
  .title {{ release.title }}
  .social-networks
    template(v-for="socialNetwork in socialNetworks")
      a(v-if="release[socialNetwork.id]" :key="socialNetwork.id" :href="release[socialNetwork.id]" target="_blank" rel="noopener noreferrer")
        i.fab(:class="socialNetwork.icon")
</template>

<script>
export default {
  props: {
    release: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      socialNetworks: [
        {
          id: "youtube",
          icon: "fa-youtube",
        },
        {
          id: "spotify",
          icon: "fa-spotify",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/colors'

.release-thumbnail
  display grid
  grid-gap 8px
  color $colors-white

img
  width 100%

.title
  text-align center
  font-weight bold

.social-networks
  display grid
  grid-auto-flow column
  align-items center
  justify-content center
  grid-gap 16px

  a
    text-decoration none

  .fab
    color $colors-white
    font-size 32px
</style>
