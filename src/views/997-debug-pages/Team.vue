<template>
  <div class="h-full w-full">
    <TRow class="mb-5" center>
      <TCol class="flex-grow">
        <p class="text-3xl font-bold text-yellow-400 uppercase">Meus Times</p>
      </TCol>
      <TCol class="w-64" right>
        <TButton class="shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900 font-bold" @click="add()">
          <TIcon name="fa-plus" solid class="mr-2" />
          Criar Time
        </TButton>
      </TCol>
    </TRow>

    <TRow>
      <TCol t3 v-for="(item, i) in teams" :key="i" class="mx-2">
        <TCard color="#292524" class="overflow-hidden shadow">
          <div class="w-full h-64" :style="`background: url(${item.url ?? 'https://i.imgur.com/yjoYqzG.png'}) center center; background-size: cover`"></div>
          <div class="px-2 p-4">
            <p class="text-3xl mb-2 font-bold text-yellow-400 text-center">{{ item.name }}</p>
            <p class="text-center">{{ item.description }}</p>
            <TRow center class="mt-5">
              <TCol t6>
                <TIcon name="fa-star" solid class="mr-2" />
                <TIcon name="fa-star" solid class="mr-2" />
                <TIcon name="fa-star" solid class="mr-2" />
                <TIcon name="fa-star" regular class="mr-2" />
                <TIcon name="fa-star" regular class="mr-2" />
              </TCol>
              <TCol t6 right>
                <TButton class="shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900 font-bold" @click="edit(item.id)">
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
    teams: [],
    menuModel: [
      {
        category: 'Core Master',
        status: false,
        menus: [
          { text: 'Times', to: '/team', icon: 'fa-people-group' },
          { text: 'Membros', to: '/member', icon: 'fa-person' },
        ],
      },
      {
        category: 'Minha Conta',
        status: false,
        menus: [
          { text: 'Perfil', to: '/', icon: 'fa-user' },
          { text: 'Personagens', to: '/', icon: 'fa-person-rays' },
          { text: 'Financeiro', to: '/', icon: 'fa-receipt' },
        ],
      },
      {
        category: 'WoW Database',
        status: false,
        menus: [
          { text: 'Raças', to: '/race', icon: 'fa-user' },
          { text: 'Classes', to: '/class', icon: 'fa-hat-wizard' },
          { text: 'Servidores', to: '/server', icon: 'fa-server' },
          { text: 'Guilds', to: '/guild', icon: 'fa-users' },
        ],
      },
      {
        category: 'Debugs',
        status: false,
        menus: [{ text: 'Times', to: '/debug/team', icon: 'fa-user' }],
      },
      {
        category: 'Administração',
        status: false,
        menus: [
          { text: 'Usuários', to: '/usuarios', icon: 'fa-user' },
          { text: 'Planos', to: '/plan', icon: 'fa-money-bill' },
          { text: 'Grupos', to: '/group', icon: 'fa-people-group' },
          { text: 'Programas', to: '/program', icon: 'fa-computer' },
          { text: 'Formulário', to: '/form', icon: 'fa-table-list' },
        ],
      },
    ],
  }),
  methods: {
    async loadTeams() {
      const res = await this.$crud.get('team')
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
  async mounted() {
    await this.loadTeams()
  },
}
</script>

<style>
.bg-stone-900 {
  background-color: #1c1917;
}
.bg-stone-800 {
  background-color: #292524;
}
.bg-stone-700 {
  background-color: #44403c;
}
</style>
