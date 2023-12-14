<template>
  <div :class="tableClassRaw">
    <TLoadingBar v-if="loading" />
    <table :class="['w-full', ...tableClassComp]">
      <thead :class="[...trClassesRaw, ...trClassesComp]">
        <tr>
          <th scope="col" class="px-6 py-3" v-for="(item, i) in rawHeader" :key="i" :class="item.classes">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :class="[...tdClassesRaw, ...tdClassesComp]" v-for="(item, i) in raw" :key="i">
          <td class="px-6 py-4" v-for="(head, j) in rawHeader" :key="j" :class="head.classes">
            <slot :name="`item-${head.value}`" v-bind="{ item, head }">{{ item[head.value] }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    raw: [],
    rawHeader: [],
    tableClassRaw: ['relative', 'rounded-lg', 'border', 'w-full', 'text-sm'],
    trClassesRaw: ['text-gray-800', 'uppercase', 'border-b', 'text-xs'],
    tdClassesRaw: ['border-b'],
  }),

  computed: {
    tableClassComp() {
      if (this.tableClass) {
        return this.tableClass
      }
      return []
    },
    trClassesComp() {
      if (this.trClasses) {
        return this.trClasses
      }
      return []
    },
    tdClassesComp() {
      if (this.tdClasses) {
        return this.tdClasses
      }
      return []
    },
  },

  props: {
    headers: Array,
    items: Array,
    loading: { type: Boolean, default: false },
    trClasses: {
      type: Array,
      default: null,
    },
    tdClasses: {
      type: Array,
      default: null,
    },
  },
  watch: {
    items(newVal) {
      this.raw = newVal
    },
    headers(newVal) {
      this.rawHeader = newVal
    },
  },
  mounted() {
    this.raw = this.items
    this.rawHeader = this.headers
  },
}
</script>
