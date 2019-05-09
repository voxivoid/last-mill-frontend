<template lang="pug">
.menu
  menu-toggle(:isActive="isOpen" @click.native="isOpen = !isOpen")
  nuxt-link(v-for="page in pages" :key="page.to" :to="page.to")
    span.placeholder {{ page.name }}
    span.base {{ page.name }}
    span.hover {{ page.name }}
</template>

<script>
import MenuToggle from "@/components/MenuToggle.vue";

export default {
  components: {
    MenuToggle,
  },

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
.menu
  display grid
  align-content center
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
    position relative
    overflow hidden

    &:hover
      .base, .hover
        transition all .3s
        transform translateY(100%)

.base
  position absolute

.hover
  position absolute
  top -100%
  color red

.placeholder
  visibility hidden
</style>
