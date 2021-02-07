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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        <featured-work-card
          v-for="work in works"
          :key="work.href"
          :href="work.href"
          :img-src="work.imgSrc"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from "@/components/SectionHeading.vue";
import FeaturedWorkCard from "./FeaturedWorkCard.vue";

export default {
  components: {
    SectionHeading,
    FeaturedWorkCard,
  },
  i18n: {
    messages:
    {
      us: {
        title: "Featured work",

      },
      pt: {
        title: "Trabalhos em destaque",
      },
    },
  },
  data() {
    return {
      works: [
        {
          imgSrc: "/works/mike-filipe-24-agosto.jpg",
          href: "https://youtu.be/6gkcC9-JQqw",
        },
        {
          imgSrc: "/works/daniel-sousa-ser-emigrante.jpg",
          href: "https://youtu.be/K-Z91hRxLNg",
        },
        {
          imgSrc: "/works/maddo-coracao.jpg",
          href: "https://youtu.be/dtlysPSxJ5U",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
section {
  background: #ffffff;
}
</style>
