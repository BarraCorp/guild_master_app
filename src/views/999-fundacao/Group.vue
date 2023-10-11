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
      head: 'Grupo',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Grupos' }],
      route: 'group',
      children: [{ route: 'acl', name: 'ACL', icon: 'fa-list-check' }],
      headers: [
        { text: 'ID', value: 'id', classes: 'w-8' },
        { text: 'Nome', value: 'name' },
      ],
    },
  }),
  mounted() {},
}
</script>
