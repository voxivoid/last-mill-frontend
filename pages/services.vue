<template lang="pug">
simplebar
  .services
    h1 {{ $t("services") }}

    template(v-for="serviceType in Object.keys(services)")
      h2(:key="serviceType") {{ $t(serviceType) }}
      .services-group
        .service(v-for="service in services[serviceType]" :key="service.id")
          h3 {{ service[`name_${locale}`] }}
          p {{ service[`description_${locale}`] }}
</template>

<script>
import simplebar from "simplebar-vue";

import LocaleHelpers from "@/mixins/helpers.locale";

import services from "@/mocks/services";

export default {
  components: {
    simplebar,
  },
  mixins: [LocaleHelpers],
  data() {
    return {
      services,
    };
  },

  i18n: {
    messages: {
      en: {
        services: "Services",
        audio: "Audio",
        video: "Video",
      },
      pt: {
        services: "Serviços",
        audio: "Áudio",
        video: "Vídeo",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

h2
  text-align center

.services
  color $colors-white
  background $colors-black
  padding 32px

  @media $breakpoints-spec.lg-and-up
    padding 64px

.services-group
  display grid
  grid-template-columns 1fr
  column-gap 32px
  row-gap 8px

  @media $breakpoints-spec.md-and-up
    grid-template-columns repeat(2, 1fr)

  @media $breakpoints-spec.lg-and-up
    grid-template-columns repeat(4, 1fr)

.service
  text-align center
</style>
