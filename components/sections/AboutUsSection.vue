<template>
  <section
    id="about-us"
    class="py-16 px-8"
  >
    <div class="container mx-auto text-white">
      <section-heading
        class="mb-6"
        :title="$t('title')"
        light
      />
      <p class="text-center whitespace-pre-wrap">
        {{ $t('content') }}
      </p>
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
        title: "About us",
        content: "Last Mill was founded in 2017 by Koopper, Fontoura FX and Márcio Oliveira Monteiro.\n\nWe are based on the pillars of creativity, professionalism, integrity, flexibility and transparency. Social responsability and sustainability are an essential part of our development. Pursuing to establish a positive position and relationship with our society.\n\nExternal Production (Portfolio) seeks to meet our customer’s desire. In-house production (Entertainment) seeks to create and export innovative and differentiated content.",

      },
      pt: {
        title: "Sobre nós",
        content: "A Last Mill foi fundada em 2017 por Koopper, Fontoura FX e Márcio Oliveira Monteiro.\n\nBaseamo-nos nos pilares de criatividade, profissionalismo, integridade, flexibilidade e transparência. A responsabilidade social e sustentabilidade são parte essencial do nosso desenvolvimento, procurando estabelecer uma posição e relação positiva com a nossa sociedade.\n\nA produção externa (Portfólio) procura ir de encontro ao desejo do nosso cliente. A produção interna (Entretenimento) procura criar e expor conteúdo inovador e diferenciado.",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
section {
  background: #777779;
}
</style>
