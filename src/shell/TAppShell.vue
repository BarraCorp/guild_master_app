<template>
  <TApp>
    <THeadBar class="bg-zinc-900 text-white">
      <div class="flex content-center items-center">
        <div class="w-2 px-4">
          <TIcon name="fa-bars" regular button @click="navbar = !navbar" />
        </div>
        <div class="flex-grow px-4">
          <img src="@/assets/logo-venus.png" class="h-16" />
        </div>
        <div class="w-2/12 p-4 text-right">
          <slot name="header-right"></slot>
        </div>
      </div>
    </THeadBar>
    <TMain>
      <TSideBar v-if="navbar">
        <template #content>
          <div v-for="(menu, j) in menuModel" :key="j">
            <TButton @click="menu.status = !menu.status" block dark normal class="mb-1 flex">
              <div class="flex-grow">{{ menu.category }}</div>
              <TIcon :name="menu.status ? 'fa-caret-up' : 'fa-caret-down'" class="w-4 mr-2 fa-sm" solid />
            </TButton>
            <Transition>
              <div v-if="menu.status">
                <TButton v-for="(item, i) in menu.menus" :key="i" :to="item.to" block dark normal class="mb-1">
                  <TIcon :name="item.icon" class="mr-2 fa-sm" solid />{{ item.text }}
                </TButton>
              </div>
            </Transition>
          </div>
        </template>
        <template #footer>
          <TButton block dark normal class="text-center" @click="logoff()">
            Sair <TIcon name="fa-right-from-bracket" class="ml-2 fa-sm" solid
          /></TButton>
        </template>
      </TSideBar>
      <TContent class="p-4 bg-orange-950">
        <slot></slot>
      </TContent>
    </TMain>
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
    var1: null,
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
