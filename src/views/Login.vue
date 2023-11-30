<template>
  <div class="flex content-center items-center justify-center h-screen bg-stone-900">
    <TCol t3>
      <TCard :class="['p-4', { tremor: buzz }]">
        <div class="flex justify-center mb-10">
          <!-- <img src="@/assets/logo-venus.png" class="h-16" /> -->
        </div>
        <h1 class="text-3xl mb-5 font-square font-extrabold text-center">Bem Vindo</h1>
        <TInput v-model="object.email" class="mb-3" placeholder="usuario@email.com" />
        <TInput v-model="object.password" class="mb-3" password />

        <TButton block normal dark class="text-center mb-2" @click="login()">Logar</TButton>
        <TRow class="mt-4">
          <TCol t6>Esqueci a Senha</TCol>
          <TCol t6 class="text-right">Registrar</TCol>
        </TRow>
      </TCard>
    </TCol>
  </div>
</template>

<script>
export default {
  data: () => ({
    object: {},
    buzz: false,
  }),
  methods: {
    async login() {
      const res = await this.$crud.insert('login', this.object)
      if (res.status === 200 && res.data) {
        this.$store.dispatch('setUserInfo', res.data)
        this.$router.push('/')
      } else {
        this.buzz = true
        setTimeout(() => {
          this.buzz = false
        }, 500)

        // this.$store.dispatch('setToasted', {
        //   active: true,
        //   text: 'Tem algo errado aí fera.',
        //   icon: 'fa-bomb',
        //   color: '#ff0000',
        //   back: '#ff000033',
        // })
      }
    },
  },
}
</script>

<style></style>
