<template>
  <div :class="[{ 'bg-red-600': !status }, { 'bg-green-600': status }, 'h-4', 'w-4', 'rounded-full']"></div>
</template>

<script>
export default {
  props: {
    status: Boolean,
  },
}
</script>

<style></style>
