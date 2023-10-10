<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Novo Usuário',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Usuários' }],
      route: 'user',
    },
  }),
  mounted() {},
}
</script>
