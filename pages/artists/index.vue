<template lang="pug">
simplebar
  .artists
    artist-thumbnail(v-for="artist in artists" :key="artist.name" :artist="artist" @click.native="$router.push(`/artists/${artist.id}`)")
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
  grid-auto-rows 1fr
  background $colors-black
  height 100%
  width 100%

  @media $breakpoints-spec.lg-and-up
    grid-template-columns 1fr 1fr
</style>
