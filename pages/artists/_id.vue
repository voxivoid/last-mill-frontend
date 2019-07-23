<template lang="pug">
component(:is="breakpoints.sizes.lg_and_up ? 'div' : 'simplebar'")
  .artist
    artist-image(:artist="artist")

    component(:is="breakpoints.sizes.lg_and_up ? 'simplebar' : 'div'" :class="{'page-scroll': breakpoints.sizes.lg_and_up}")
      artist-info(:artist="artist")
</template>

<script>
import { mapState } from "vuex";

import simplebar from "simplebar-vue";

import ArtistImage from "@/components/ArtistImage.vue";
import ArtistInfo from "@/components/ArtistInfo.vue";
import ReleaseThumbnail from "@/components/ReleaseThumbnail.vue";

import artists from "@/mocks/artists";

export default {
  components: {
    simplebar,
    ArtistImage,
    ArtistInfo,
    ReleaseThumbnail,
  },
  data() {
    return {
      artist: artists.find(artist => artist.id === this.$route.params.id),
    };
  },
  computed: {
    ...mapState({
      breakpoints: state => state.breakpoints,
    }),
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.artist
  color $colors-white
  background $colors-black
  display grid

  @media $breakpoints-spec.md-and-down
    grid-template-rows 200px 1fr

    .artist-image
      position sticky
      top -128px
      border-bottom 1px solid $colors-white

  @media $breakpoints-spec.lg-and-up
    grid-template-columns 1fr 2fr
</style>
