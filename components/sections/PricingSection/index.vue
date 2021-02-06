<template>
  <section
    id="pricing"
    class="py-16 px-8"
  >
    <div class="container mx-auto text-center">
      <section-heading
        class="mb-6"
        :title="$t('title')"
      />
      <div class="mb-8">
        <h2 class="mb-6 uppercase text-xl">
          Música
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
        <h2 class="mb-6 uppercase text-xl">
          Video
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
        videoPacks: {
          clip: {
            title: "MUSIC VIDEO PACK",
            description: "Production expenses non included\n\nScript, Recording, Directing. Editing, Coloring + 2 revisions\n\nExtra revision – 30€",
          },
          show: {
            title: "SHOW PACK",
            description: "Production expenses non included\n\nRecording, Editing, Coloring + 1 revision\n\nExtra revision – 30€",
          },
          advertising: {
            title: "ADVERTISING PACK",
            description: "Production expenses non included\n\nScript, Recording, Directing. Editing, Coloring, Audio + 2 revisions\n\nExtra revision – 100€",
          },
          individual: {
            title: "INDIVIDUAL PACKS",
            description: "Production expenses non included\n\bRecording (day rate) – 100€\n\nEditing + 2 revisions – 350€ (Extra revision– 30,00€)\n\nColoring + 2 revisions – 350€ (Extra revision – 30€)",
          },
        },
      },
      pt: {
        title: "Preços",
        musicPacks: {
          single: {
            title: "Pack single",
            description: "Gravação, produção, mistura e masterização.\n\n* todos os productos podem ser adequiridos à unidade.",
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
            description: "Gravação 30,75/H (Min 2h)\n\nProdução Musical até 4min faixa 1500€\n\nMistura 200€ (inclui 2 revisões)\n\nRevisões extra 50€\n\nMasterização 8€/min",
          },
        },
        videoPacks: {
          clip: {
            title: "PACK VIDEOCLIPE",
            description: "Despesas de produção não incluídas\n\nGuião, Gravação, Realização, Edição, Coloração + 2 revisões\n\nRevisão extra – 30€",
          },
          show: {
            title: "PACK ESPECTÁCULO",
            description: "Despesas de produção não incluídas\n\nGravação, Edição, Coloração + 1 revisão\n\nRevisão extra – 30€",
          },
          advertising: {
            title: "PACK PUBLICIDADE",
            description: "Despesas de produção não incluídas\n\nGuião, Gravação, Realização, Edição, Coloração, Áudio + 2 revisões\n\nRevisão extra – 100€",
          },
          individual: {
            title: "PACKS INDIVIDUAIS",
            description: "Despesas de produção não incluídas\n\nGravação (dia) – 100€\n\nEdição + 2 revisões – 350€ (Revisão extra – 30,00€)\n\nColoração + 2 revisões – 350€ (Revisão extra – 30€)",
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
          price: 100,
          description: this.$t("videoPacks.individual.description"),
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
section {
  background: #c3c3c3;
}
</style>
