<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['flex', 'w-full', 'flex-grow'],
  }),
}
</script>

<style></style>
