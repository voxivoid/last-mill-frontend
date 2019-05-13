<template lang="pug">
.menu
  nuxt-link(v-for="page in pages" :key="page.to" :to="page.to")
    span.placeholder {{ page.name }}
    span.base {{ page.name }}
    span.hover {{ page.name }}
</template>

<script>
import MenuHelpers from "@/mixins/helpers.menu";

export default {
  mixins: [MenuHelpers],
  data() {
    return {
      isOpen: false,
    };
  },

  i18n: {
    messages: {
      en: {
        aboutUs: "About us",
        artists: "Artists",
        portfolio: "Portfolio",
        services: "Services",
        contacts: "Contacts",
      },
      pt: {
        aboutUs: "Sobre nós",
        artists: "Artistas",
        portfolio: "Portfólio",
        services: "Serviços",
        contacts: "Contactos",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'

.menu-mobile
  display grid
</style>
