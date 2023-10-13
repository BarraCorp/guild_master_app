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
      head: 'Membros',
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Times' }, { text: 'Membros' }],
      route: 'teamMember',
      fatherField: 'idTeam',
      father: null,
      headers: [
        { text: 'Membro', value: 'memberName' },
        { text: 'Personagem', value: 'characterName' },
      ],
    },
  }),
  mounted() {
    this.config.father = this.$route.params.idFather
  },
}
</script>
