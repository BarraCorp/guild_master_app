<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Raças',
      breadcrumb: [{ text: 'Home' }, { text: 'Database' }, { text: 'Raças' }, { text: 'Formulário' }],
      route: 'race',
    },
  }),
  mounted() {},
}
</script>
