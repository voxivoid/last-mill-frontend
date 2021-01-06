<template lang="pug">
.service-box
  .head(:style="{ background: color }")
    .title.heading {{ title }}
    .price.heading.h1 {{ price }} €

  .body
    .body-entry(v-for="entry in body" :key="entry") {{ entry }}

  .footer(:style="{ background: color }")
    button.heading(@click="contactUs") {{ $t("contact") }}
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    body: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  i18n: {
    messages: {
      us: {
        contact: "Contact us",
      },
      pt: {
        contact: "Contacta-nos",
      },
    },
  },
  methods: {
    contactUs() {
      document.querySelector("#contacts").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.service-box
  display flex
  flex-direction column
  width 300px
  box-shadow 0px 0px 10px 1px $colors-light-grey

.head
  display grid
  grid-template-rows 1fr 50px
  align-items center
  justify-content center
  height 150px
  padding 16px
  text-align center
  color $colors-white
  font-weight bold

.body
  border 1px solid $colors-light-grey

.body-entry
  padding 16px 8px

  &:not(:last-child)
    border-bottom 1px solid $colors-light-grey

.footer
  text-align center

  button
    color $colors-white
    padding 16px
    width 100%
    height 100%
    background none
    border none
    cursor pointer
</style>
