<template>
  <div class="text-white h-full">
    <video
      class="h-full object-cover"
      width="100%"
      muted="muted"
      autoplay="autoplay"
      loop="loop"
      playsinline="playsinline"
      src="/videos/home_720p.mp4"
    />

    <nuxt-link
      class="z-10 fixed bottom-0 right-0 p-8 text-md md:text-2xl text-white"
      to="/know-more"
    >
      Clica para caminhares connosco
      <i class="fas fa-chevron-right" />
    </nuxt-link>

    <logo-horizontal class="z-10 fixed top-0 p-8 max-w-2xs md:max-w-md mb-4" />
  </div>
</template>

<script>
import LogoHorizontal from "@/components/svgs/LogoHorizontal.vue";

export default {
  components: {
    LogoHorizontal,
  },
  i18n: {
    messages: {
      us: {
        slogan: "The path between dream and reality",
      },
      pt: {
        slogan: "O caminho entre o sonho e a realidade",
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.logo {
  position: fixed;
  top: 1rem;
  left: 1rem;
}
</style>
