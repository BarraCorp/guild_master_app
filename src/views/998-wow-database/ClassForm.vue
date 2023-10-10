<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Classes',
      breadcrumb: [{ text: 'Home' }, { text: 'Database' }, { text: 'Classes' }, { text: 'Formulário' }],
      route: 'class',
    },
  }),
  mounted() {},
}
</script>
