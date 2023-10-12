<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Membros',
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Membros' }, { text: 'Formulário' }],
      route: 'member',
    },
  }),
  mounted() {},
}
</script>
