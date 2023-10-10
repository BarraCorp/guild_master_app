<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Grupos',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Grupos' }],
      route: 'group',
    },
  }),
  mounted() {},
}
</script>
