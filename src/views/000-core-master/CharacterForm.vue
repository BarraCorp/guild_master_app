<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Personagens',
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Personagens' }, { text: 'Formulário' }],
      route: 'character',
    },
  }),
  mounted() {},
}
</script>
