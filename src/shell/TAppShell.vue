<template>
  <TApp>
    <THeadBar class="bg-custom-2 text-white">
      <div class="flex content-center items-center">
        <div class="w-2 px-4">
          <TIcon name="fa-bars" regular button @click="navbar = !navbar" />
        </div>
        <div class="flex-grow px-4">
          <!-- FIX precioso troca a imagem  -->
          <!-- <img src="@/assets/logo-venus.png" class="h-16" /> -->
          <h1 class="text-3xl mx-4 font-square font-extrabold text-yellow-400">Guild Pro Admin</h1>
        </div>
        <div class="w-2/12 p-4 text-right">
          <slot name="header-right"></slot>
        </div>
      </div>
    </THeadBar>
    <TMain>
      <TSideBar v-if="navbar" class="bg-custom-1">
        <template #content>
          <div v-for="(menu, j) in menuModel" :key="j">
            <TButton @click="menu.status = !menu.status" block dark class="mb-1 flex hover:bg-amber-500">
              <div class="flex-grow">{{ menu.category }}</div>
              <TIcon
                v-if="menu.menus && menu.menus.length > 0"
                :name="menu.status ? 'fa-caret-up' : 'fa-caret-down'"
                class="w-4 mr-2 fa-sm"
                solid
              />
            </TButton>
            <Transition>
              <div v-if="menu.status">
                <TButton
                  v-for="(item, i) in menu.menus"
                  :key="i"
                  :to="item.to"
                  block
                  dark
                  class="mb-1 hover:bg-amber-500"
                >
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
      <TContent class="p-4 bg-custom-3">
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
        category: 'Home',
        status: false,
        menus: [],
      },
      {
        category: 'Guild',
        status: false,
        menus: [
          { text: 'Guild Roster', to: '/' },
          { text: 'Members', to: '/' },
          { text: 'Warnings Center', to: '/' },
          { text: 'Update Rooster', to: '/' },
        ],
      },
      {
        category: 'Raid Teams',
        status: false,
        menus: [{ text: 'Sumary', to: '/' }],
      },
      {
        category: 'Settings',
        status: false,
        menus: [
          { text: 'Add Admin', to: '/' },
          { text: 'Add Officer', to: '/' },
          { text: 'Add Raid Leader/Assist', to: '/' },
          { text: 'Change Plan', to: '/' },
          { text: 'Reset Guild Data', to: '/' },
        ],
      },
      // {
      //   category: 'Core Master',
      //   status: false,
      //   menus: [
      //     { text: 'Times', to: '/team', icon: 'fa-people-group' },
      //     { text: 'Membros', to: '/member', icon: 'fa-person' },
      //   ],
      // },
      // {
      //   category: 'Minha Conta',
      //   status: false,
      //   menus: [
      //     { text: 'Perfil', to: '/', icon: 'fa-user' },
      //     { text: 'Personagens', to: '/', icon: 'fa-person-rays' },
      //     { text: 'Financeiro', to: '/', icon: 'fa-receipt' },
      //   ],
      // },
      // {
      //   category: 'WoW Database',
      //   status: false,
      //   menus: [
      //     { text: 'Raças', to: '/race', icon: 'fa-user' },
      //     { text: 'Classes', to: '/class', icon: 'fa-hat-wizard' },
      //     { text: 'Servidores', to: '/server', icon: 'fa-server' },
      //     { text: 'Guilds', to: '/guild', icon: 'fa-users' },
      //   ],
      // },
      // {
      //   category: 'Debugs',
      //   status: false,
      //   menus: [{ text: 'Times', to: '/debug/team', icon: 'fa-user' }],
      // },
      // {
      // (category: 'Administração'),
      // (status: false),
      // (menus: [
      //   { text: 'Usuários', to: '/usuarios', icon: 'fa-user' },
      //   { text: 'Planos', to: '/plan', icon: 'fa-money-bill' },
      //   { text: 'Grupos', to: '/group', icon: 'fa-people-group' },
      //   { text: 'Programas', to: '/program', icon: 'fa-computer' },
      //   { text: 'Formulário', to: '/form', icon: 'fa-table-list' }
      // ]),
      // },
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
