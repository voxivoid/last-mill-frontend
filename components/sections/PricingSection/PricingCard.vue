<template>
  <div class="pricing-card py-12 px-10 grid gap-4">
    <h3 class="text-xl uppercase">
      {{ title }}
    </h3>

    <div v-if="price">
      <span class="text-xs text-left">{{ $t('from') }}</span>
      <div class="flex items-center justify-center">
        <span class="mr-2 text-4xl">{{ price }}</span>
        <span>€</span>
      </div>
    </div>
    <div v-else />

    <span class="text-sm text-left whitespace-pre-line">{{ description }}</span>

    <button
      class="self-end h-12 px-4 rounded"
      @click="contactUs"
    >
      {{ $t("contact") }}
    </button>
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
}

button {
 background: #13ccc6;
 color: #ffffff;
}
</style>
