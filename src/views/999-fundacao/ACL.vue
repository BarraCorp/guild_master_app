<template>
  <TCrud :config="config">
    <template #item-status="{ item }"> <TStatus :status="item.status" /> </template>
  </TCrud>
</template>

<script>
import TCrud from '@/layout/TCrud'
export default {
  components: {
    TCrud,
  },
  data: () => ({
    config: {
      head: 'Formulário de ACL',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Grupos' }, { text: 'ACL' }],
      route: 'acl',
      fatherField: 'idGroup',
      father: null,
      headers: [
        { text: 'ID', value: 'id', classes: 'w-8' },
        { text: 'Nome', value: 'name' },
        { text: 'Status', value: 'status', classes: 'w-8' },
      ],
    },
  }),
  mounted() {
    this.config.father = this.$route.params.idFather
  },
}
</script>
