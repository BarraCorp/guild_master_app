<template>
  <div>
    <TRow class="mb-5 py-5 border-b border-yellow-800 justify-center items-center" center>
      <TCol class="flex-grow">
        <h1 class="text-4xl mx-4 font-square font-extrabold text-yellow-400">Meus Times</h1>
      </TCol>
      <TCol class="w-64" right>
        <TButton class="shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900 font-bold" @click="add()">
          <TIcon name="fa-plus" solid class="mr-2" />
          Criar Time
        </TButton>
      </TCol>
    </TRow>

    <TLoadingBar v-if="loading" />

    <TRow>
      <TCol t3 v-for="(item, i) in teams" :key="i" class="mx-2">
        <TCard class="overflow-hidden shadow bg-stone-800 hover:bg-stone-950 text-white">
          <div
            class="w-full h-64"
            :style="`background: url(${
              item.url ?? 'https://i.imgur.com/yjoYqzG.png'
            }) center center; background-size: cover`"
          />
          <div class="px-2 p-4">
            <p class="text-3xl mb-2 font-bold text-yellow-400 text-center">{{ item.name }}</p>
            <p class="text-center">{{ item.description }}</p>
            <TRow center class="mt-5">
              <TCol t6>
                <TIcon name="fa-star" solid class="mr-2" color="#ffcc00" />
                <TIcon name="fa-star" solid class="mr-2" color="#ffcc00" />
                <TIcon name="fa-star" solid class="mr-2" color="#ffcc00" />
                <TIcon name="fa-star" solid class="mr-2" />
                <TIcon name="fa-star" solid class="mr-2" />
              </TCol>
              <TCol t6 right>
                <TButton
                  class="shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900 font-bold"
                  @click="edit(item.id)"
                >
                  <TIcon name="fa-gears" solid class="mr-2" />
                  Gerenciar
                </TButton>
              </TCol>
            </TRow>
          </div>
        </TCard>
      </TCol>
    </TRow>
  </div>
</template>

<script>
export default {
  data: () => ({
    // FIX remover config após adaptar
    config: {
      head: 'Times',
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Times' }],
      route: 'team',
      children: [{ route: 'member', name: 'Membros', icon: 'fa-list-alt' }],
      headers: [{ text: 'Nome', value: 'name' }],
    },
    loading: false,
    teams: [],
  }),
  methods: {
    async loadData() {
      this.loading = true
      const res = await this.$crud.get('team')
      this.loading = false
      this.teams = res.data
    },
    add() {
      const route = this.$route.path
      this.$router.push(`${route}/new`)
    },
    edit(id) {
      const route = this.$route.path
      this.$router.push(`${route}/view/${id}`)
    },
  },
  mounted() {
    this.loadData()
  },
}
</script>
