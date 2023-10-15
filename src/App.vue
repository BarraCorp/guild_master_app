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
    start() {
      if (!this.user) {
        const logged = this.$crud.get('me')
        if (logged) {
          this.$store.dispatch('setUserInfo', logged)
          this.$router.push('/')
        } else {
          this.$router.push('/login')
        }
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
