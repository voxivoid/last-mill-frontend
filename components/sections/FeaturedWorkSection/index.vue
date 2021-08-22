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
          :alt="work.alt"
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
          imgSrc: "/works/mike-da-gaita-o-ze-da-tasca.jpg",
          href: "https://youtu.be/OyF8zcOIbVk",
          alt: "Mike da Gaita - O Zé da Tasca",
        },
        {
          imgSrc: "/works/daniel-sousa-cana-verde-do-alto-minho.jpg",
          href: "https://youtu.be/UsM9hBw1XZQ",
          alt: "Daniel Sousa - Cana Verde do Alto Minho",
        },
        {
          imgSrc: "/works/daniel-sousa-mentir-e-feio.jpg",
          href: "https://youtu.be/cKDRymKC1EY",
          alt: "Daniel Sousa - Mentir é feio",
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
