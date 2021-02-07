<template>
  <div>
    <menu-mobile />
    <about-us-section />
    <featured-work-section />
    <pricing-section />
    <contacts-section />
    <footer-section />
  </div>
</template>

<script>
import AboutUsSection from "@/components/sections/AboutUsSection.vue";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection/index.vue";
import PricingSection from "@/components/sections/PricingSection/index.vue";
import ContactsSection from "@/components/sections/ContactsSection/index.vue";
import MenuMobile from "@/components/MenuMobile.vue";
import FooterSection from "../components/sections/FooterSection.vue";

export default {
  transition: "know-more",
  components: {
    AboutUsSection,
    FeaturedWorkSection,
    PricingSection,
    ContactsSection,
    MenuMobile,
    FooterSection,
  },
};
</script>


<style lang="stylus" scoped>
  .know-more-enter-active, .know-more-leave-active { transition: opacity .5s; }
  .know-more-enter, .know-more-leave-active { opacity: 0; }
</style>
