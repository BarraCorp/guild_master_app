<template>
  <i :class="[{ 'fa-solid': solid }, { 'fa-regular': regular }, 'mx-1', name, { 'cursor-pointer': button }]" :style="`color: ${color}`"></i>
</template>

<script>
export default {
  props: {
    name: String,
    color: { type: String, default: 'inherit' },
    solid: { type: Boolean, default: false },
    regular: { type: Boolean, default: false },
    button: { type: Boolean, default: false },
  },
}
</script>

<style></style>
