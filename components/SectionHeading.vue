<template>
  <div class="section-heading grid gap-2 items-center justify-center text-center">
    <h1 class="uppercase text-2xl font-bold">
      {{ title }}
    </h1>
    <div class="grid grid-flow-col gap-2 items-center justify-center">
      <div class="line" />
      <div class="text-2xs">
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
  height: 2px;
  width: 2rem;
  background: $colors-black;
}
</style>
