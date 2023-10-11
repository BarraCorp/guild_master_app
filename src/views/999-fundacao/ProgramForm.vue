<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Programas',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Programas' }],
      route: 'program',
    },
  }),
  mounted() {},
}
</script>
