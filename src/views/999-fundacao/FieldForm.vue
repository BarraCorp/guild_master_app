<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Campos',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Campos do Formulário' }],
      route: 'field',
    },
  }),
  mounted() {},
}
</script>
