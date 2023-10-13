<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Times',
      breadcrumb: [{ text: 'Home' }, { text: 'Corer' }, { text: 'Times' }, { text: 'Formulário' }],
      route: 'team',
    },
  }),
  mounted() {},
}
</script>
