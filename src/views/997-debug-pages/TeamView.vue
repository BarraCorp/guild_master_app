<template>
  <div class="h-full w-full">
    <div class="flex-grow p-5 flex-wrap">
      <div class="flex w-full mb-5 items-center">
        <div class="p-2">
          <div
            class="w-16 h-16 rounded-full"
            :style="`background: url(${
              team.url ?? 'https://i.imgur.com/yjoYqzG.png'
            }) center center; background-size: cover`"
          ></div>
        </div>
        <div class="px-4 w-3/12 border-r border-zinc-800">
          <p class="text-3xl font-bold text-yellow-400 uppercase">{{ team.name }}</p>
          <p>{{ team.description }}</p>
        </div>
        <div class="px-4 flex-grow border-r border-zinc-800">
          <p class="font-bold text-yellow-400">{{ members.length }} membros</p>
          <p>Fundado em {{ $format.date(team.createdAt) }}</p>
        </div>
        <div class="w-3/12 flex justify-center">
          <TButton class="shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900 font-bold mr-4" @click="back()">
            <TIcon name="fa-angles-left fa-sm mr-2" regular />
            Voltar
          </TButton>
          <TButton class="shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900 font-bold" @click="add()">
            <TIcon name="fa-plus" solid class="mr-2" />
            Adicionar Membro
          </TButton>
        </div>
      </div>

      <TLoadingBar v-if="loading" />

      <div class="w-9/12">
        <p class="font-bold text-yellow-400 uppercase my-5">Integrantes do Time</p>
        <TTable
          :items="members"
          :headers="headers"
          class="w-full border-zinc-800"
          :trClasses="['bg-stone-800', 'text-yellow-400', 'border-zinc-800']"
          :tdClasses="['hover:bg-stone-700', 'border-zinc-800']"
        >
          <template #item-mediaAvatar="{ item }">
            <TRow>
              <TCol center t12>
                <div class="rounded-full w-8 h-8 overflow-hidden border-2 border-gray-400">
                  <img :src="item.mediaAvatar" />
                </div>
              </TCol>
            </TRow>
          </template>
          <template #item-idClass="{ item }">
            <TRow>
              <TCol center t12>
                <div class="rounded-full w-8 h-8 overflow-hidden border-2 border-gray-400">
                  <img :src="getClassImage(item.idClass)" />
                </div>
              </TCol>
            </TRow>
          </template>
          <template #item-idRace="{ item }">
            <TRow>
              <TCol center t12>
                <div class="rounded-full w-8 h-8 overflow-hidden border-2 border-gray-400">
                  <img :src="getRaceImage(item)" />
                </div>
              </TCol>
            </TRow>
          </template>
        </TTable>
        <div class="h-8 mt-2">
          <TPagination v-model="page" :config="pageConfig" v-if="!loading" />
        </div>
      </div>
      <div class="w-3/12"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: {},
    members: [],
    headers: [
      { text: '', value: 'mediaAvatar' },
      { text: 'Membro', value: 'memberName' },
      { text: 'Personagem', value: 'name' },
      { text: 'Facção', value: 'faction' },
      { text: 'Classe', value: 'idClass' },
      { text: 'Raça', value: 'idRace' },
      { text: 'Função', value: 'specRole' },
      { text: 'Item Level', value: 'equippedItemLevel' },
    ],
    pageConfig: {},
    perPage: 12,
    page: 1,
    loading: false,
  }),
  methods: {
    async loadTeam() {
      if (this.$route.params && this.$route.params.id) {
        this.loading = true
        const raw = await this.$crud.get('team', { params: { ...this.$route.params } })
        if (raw.data) {
          this.team = raw.data[0]
        }

        const raw2 = await this.$crud.get('teamMember', {
          params: { idTeam: this.$route.params.id, limit: this.perPage, page: this.page },
        })
        if (raw2.data) {
          this.members = raw2.data
        }

        this.pageConfig = { total: raw2.total, actual: raw2.actualPage, perPage: this.perPage }

        this.loading = false
      }
    },
    add() {
      const route = this.$route.path
      this.$router.push(`${route}/member/new`)
    },
    edit(id) {
      const route = this.$route.path
      this.$router.push(`${route}/edit/${id}`)
    },
    back() {
      this.$router.go(-1)
    },
    getClassImage(id) {
      return require(`@/assets/classes/${id}.png`)
    },
    getRaceImage(item) {
      return require(`@/assets/races/${item.idRace}-${item.gender}.png`)
    },
  },
  async mounted() {
    await this.loadTeam()
  },
}
</script>

<style></style>
