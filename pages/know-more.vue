<template lang="pug">
div
  services-section
  photos-section
  contacts-section
</template>

<script>
import ServicesSection from "@/components/sections/ServicesSection.vue";
import PhotosSection from "@/components/sections/PhotosSection.vue";
import ContactsSection from "@/components/sections/ContactsSection.vue";

export default {
  components: {
    ServicesSection,
    PhotosSection,
    ContactsSection,
  },
  data() {
    return {
    };
  },

  i18n: {
    messages: {
      us: {

      },
      pt: {

      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.services
  display grid
  grid-template-rows repeat(2, 1fr)
  grid-gap 32px

.service-type
  @media $breakpoints-spec.md-and-up
    display grid
    grid-template-columns auto 1fr
    grid-gap 128px

.service-type-group
  display grid
</style>
