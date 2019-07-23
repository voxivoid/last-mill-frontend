<template lang="pug">
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

import ReleaseThumbnail from "@/components/ReleaseThumbnail.vue";

export default {
  components: {
    ReleaseThumbnail,
  },
  props: {
    artist: {
      type: Object,
      required: true,
    },
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
  font-family "Arial"
  font-weight bold
  margin-bottom 16px

p
  white-space pre-wrap

.artist-info
  display grid
  grid-gap 64px
  overflow auto
  padding 32px

  @media $breakpoints-spec.lg-and-up
    padding 64px

.releases
  display grid
  grid-gap 32px
  grid-template-columns 1fr

  @media $breakpoints-spec.lg-and-up
    grid-template-columns 1fr 1fr 1fr 1fr
</style>
