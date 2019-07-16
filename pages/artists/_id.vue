<template lang="pug">
.artist
  .image(:style="{backgroundImage: `url(${artist.photo})`}")
    .name {{ artist.name }}

  simplebar.page-scroll
    .artist-info
      section
        h1 {{ $t("biography") }}
        p {{ artist[`bio_${locale}`] }}

      section
        h1 {{ $t("releases") }}
        .releases
          release-thumbnail(v-for="release in artist.releases" :key="release.title" :release="release")

      section
        h1 {{ $t("socialNetworks") }}
</template>

<script>
import { mapState } from "vuex";

import simplebar from "simplebar-vue";

import ReleaseThumbnail from "@/components/ReleaseThumbnail.vue";

import artists from "@/mocks/artists";

export default {
  components: {
    simplebar,
    ReleaseThumbnail,
  },
  data() {
    return {
      artist: artists.find(artist => artist.id === this.$route.params.id),
    };
  },
  computed: {
    ...mapState({
      locale: state => state.i18n.locale,
    }),
  },
  i18n: {
    messages: {
      en: {
        biography: "Biography",
        releases: "Releases",
        socialNetworks: "Social networks",
      },
      pt: {
        biography: "Biografia",
        releases: "Lançamentos",
        socialNetworks: "Redes sociais",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

h1
  font-family "Arial black"
  font-weight bold
  margin-bottom 16px

p
  white-space pre-wrap

.artist
  background $colors-white
  display grid
  min-height: 100vh;

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
  @media $breakpoints-spec.lg-and-up
    color $colors-white
    font-size 64px
    font-weight bold

.artist-info
  display grid
  grid-gap 32px
  overflow auto
  padding 32px

  @media $breakpoints-spec.lg-and-up
    padding 64px

.releases
  display grid
  grid-gap 16px
  grid-template-columns 1fr 1fr 1fr 1fr
</style>
