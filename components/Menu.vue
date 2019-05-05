<template lang="pug">
.menu
  nuxt-link(v-for="page in pages" :key="page.to" :to="page.to")
    span {{ page.name }}
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          name: this.$t("aboutUs"),
          to: "/about-us",
        },
        {
          name: this.$t("artists"),
          to: "/artists",
        },
        {
          name: this.$t("portfolio"),
          to: "/portfolio",
        },
        {
          name: this.$t("services"),
          to: "/services",
        },
        {
          name: this.$t("contacts"),
          to: "/contacts",
        },
      ],
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
.menu
  display grid
  grid-auto-flow column
  grid-auto-columns max-content
  grid-gap 32px
  padding 16px 32px
  position absolute
  top 0
  left 100%
  transform-origin 0 0
  transform rotate(90deg)
  white-space nowrap

  a
    text-decoration none
    display grid
    align-content center
    justify-content center
</style>
