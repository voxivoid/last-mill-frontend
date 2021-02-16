<template lang="pug">
.language-selector
  country-flag.flag(:country="availableLocale" size="normal" @click.native="updateLocale")
</template>

<script>
import CountryFlag from "vue-country-flag";


export default {
  components: {
    CountryFlag,
  },
  computed: {
    availableLocale() {
      if (this.$i18n.locale === "pt") {
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
