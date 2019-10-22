<template lang="pug">
page-with-image(:title="$t('releases')" :imgSrc="'TODO:'")
  .releases
    release-thumbnail(v-for="release in releases" :key="release.title" :release="release")
</template>

<script>
import PageWithImage from "@/components/PageWithImage.vue";
import ReleaseThumbnail from "@/components/ReleaseThumbnail.vue";

import releases from "@/mocks/releases";

export default {
  components: {
    PageWithImage,
    ReleaseThumbnail,
  },
  data() {
    return {
      releases: releases.sort((a, b) => new Date(b.date) - new Date(a.date)),
    };
  },
  i18n: {
    messages: {
      en: {
        releases: "Releases",
      },
      pt: {
        releases: "Portfolio",
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

.releases
  display grid
  grid-gap 32px
  grid-template-columns 1fr

  @media $breakpoints-spec.lg-and-up
    grid-template-columns 1fr 1fr 1fr 1fr
</style>
