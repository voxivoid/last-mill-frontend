<template>
  <div>
    <menu-mobile />
    <about-us-section />
    <portfolio-section />
    <pricing-section />
    <contacts-section />
    <footer-section />
  </div>
</template>

<script>
import AboutUsSection from "@/components/sections/AboutUsSection.vue";
import PortfolioSection from "@/components/sections/PortfolioSection.vue";
import PricingSection from "@/components/sections/PricingSection/index.vue";
import ContactsSection from "@/components/sections/ContactsSection/index.vue";
import MenuMobile from "@/components/MenuMobile.vue";
import FooterSection from "../components/sections/FooterSection.vue";

export default {
  components: {
    AboutUsSection,
    PortfolioSection,
    PricingSection,
    ContactsSection,
    MenuMobile,
    FooterSection,
  },
};
</script>


<style lang="stylus" scoped>

</style>
