<template>
  <div class="flex content-center items-center justify-center h-screen bg-stone-900 text-white">
    <TCol t3>
      <TCard :class="['p-4', 'bg-custom-3', { tremor: buzz }]">
        <div class="flex justify-center mb-5">Projeto Guild Roster Manager Logo</div>
        <!-- <h1 class="text-2xl mb-10 font-square font-extrabold">Bem Vindo</h1> -->
        <h2 class="text-2xl mb-5 font-square font-extrabold text-center">Login</h2>
        <TInput v-model="object.email" class="mb-3" placeholder="usuario@email.com" />
        <TInput v-model="object.password" class="mb-5" password />
        <div class="text-right mb-5">
          <router-link to="/rescue" class="font-bold text-amber-500 hover:text-amber-600">Esqueci a Senha</router-link>
        </div>

        <TButton block normal dark class="text-center mb-5" @click="login()">Logar</TButton>

        <div class="text-center mb-5">
          <router-link to="/register" class="font-bold text-amber-500 hover:text-amber-600">
            Criar uma Conta
          </router-link>
        </div>
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

        this.$store.dispatch('setToasted', {
          active: true,
          text: 'Tem algo errado aí fera.',
          icon: 'fa-bomb',
          color: '#ff0000',
          back: '#ff000033',
        })
      }
    },
  },
}
</script>

<style></style>
