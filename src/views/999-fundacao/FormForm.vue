<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Formulário',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Formulário' }],
      route: 'form',
    },
  }),
  mounted() {},
}
</script>
