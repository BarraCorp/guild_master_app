<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['container', 'mx-auto'],
  }),
}
</script>

<style></style>
