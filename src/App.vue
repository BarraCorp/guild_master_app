<template>
  <TApp>
    <TAppShell>
      <template v-slot:header-right>
        <TIcon name="fa-bell" class="mr-4" color="black" regular button />
        <TIcon name="fa-user" color="black" regular button />
        Diovanni Souza
        <TIcon name="fa-chevron-down" color="black" regular button />
      </template>
      <router-view />
    </TAppShell>
  </TApp>
</template>

<script>
import TApp from '@/components/TApp'
import TIcon from '@/components/TIcon'
import TAppShell from '@/shell/TAppShell'

export default {
  name: 'App',
  components: {
    TApp,
    TAppShell,
    TIcon,
  },
}
</script>
