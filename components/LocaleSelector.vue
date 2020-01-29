<template lang="pug">
.language-selector
  country-flag.flag(:country="availableLocale" size="normal" @click.native="updateLocale")
</template>

<script>
import CountryFlag from "vue-country-flag";

import LocaleHelpers from "@/mixins/helpers.locale";

export default {
  components: {
    CountryFlag,
  },
  mixins: [
    LocaleHelpers,
  ],
  computed: {
    availableLocale() {
      if (this.locale === "pt") {
        return "us";
      }

      return "pt";
    },
  },
  methods: {
    updateLocale() {
      this.$router.push(this.switchLocalePath(this.availableLocale));
    },
  },
};
</script>

<style lang="stylus" scoped>
.flag
  cursor pointer
</style>
