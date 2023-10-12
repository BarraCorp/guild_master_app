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
      head: 'Formulários',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Formulários' }],
      route: 'form',
      children: [{ route: 'field', name: 'Campos', icon: 'fa-list-alt' }],
      headers: [
        { text: 'ID', value: 'id', classes: 'w-8' },
        { text: 'Nome', value: 'name' },
      ],
    },
  }),
  mounted() {},
}
</script>
