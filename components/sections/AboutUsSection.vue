<template lang="pug">
section(class="grid md:grid-cols-2")
  img(class="w-full" src="~/assets/images/mic.jpg")
  div(class="p-12")
    h2(class="font-heading uppercase tracking-widest text-4xl") {{ $t('aboutUs') }}
    p(class="whitespace-pre-wrap") {{ aboutUs[locale] }}
</template>

<script>
import LocaleHelpers from "@/mixins/helpers.locale";

import aboutUs from "@/mocks/about-us";


export default {
  mixins: [LocaleHelpers],
  data() {
    return {
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

</style>
