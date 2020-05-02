<template lang="pug">
page-with-image(:title="$t('services')" imgSrc="/pages/services.jpg")
  .services
    .service-type(v-for="serviceType in Object.keys(services)")
      h2(:key="serviceType") {{ $t(serviceType) }}
      .service-type-group
        div(v-for="service in services[serviceType]" :key="service.id")
          h4 {{ service[`name_${locale}`] }}
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
      us: {
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
