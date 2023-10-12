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
      head: 'Redes Sociais',
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Membros' }, { text: 'Redes Sociais' }],
      route: 'memberSocial',
      headers: [
        // { text: 'ID', value: 'id', classes: 'w-8' },
        // { text: 'Nome', value: 'name' },
        { text: 'Rede Social', value: 'socialMedia', classes: 'w-64' },
        { text: 'Link', value: 'url' },
      ],
    },
  }),
  mounted() {},
}
</script>
