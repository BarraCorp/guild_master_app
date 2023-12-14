<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['flex-grow'],
  }),
}
</script>
