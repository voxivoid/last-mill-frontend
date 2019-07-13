<template lang="pug">
.release-thumbnail
  img(:src="release.image")
  .title {{ release.title }}
</template>

<script>
export default {
  props: {
    release: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.release-thumbnail
  display grid
  grid-gap 8px
  cursor pointer

img
  width 100%

.title
  text-align center
  font-weight bold

</style>
