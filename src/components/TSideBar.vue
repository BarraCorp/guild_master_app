<template>
  <aside :class="[...classes]" aria-label="Sidebar" :style="`background: var(--bg-color);`">
    <div class="flex-grow">
      <slot name="content"></slot>
    </div>
    <div class="h-max">
      <slot name="footer"></slot>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
    classes: ['w-64', 'h-full', 'p-4', 'text-white', 'flex', 'flex-col'],
  }),
  props: {
    color: String,
    active: Boolean,
  },
  watch: {
    active() {
      this.classes = ['w-64', 'h-fit', 'p-4', 'text-white', 'flex', 'flex-col']
    },
  },
}
</script>
