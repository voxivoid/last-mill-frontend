<template>
  <section
    id="portfolio"
    class="py-16 px-8"
  >
    <div class="container mx-auto">
      <section-heading
        class="mb-6"
        :title="$t('title')"
      />
    </div>
  </section>
</template>

<script>
import SectionHeading from "@/components/SectionHeading.vue";

export default {
  components: {
    SectionHeading,
  },
  i18n: {
    messages: {
      us: {
        title: "Latest work",

      },
      pt: {
        title: "Últimos trabalhos",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
section {
  background: #ffffff;
}
</style>
