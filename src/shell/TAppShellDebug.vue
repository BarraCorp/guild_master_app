<template>
  <TApp>
    <div class="bg-stone-900 h-full w-full text-white">
      <THeadBar class="bg-stone-950">
        <div class="flex content-center items-center">
          <div class="w-2 px-4"></div>
          <div class="flex-grow px-4"></div>
          <div class="w-2/12 p-4 text-right"></div>
        </div>
      </THeadBar>
      <div class="flex">
        <div class="w-80 min-w-64 h-full p-5">
          <TCard class="h-full p-2 bg-stone-800">
            <div v-for="(menu, j) in menuModel" :key="j">
              <TButton @click="menu.status = !menu.status" block dark class="mb-1 flex">
                <div class="flex-grow">{{ menu.category }}</div>
                <TIcon :name="menu.status ? 'fa-caret-up' : 'fa-caret-down'" class="w-4 mr-2 fa-sm" solid />
              </TButton>
              <Transition>
                <div v-if="menu.status">
                  <TButton v-for="(item, i) in menu.menus" :key="i" :to="item.to" block dark class="mb-1">
                    <TIcon :name="item.icon" class="mr-2 fa-sm" solid />{{ item.text }}
                  </TButton>
                </div>
              </Transition>
            </div>
          </TCard>
        </div>
        <div class="flex flex-grow p-5 flex-wrap h-full w-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </TApp>
</template>

<script>
import TApp from '@/components/TApp'

export default {
  name: 'App',
  components: {
    TApp,
  },
  props: {},
  data: () => ({
    navbar: true,
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
    async logoff() {
      const res = await this.$crud.insert('logout', this.object)
      if (res) {
        this.$router.push('/login')
        this.$store.dispatch('setUserInfo', null)
      }
    },
  },
}
</script>
