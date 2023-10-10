<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'Novo Grupos do Usuário',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Usuários' }],
      route: 'userGroup',
    },
  }),
  mounted() {},
}
</script>
