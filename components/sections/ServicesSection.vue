<template lang="pug">
section
  .section-container.services
    service-box(
    v-for="service in services"
    :key="service.title"
    :title="service.title"
    :price="service.price"
    :color="service.color"
    :body="service.body"
  )
</template>

<script>
import ServiceBox from "@/components/ServiceBox.vue";

export default {
  components: {
    ServiceBox,
  },
  data() {
    return {
      services: [
        {
          title: "Package 1",
          price: 200,
          color: "#3c769c",
          body: [
            this.$t("test"),
            this.$t("test"),
            this.$t("test"),
            this.$t("test"),
          ],
        },
        {
          title: "Package 1",
          price: 200,
          color: "#4aa885",
          body: [
            this.$t("test"),
            this.$t("test"),
            this.$t("test"),
            this.$t("test"),
            this.$t("test"),
          ],
        },
        {
          title: "Package 1",
          price: 200,
          color: "#ed7b87",
          body: [
            this.$t("test"),
            this.$t("test"),
            this.$t("test"),
            this.$t("test"),
          ],
        },
      ],
    };
  },
  i18n: {
    messages: {
      us: {
        test: "test",
      },
      pt: {
        test: "teste",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.services
  display flex
  flex-wrap wrap
  gap 32px
  align-items center
  justify-content center
</style>
