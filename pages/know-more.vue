<template>
  <div>
    <about-us-section />
    <portfolio-section />
    <pricing-section />
    <contacts-section />
  </div>
</template>

<script>
import AboutUsSection from "@/components/sections/AboutUsSection.vue";
import PortfolioSection from "@/components/sections/PortfolioSection.vue";
import PricingSection from "@/components/sections/PricingSection/index.vue";
import ContactsSection from "@/components/sections/ContactsSection.vue";

export default {
  components: {
    AboutUsSection,
    PortfolioSection,
    PricingSection,
    ContactsSection,
  },
};
</script>

<style lang="stylus" scoped>

</style>
