<template>
  <nav :class="classes">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  data: () => ({
    classes: ['w-full', 'h-16', 'shadow-md'],
  }),
}
</script>

<style></style>
