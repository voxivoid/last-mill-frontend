<template lang="pug">
simplebar
  .artists
    nuxt-link(v-for="(artist, i) in artists" :key="artist.name" :to="localePath({ name: 'artists-id', params: { id: artist.id }})")
      artist-thumbnail(:artist="artist")
</template>

<script>
import simplebar from "simplebar-vue";

import ArtistThumbnail from "@/components/ArtistThumbnail.vue";

import artists from "@/mocks/artists";

export default {
  components: {
    simplebar,
    ArtistThumbnail,
  },
  data() {
    return {
      artists,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.artists
  display grid
  grid-template-columns 1fr
  grid-auto-rows 256px
  background $colors-black
  height 100%
  width 100%

  @media $breakpoints-spec.md-and-up
    grid-auto-rows 384px

  @media $breakpoints-spec.lg-and-up
    grid-auto-rows 512px
    grid-template-columns 1fr 1fr
</style>
