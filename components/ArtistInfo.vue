<template lang="pug">
.artist-info
  section
    h1 {{ $t("biography") }}
    p {{ artist[`bio_${locale}`] }}

  section
    h1 {{ $t("socialNetworks") }}
    .social-networks
      template(v-for="socialNetwork in socialNetworks")
        a(v-if="artist[socialNetwork.id]" :key="socialNetwork.id" :href="artist[socialNetwork.id]" target="_blank" rel="noopener noreferrer")
          i(:class="socialNetwork.icon")

  section
    h1 {{ $t("releases") }}
    .releases
      release-thumbnail(v-for="release in artist.releases" :key="release.title" :release="release")
</template>

<script>
import LocaleHelpers from "@/mixins/helpers.locale";
import SocialNetworks from "@/mixins/helpers.socialNetworks";

import ReleaseThumbnail from "@/components/ReleaseThumbnail.vue";

export default {
  components: {
    ReleaseThumbnail,
  },
  mixins: [
    LocaleHelpers,
    SocialNetworks,
  ],
  props: {
    artist: {
      type: Object,
      required: true,
    },
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
  font-weight bold
  margin-bottom 16px

p
  white-space pre-wrap

.artist-info
  display grid
  grid-gap 64px
  overflow auto

.releases
  display grid
  grid-gap 32px
  grid-template-columns 1fr

  @media $breakpoints-spec.md-and-up
    grid-template-columns repeat(2, 1fr)

  @media $breakpoints-spec.lg-and-up
    grid-template-columns repeat(3, 1fr)

.social-networks
  display grid
  grid-auto-flow column
  grid-gap 32px
  width max-content

  a
    text-decoration none

  i
    color $colors-white
    font-size 32px
</style>
