<template lang="pug">
page-with-image(:title="$t('aboutUs')" :imgSrc="'TODO:'")
  p {{ aboutUs[locale] }}
</template>

<script>
import PageWithImage from "@/components/PageWithImage.vue";

import LocaleHelpers from "@/mixins/helpers.locale";

import aboutUs from "@/mocks/about-us";

export default {
  components: {
    PageWithImage,
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

</style>
