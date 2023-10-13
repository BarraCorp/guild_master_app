<template>
  <TCrud :config="config"> </TCrud>
</template>

<script>
import TCrud from '@/layout/TCrud'
export default {
  components: {
    TCrud,
  },
  data: () => ({
    config: {
      head: 'Times',
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Times' }],
      route: 'team',
      children: [{ route: 'member', name: 'Membros', icon: 'fa-list-alt' }],
      headers: [{ text: 'Nome', value: 'name' }],
    },
  }),
  mounted() {},
}
</script>
