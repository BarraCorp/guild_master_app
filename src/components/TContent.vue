<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['flex-grow', 'tcontent'],
  }),
}
</script>

<style>
.tcontent {
  background: var(--content-bg-color);
}
</style>
