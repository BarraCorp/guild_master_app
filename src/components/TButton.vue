<template>
  <div :class="[...classes, { 'inline-flex': !block }]" @click="action">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    classes: ['items-center', 'p-2', 'cursor-pointer', 'text-white', 'rounded-lg', 'group', 'sidebar-tbutton'],
  }),
  methods: {
    action() {
      if (this.to) {
        if (this.to.includes('/')) {
          this.$router.push({ path: this.to })
        } else {
          this.$router.push({ name: this.to })
        }
      }
    },
  },
}
</script>

<style>
.sidebar-tbutton {
  background: var(--button-color);
}
.sidebar-tbutton:hover {
  background: var(--button-hover-color);
}
</style>
