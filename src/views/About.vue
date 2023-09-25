<template>
  <TCrud :config="config"></TCrud>
</template>

<script>
import TCrud from '@/layout/TCrud'
export default {
  components: {
    TCrud,
  },
  data: () => ({
    config: {
      head: 'Usuários',
      breadcrumb: [{ text: 'Home' }, { text: 'About' }, { text: 'Usuários' }],
      route: '/users',
    },
  }),
}
</script>
