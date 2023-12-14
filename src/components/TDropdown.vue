<template>
  <div>
    <TIcon name="fa-bars" color="black" regular button @click="open()" />
    <!-- <div class="absolute right-8 sub-menu"> -->
    <div
      class="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute tip"
      v-if="status"
    >
      <TCard class="fh-full p-2 shadow-md">
        <slot></slot>
      </TCard>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    status: false,
  }),
  methods: {
    open() {
      this.status = !this.status
    },
  },
}
</script>

<style scoped>
.exibe-menu {
  display: relative;
}
.exibe-menu:hover .sub-menu {
  display: block;
}
.sub-menu {
  display: none;
}
</style>
