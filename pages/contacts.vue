<template lang="pug">
simplebar
  .contacts
    h1 {{ $t("contacts") }}
</template>

<script>
import simplebar from "simplebar-vue";

import aboutUs from "@/mocks/contacts";

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
        contacts: "Contacts",
      },
      pt: {
        contacts: "Contactos",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.contacts
  color $colors-white
  background $colors-black
  padding 32px

  @media $breakpoints-spec.lg-and-up
    padding 64px
</style>
