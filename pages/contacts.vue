<template lang="pug">
page-with-image(:title="$t('contacts')" imgSrc="/pages/contacts.jpg")
  .contacts-details
    div
      h2 {{ $t("email") }}
      a(:href="`mailto:${contacts.email}`" rel="noopener noreferrer") {{ contacts.email }}

    div
      h2 {{ $t("phones") }}
      p(v-for="phone in contacts.phones" :key="phone")
        a(:href="`tel:${phone}`" rel="noopener noreferrer") {{ phone }}

    div
      h2 {{ $t("socialNetworks") }}
      .social-networks
        template(v-for="socialNetwork in socialNetworks")
          a(v-if="contacts[socialNetwork.id]" :key="socialNetwork.id" :href="contacts[socialNetwork.id]" target="_blank" rel="noopener noreferrer")
            i.fab(:class="socialNetwork.icon")
</template>

<script>
import PageWithImage from "@/components/PageWithImage.vue";

import SocialNetworks from "@/mixins/helpers.socialNetworks";

import contacts from "@/mocks/contacts";


export default {
  components: {
    PageWithImage,
  },
  mixins: [
    SocialNetworks,
  ],
  data() {
    return {
      contacts,
    };
  },
  i18n: {
    messages: {
      us: {
        contacts: "Contacts",
        email: "Email",
        phones: "Phones",
        address: "Address",
        socialNetworks: "Social networks",
      },
      pt: {
        contacts: "Contactos",
        email: "Email",
        phones: "Telefones",
        address: "Morada",
        socialNetworks: "Redes sociais",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.contacts-details
  display grid
  grid-gap 32px

.social-networks
  display grid
  grid-auto-flow column
  grid-gap 16px
  grid-auto-columns max-content

  a
    text-decoration none

  .fab
    color $colors-white
    font-size 24px
</style>
