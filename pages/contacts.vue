<template lang="pug">
page-with-image(:title="$t('contacts')" :imgSrc="'TODO:'")
  .contacts-details
    div
      h2 {{ $t("email") }}
      p {{ contacts.email }}

    div
      h2 {{ $t("phones") }}
      p(v-for="phone in contacts.phones" :key="phone") {{ phone }}

    div
      h2 {{ $t("address") }}
      p {{ contacts.address }}

  .social-networks
</template>

<script>
import PageWithImage from "@/components/PageWithImage.vue";

import contacts from "@/mocks/contacts";

export default {
  components: {
    PageWithImage,
  },
  data() {
    return {
      contacts,
    };
  },

  i18n: {
    messages: {
      en: {
        contacts: "Contacts",
        email: "Email",
        phones: "Phones",
        address: "Address",
      },
      pt: {
        contacts: "Contactos",
        email: "Email",
        phones: "Telefones",
        address: "Morada",
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

.contacts-details
  display grid
  grid-template-columns 1fr
  text-align center

  @media $breakpoints-spec.md-and-up
    grid-template-columns repeat(3, 1fr)
</style>
