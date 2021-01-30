<template lang="pug">
section.contacts(id="contacts")
  .section-container.max-width
    h2 {{ $t("contacts") }}

    .contacts-container
      div
        div
          h3 {{ $t("email") }}
          a(:href="`mailto:${contacts.email}`" rel="noopener noreferrer") {{ contacts.email }}

        div
          h3 {{ $t("phones") }}
          .content
            div(v-for="phone in contacts.phones" :key="phone")
              a(:href="`tel:${phone}`" rel="noopener noreferrer") {{ phone }}

        div
          h3 {{ $t("socialNetworks") }}
          .social-networks
            template(v-for="socialNetwork in socialNetworks")
              a(v-if="contacts[socialNetwork.id]" :key="socialNetwork.id" :href="contacts[socialNetwork.id]" target="_blank" rel="noopener noreferrer")
                i.fab(:class="socialNetwork.icon")

      div
        h3 {{ $t("address") }}
        .content
          a(:href="contacts.addressUrl" target="_blank" rel="noopener noreferrer") {{ contacts.address }}
          iframe.map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.219734870382!2d-9.23211488425285!3d38.75866387959223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd0b829baa31%3A0xdcba8661ec07ef9b!2sLast%20Mill!5e0!3m2!1sen!2spt!4v1608739396766!5m2!1sen!2spt" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0")
</template>

<script>
import SocialNetworks from "@/mixins/helpers.socialNetworks";

import contacts from "@/mocks/contacts";

export default {
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

.contacts
  display grid
  align-content center
  justify-content center

.contacts-container
  display flex
  flex-wrap wrap
  gap 8px

.content
  display grid
  grid-gap 8px

.social-networks
  display grid
  grid-auto-flow column
  grid-gap 16px
  grid-auto-columns max-content

  a
    text-decoration none

  .fab
    color $colors-black
    font-size 24px

.map
  max-width 100%
  filter grayscale()
</style>
