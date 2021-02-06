<template>
  <div class="section-heading grid gap-2 items-center justify-center text-center ">
    <h1 class="uppercase text-2xl">
      {{ title }}
    </h1>
    <div class="grid grid-flow-col gap-2 items-center justify-center">
      <div class="line" />
      <div class="text-3xs">
        ⬤ ⬤
      </div>
      <div class="line" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/breakpoints'
@import '~assets/colors'

.line {
  height: 1px;
  width: 2rem;
  background: $colors-black;
}
</style>
