<template>
  <div :class="['section-heading grid gap-2 items-center justify-center text-center', {'text-white': light}]">
    <h1 class="uppercase text-2xl font-bold">
      {{ title }}
    </h1>
    <div class="grid grid-flow-col gap-2 items-center justify-center">
      <div :class="['line', light ? 'bg-white': 'bg-black']" />
      <div class="text-2xs">
        ⬤ ⬤
      </div>
      <div :class="['line', light ? 'bg-white': 'bg-black']" />
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
    light: {
      type: Boolean,
      default: false,
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
}
</style>
