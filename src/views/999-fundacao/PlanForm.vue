<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Planos',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Plano' }],
      route: 'plan',
    },
  }),
  mounted() {},
}
</script>
