<template>
  <div :class="[...classes, { 'items-center': center }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['flex', 'flex-wrap', 'w-full'],
  }),
  props: {
    center: Boolean,
  },
}
</script>
