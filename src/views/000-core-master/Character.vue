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
      head: 'Personagens',
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Personagens' }],
      route: 'character',
      fatherField: 'idMember',
      father: null,
      headers: [
        // { text: 'ID', value: 'id', classes: 'w-8' },
        { text: 'Nome', value: 'name' },
        { text: 'Item Level', value: 'itemLevel' },
        { text: 'Servidor', value: 'serverName' },
        { text: 'Classe', value: 'className' },
        { text: 'Raça', value: 'raceName' },
      ],
    },
  }),
  mounted() {
    this.config.father = this.$route.params.idFather
  },
}
</script>
