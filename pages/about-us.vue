<template lang="pug">
page-with-image(:title="$t('aboutUs')" imgSrc="/pages/about_us.jpg")
  p {{ aboutUs[locale] }}
  .artists
    nuxt-link(v-for="(artist, i) in artists" :key="artist.name" :to="localePath({ name: 'artists-id', params: { id: artist.id }})")
      artist-thumbnail(:artist="artist")
</template>

<script>
import PageWithImage from "@/components/PageWithImage.vue";
import ArtistThumbnail from "@/components/ArtistThumbnail.vue";

import LocaleHelpers from "@/mixins/helpers.locale";

import artists from "@/mocks/artists";
import aboutUs from "@/mocks/about-us";

export default {
  components: {
    ArtistThumbnail,
    PageWithImage,
  },
  mixins: [LocaleHelpers],
  data() {
    return {
      artists,
      aboutUs,
    };
  },

  i18n: {
    messages: {
      us: {
        aboutUs: "About us",
      },
      pt: {
        aboutUs: "Sobre nós",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.artists
  display grid
  grid-template-columns 1fr

  @media $breakpoints-spec.md-and-up
    grid-template-columns 1fr 1fr
</style>
