<template lang="pug">
div
  contacts-section
</template>

<script>
import ContactsSection from "@/components/sections/ContactsSection.vue";

export default {
  components: {
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
