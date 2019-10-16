<template lang="pug">
simplebar
  .services
    h1 {{ $t("services") }}
</template>

<script>
import simplebar from "simplebar-vue";

import aboutUs from "@/mocks/services";

export default {
  components: {
    simplebar,
  },
  data() {
    return {
      aboutUs,
    };
  },

  i18n: {
    messages: {
      en: {
        services: "Services",
      },
      pt: {
        services: "Serviços",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.services
  color $colors-white
  background $colors-black
  padding 32px

  @media $breakpoints-spec.lg-and-up
    padding 64px
</style>
