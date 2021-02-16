<template>
  <a
    :href="href"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img
      class="object-cover"
      :src="imgSrc"
      :alt="alt"
    >
  </a>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
