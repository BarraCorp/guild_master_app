<template>
  <div
    :class="[
      ...classes,
      { 'inline-flex': !block },
      { 'bg-indigo-800 hover:bg-indigo-900': normal },
      { 'text-white': dark },
      { 'text-black': !dark },
    ]"
    @click="action"
  >
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
    normal: Boolean,
    dark: Boolean,
  },
  data: () => ({
    classes: ['items-center', 'p-2', 'cursor-pointer', 'rounded-lg', 'group', 'sidebar-tbutton'],
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
