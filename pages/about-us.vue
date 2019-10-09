<template lang="pug">
.about-us.simplebar
  h1 {{ $t("aboutUs") }}
  p {{ aboutUs[locale] }}
</template>

<script>
import simplebar from "simplebar-vue";

import LocaleHelpers from "@/mixins/helpers.locale";

import aboutUs from "@/mocks/about-us";

export default {
  components: {
    simplebar,
  },
  mixins: [LocaleHelpers],
  data() {
    return {
      aboutUs,
    };
  },

  i18n: {
    messages: {
      en: {
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

.about-us
  color $colors-white
  background $colors-black
  padding 32px

  @media $breakpoints-spec.lg-and-up
    padding 64px
</style>
