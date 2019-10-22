<template lang="pug">
page-with-image(:title="$t('services')" :imgSrc="'TODO:'")
  .services
    .service-type(v-for="serviceType in Object.keys(services)")
      h2(:key="serviceType") {{ $t(serviceType) }}
      .service-type-group
        .service(v-for="service in services[serviceType]" :key="service.id")
          h3 {{ service[`name_${locale}`] }}
          p {{ service[`description_${locale}`] }}
</template>

<script>
import PageWithImage from "@/components/PageWithImage.vue";

import LocaleHelpers from "@/mixins/helpers.locale";

import services from "@/mocks/services";

export default {
  components: {
    PageWithImage,
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
  display grid
  grid-template-rows repeat(2, 1fr)

.service-type-group
  display grid
  grid-template-columns 1fr
  column-gap 32px
  row-gap 8px

  @media $breakpoints-spec.md-and-up
    grid-template-columns repeat(2, 1fr)

.service
  text-align center
</style>
