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
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Membros' }],
      route: 'member',
      children: [
        { route: 'character', name: 'Personagens', icon: 'fa-list-alt' },
        { route: 'social', name: 'Social Media', icon: 'fa-list-alt' },
      ],
      headers: [
        // { text: 'ID', value: 'id', classes: 'w-8' },
        { text: 'Nickname', value: 'nickname' },
        { text: 'Nome', value: 'name' },
        { text: 'Pronome', value: 'preferredPronoum' },
      ],
    },
  }),
  mounted() {},
}
</script>
