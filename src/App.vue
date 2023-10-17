<template>
  <TApp>
    <TAppShell v-if="user && !debug">
      <template v-slot:header-right>
        <TIcon name="fa-bell" class="mr-4" color="black" regular button />
        <TIcon name="fa-user" color="black" regular button />
        Diovanni Souza
        <TIcon name="fa-chevron-down" color="black" regular button />
      </template>
      <router-view />
    </TAppShell>
    <TAppShellDebug v-if="user && debug">
      <router-view />
    </TAppShellDebug>

    <router-view v-if="!user && !debug" />
    <TToast />
  </TApp>
</template>

<script>
import TApp from '@/components/TApp'
import TIcon from '@/components/TIcon'
import TAppShell from '@/shell/TAppShell'
import TAppShellDebug from '@/shell/TAppShellDebug'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TApp,
    TAppShell,
    TAppShellDebug,
    TIcon,
  },
  data: () => ({
    debug: false,
  }),
  computed: {
    ...mapState(['user']),
    route() {
      return this.$route.path
    },
  },
  methods: {
    async start() {
      if (!this.user) {
        const logged = await this.$crud.get('me')
        console.log(logged, 'aqui')
        if (logged && logged.response && logged.response.status === 401) {
          this.$router.push('/login')
          this.$store.dispatch('setUserInfo', null)
        }
        if (logged) {
          this.$store.dispatch('setUserInfo', logged)
          this.$router.push('/')
        }
        this.$router.push('/login')
        this.$store.dispatch('setUserInfo', null)
      }
    },
  },
  mounted() {
    this.start()
  },
  watch: {
    route() {
      if (this.route.includes('debug')) {
        this.debug = true
      } else {
        this.debug = false
      }
    },
  },
}
</script>
