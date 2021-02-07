<template>
  <a
    :href="href"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img
      class="object-cover"
      :src="imgSrc"
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
  },
};
</script>

<style lang="stylus" scoped>

</style>
