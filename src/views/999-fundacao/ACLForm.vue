<template>
  <TForm :config="config"> </TForm>
</template>

<script>
export default {
  data: () => ({
    config: {
      head: 'ACL',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Grupos' }, { text: 'ACL' }],
      route: 'acl',
    },
  }),
  mounted() {},
}
</script>
