<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['flex', 'flex-col', 'h-screen'],
  }),
}
</script>

<style></style>
