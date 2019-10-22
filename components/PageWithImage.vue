<template lang="pug">
component(:is="breakpoints.sizes.lg_and_up ? 'div' : 'simplebar'")
  .page
    page-image.image(:title="title" :imgSrc="imgSrc")
    component(:is="breakpoints.sizes.lg_and_up ? 'simplebar' : 'div'" :class="{'page-scroll': breakpoints.sizes.lg_and_up}")
      .content
        slot
</template>

<script>
import { mapState } from "vuex";

import simplebar from "simplebar-vue";

import PageImage from "@/components/PageImage.vue";

export default {
  components: {
    simplebar,
    PageImage,
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      breakpoints: state => state.breakpoints,
    }),
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.page
  color $colors-white
  background $colors-black
  display grid

  @media $breakpoints-spec.md-and-down
    grid-template-rows 200px 1fr

    .image
      position sticky
      top -128px
      border-bottom 1px solid $colors-white

  @media $breakpoints-spec.lg-and-up
    grid-template-columns 1fr 2fr

.content
  padding 32px

  @media $breakpoints-spec.lg-and-up
    padding 64px
</style>
