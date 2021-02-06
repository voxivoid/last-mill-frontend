<template>
  <section
    id="pricing"
    class="py-16 px-8"
  >
    <div class="container mx-auto text-center">
      <section-heading
        class="mb-6"
        :title="$t('title')"
        light
      />
      <div class="mb-8">
        <h2 class="mb-6 uppercase text-xl text-white">
          {{ $t('music') }}
        </h2>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <pricing-card
            v-for="pack in musicPacks"
            :key="pack.title"
            :title="pack.title"
            :price="pack.price"
            :description="pack.description"
          />
        </div>
      </div>

      <div class="mb-8">
        <h2 class="mb-6 uppercase text-xl text-white">
          {{ $t('video') }}
        </h2>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <pricing-card
            v-for="pack in videoPacks"
            :key="pack.title"
            :title="pack.title"
            :price="pack.price"
            :description="pack.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from "@/components/SectionHeading.vue";
import PricingCard from "./PricingCard.vue";

export default {
  components: {
    SectionHeading,
    PricingCard,
  },
  i18n: {
    messages: {
      us: {
        title: "Pricing",
        music: "Music",
        video: "Video",
        videoPacks: {
          clip: {
            title: "MUSIC VIDEO PACK",
            description: "Script, Recording, Directing. Editing, Coloring + 2 revisions\n\nExtra revision – 30€\n\n* Production expenses non included",
          },
          show: {
            title: "SHOW PACK",
            description: "Recording, Editing, Coloring + 1 revision\n\nExtra revision – 30€\n\n* Production expenses non included",
          },
          advertising: {
            title: "ADVERTISING PACK",
            description: "Script, Recording, Directing. Editing, Coloring, Audio + 2 revisions\n\nExtra revision – 100€\n\n* Production expenses non included",
          },
          individual: {
            title: "INDIVIDUAL PACKS",
            description: "Recording (day rate) – 100€\n\nEditing + 2 revisions – 350€ (Extra revision– 30,00€)\n\nColoring + 2 revisions – 350€ (Extra revision – 30€)\n\n* Production expenses non included",
          },
        },
      },
      pt: {
        title: "Preços",
        music: "Música",
        video: "Vídeo",
        musicPacks: {
          single: {
            title: "Pack single",
            description: "Gravação, produção, mistura e masterização.\n\n* Todos os productos podem ser adequiridos à unidade.",
          },
          ep: {
            title: "Pack EP",
            description: "Gravação, produção, mistura e masterização.\n\n*Pode incluir Distribuição Digital, CD Físico, Design de Capa e CD, Vídeo, Fotografia\n\n** Todos os productos podem ser adequiridos à unidade.",
          },
          album: {
            title: "Pack Álbum",
            description: "Gravação, produção, mistura e masterização.\n\n*Pode incluir Distribuição Digital, CD Físico, Design de Capa e CD, Vídeo, Fotografia\n\n** Todos os productos podem ser adequiridos à unidade.",
          },
          unit: {
            title: "Pack individual",
            description: "Gravação 30.75€/h (Min 2h)\n\nProdução Musical até 4min faixa – 1500€\n\nMistura – 200€ (inclui 2 revisões)\n\nRevisões extra – 50€\n\nMasterização – 8€/min",
          },
        },
        videoPacks: {
          clip: {
            title: "PACK VIDEOCLIPE",
            description: "Guião, Gravação, Realização, Edição, Coloração + 2 revisões\n\nRevisão extra – 30€\n\n* Despesas de produção não incluídas",
          },
          show: {
            title: "PACK ESPECTÁCULO",
            description: "Gravação, Edição, Coloração + 1 revisão\n\nRevisão extra – 30€\n\n* Despesas de produção não incluídas",
          },
          advertising: {
            title: "PACK PUBLICIDADE",
            description: "Guião, Gravação, Realização, Edição, Coloração, Áudio + 2 revisões\n\nRevisão extra – 100€\n\n* Despesas de produção não incluídas",
          },
          individual: {
            title: "PACK INDIVIDUAL",
            description: "Gravação (dia) – 100€\n\nEdição + 2 revisões – 350€ (Revisão extra – 30€)\n\nColoração + 2 revisões – 350€ (Revisão extra – 30€)\n\n* Despesas de produção não incluídas",
          },
        },
      },
    },
  },
  data() {
    return {
      musicPacks: [
        {
          title: this.$t("musicPacks.single.title"),
          price: 1000,
          description: this.$t("musicPacks.single.description"),
        },
        {
          title: this.$t("musicPacks.ep.title"),
          price: 4500,
          description: this.$t("musicPacks.ep.description"),
        },
        {
          title: this.$t("musicPacks.album.title"),
          price: 6500,
          description: this.$t("musicPacks.album.description"),
        },
        {
          title: this.$t("musicPacks.unit.title"),
          price: undefined,
          description: this.$t("musicPacks.unit.description"),
        },
      ],
      videoPacks: [
        {
          title: this.$t("videoPacks.clip.title"),
          price: 1300,
          description: this.$t("videoPacks.clip.description"),
        },
        {
          title: this.$t("videoPacks.show.title"),
          price: 200,
          description: this.$t("videoPacks.show.description"),
        },
        {
          title: this.$t("videoPacks.advertising.title"),
          price: 3500,
          description: this.$t("videoPacks.advertising.description"),
        },
        {
          title: this.$t("videoPacks.individual.title"),
          price: undefined,
          description: this.$t("videoPacks.individual.description"),
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
section {
  background: #777779;
}
</style>
