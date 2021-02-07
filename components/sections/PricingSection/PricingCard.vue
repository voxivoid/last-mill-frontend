<template>
  <div class="pricing-card py-12 px-10 grid gap-4">
    <h3 class="text-2xl uppercase font-heading leading-none">
      {{ title }}
    </h3>

    <div
      v-if="price"
      class="leading-none mb-4"
    >
      <span class="text-xs">{{ $t('from') }}</span>
      <div class="flex items-center justify-center">
        <span class="mr-1 text-4xl font-bold">{{ price }}</span>
        <span>€</span>
      </div>
    </div>
    <div v-else />

    <span class="text-sm text-left whitespace-pre-line">{{ description }}</span>

    <div class="text-xs text-left whitespace-pre-line leading-4">
      <div
        v-for="note in notes"
        :key="note"
      >
        {{ note }}
      </div>
    </div>


    <el-button
      type="primary"
      @click="contactUs"
    >
      {{ $t("contact") }}
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: undefined,
    },
    description: {
      type: String,
      required: true,
    },
    notes: {
      type: Array,
      default: () => [],
    },
  },
  i18n: {
    messages: {
      us: {
        contact: "Contact us",
        from: "from",
      },
      pt: {
        contact: "Contacta-nos",
        from: "desde",
      },
    },
  },
  methods: {
    contactUs() {
      document.querySelector("#contacts").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.pricing-card {
  background: #ededed;
  grid-template-rows: auto auto 1fr auto;
  min-height: 29.75rem;
}
</style>
