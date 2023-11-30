<template>
  <div class="border focus:border-indigo-800 hover:border-indigo-600 bg-white text-black rounded-lg w-full relative">
    <div class="border-none focus:outline-none w-full p-1 m-1 flex">
      <input
        class="border-none focus:outline-none flex-grow cursor-pointer fake-select"
        v-model="search"
        :placeholder="rawPlaceholder"
        @click="open = !open"
      />
      <div class="px-2">
        <TIcon :name="[{ 'fa-angles-down': !open }, { 'fa-angles-up': open }, 'fa-sm']" regular @click="open = !open" />
        <TIcon name="fa-user fa-xmark" v-if="raw" @click="clear" button regular />
      </div>
    </div>
    <Transition>
      <TCard class="w-full shadow-md absolute mt-1 top-full z-10 overflow-y-scroll max-h-40" v-if="open">
        <div
          v-for="(item, i) in computedItems"
          :key="i"
          class="hover:bg-gray-50 border-b p-2 cursor-pointer"
          @click="setValue(item)"
        >
          <span>
            {{ getText(item) }}
          </span>
        </div>
      </TCard>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    placeholder: {
      type: String,
      default: '',
    },
    items: Array,
    itemText: String,
    itemValue: String,
    change: Function,
  },
  data: () => ({
    raw: null,
    rawText: '',
    open: false,
    search: null,
    rawPlaceholder: null,
  }),
  computed: {
    computedItems() {
      if (!this.search) {
        return this.items
      }
      return this.items.filter((el) => {
        const name = this.getText(el)
        return name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  watch: {
    raw() {
      this.$emit('update:modelValue', this.raw)
      this.$emit('change', this.change)
    },
    modelValue(newVal) {
      if (newVal != this.raw) {
        this.raw = newVal
        this.defineItem()
      }
    },
  },
  methods: {
    setValue(item) {
      if (typeof item === 'object' && item !== null) {
        this.raw = item[this.itemValue]
        this.rawText = `${item[this.itemValue]} - ${item[this.itemText]}`
      } else {
        this.raw = item
        this.rawText = item
      }
      this.rawPlaceholder = this.rawText
      this.search = null
      this.open = false
    },
    getText(item) {
      if (typeof item === 'object' && item !== null) {
        return item[this.itemText]
      } else {
        return item
      }
    },
    clear() {
      this.raw = null
      this.search = null
      this.rawText = this.placeholder
    },
    defineItem() {
      const started = this.items.find((el) => {
        if (this.itemValue) {
          return el[this.itemValue] === this.modelValue
        } else {
          return el === this.modelValue
        }
      })
      this.setValue(started)
    },
  },
  mounted() {
    this.defineItem()
  },
}
</script>

<style>
.fake-select::placeholder {
  color: #000;
}
</style>
