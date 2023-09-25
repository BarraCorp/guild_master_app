<template>
  <div class="home">
    <div class="flex content-center justify-center items-center">
      <div class="w-3/12 m-2" v-for="(item, i) in 4" :key="i">
        <TCard class="p-4 h-48" shadow> </TCard>
      </div>
    </div>
    <div class="flex content-center justify-center items-center">
      <div class="w-4/12 m-2" v-for="(item, i) in 3" :key="i">
        <TCard class="p-4 h-48" shadow> </TCard>
      </div>
    </div>
    <div class="flex content-center justify-center items-center">
      <div class="w-6/12 m-2" v-for="(item, i) in 2" :key="i">
        <TCard class="p-4 h-48" shadow> </TCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TCard from '@/components/TCard.vue'

export default {
  name: 'Home',
  components: {
    TCard,
  },
}
</script>
