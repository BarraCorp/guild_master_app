<template>
  <div
    :class="[
      ...classes,
      { 'w-1/12': t1 },
      { 'w-2/12': t2 },
      { 'w-3/12': t3 },
      { 'w-4/12': t4 },
      { 'w-5/12': t5 },
      { 'w-6/12': t6 },
      { 'w-7/12': t7 },
      { 'w-8/12': t8 },
      { 'w-9/12': t9 },
      { 'w-10/12': t10 },
      { 'w-11/12': t11 },
      { 'w-full': t12 },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    t1: Boolean,
    t2: Boolean,
    t3: Boolean,
    t4: Boolean,
    t5: Boolean,
    t6: Boolean,
    t7: Boolean,
    t8: Boolean,
    t9: Boolean,
    t10: Boolean,
    t11: Boolean,
    t12: Boolean,
  },
  data: () => ({
    classes: ['p-2'],
  }),
}
</script>

<style></style>
