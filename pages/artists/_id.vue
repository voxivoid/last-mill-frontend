<template lang="pug">
.artist
  .image(:style="{backgroundImage: `url(${artist.photo})`}")
    .name {{ artist.name }}

  simplebar.page-scroll
    artist-info(:artist="artist")
</template>

<script>
import simplebar from "simplebar-vue";

import ArtistInfo from "@/components/ArtistInfo.vue";
import ReleaseThumbnail from "@/components/ReleaseThumbnail.vue";

import artists from "@/mocks/artists";

export default {
  components: {
    simplebar,
    ArtistInfo,
    ReleaseThumbnail,
  },
  data() {
    return {
      artist: artists.find(artist => artist.id === this.$route.params.id),
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.artist
  color $colors-white
  background $colors-black
  min-height 100vh
  max-height 100vh
  display grid

  @media $breakpoints-spec.md-and-down
    grid-template-rows 200px 1fr

  @media $breakpoints-spec.lg-and-up
    grid-template-columns 1fr 2fr

.image
  display grid
  place-items end end
  padding 16px 32px
  overflow hidden
  background-size cover
  background-position center


.name
  font-size 32px
  color $colors-white
  font-weight bold

  @media $breakpoints-spec.lg-and-up
    font-size 64px
</style>
