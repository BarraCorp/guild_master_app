<template>
  <div
    :class="[
      ...classes,
      { 'inline-flex': !block },
      { 'bg-red-700 hover:bg-red-800 font-square': normal },
      { 'text-white': dark },
      { 'text-black': !dark },
      { 'p-2': !icon },
      { 'w-8': icon },
      { 'h-8': icon },
      { flex: icon },
      { 'justify-center': icon },
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
    icon: {
      type: Boolean,
      default: false,
    },
    normal: Boolean,
    dark: Boolean,
  },
  data: () => ({
    classes: ['items-center', 'cursor-pointer', 'rounded-lg', 'group', 'sidebar-tbutton'],
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
