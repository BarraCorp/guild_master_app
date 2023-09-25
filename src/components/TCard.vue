<template>
  <div :class="classes" :style="`background: ${color};`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['rounded-lg'],
    defaultShaddow: 'shadow-sm',
  }),
  props: {
    shadow: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'var(--bg-card-default)',
    },
  },
  watch: {
    shadow() {
      if (!this.shadow && !this.classes.includes(this.defaultShaddow)) {
        this.classes.push(this.defaultShaddow)
      } else {
        this.classes.pop(this.defaultShaddow)
      }
    },
  },
  mounted() {
    if (this.shadow) {
      this.classes.push(this.defaultShaddow)
    }
  },
}
</script>
