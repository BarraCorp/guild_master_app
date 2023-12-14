<template>
  <div class="flex content-center items-center justify-center h-screen bg-stone-900">
    <TCol t3>
      <TCard :class="['p-4', { tremor: buzz }]">
        <h1 class="text-2xl mb-5 font-square font-extrabold">Criar uma conta</h1>
        <div class="mb-5">
          <b> Nome </b>
          <TInput v-model="object.name" class="my-2" placeholder="Nome" />
        </div>
        <div class="mb-5">
          <b> Email </b>
          <TInput v-model="object.email" class="my-2" placeholder="usuario@email.com" />
        </div>
        <div class="mb-5">
          <b> Senha </b>
          <TInput v-model="object.password" class="my-2" password placeholder="*****" />
        </div>
        <div class="mb-5">
          <b> Confirmar Senha </b>
          <TInput v-model="password" class="my-2" password placeholder="*****" />
        </div>
        <TButton block normal dark class="text-center my-2" @click="register()">Registrar</TButton>
      </TCard>
    </TCol>
  </div>
</template>

<script>
export default {
  data: () => ({
    object: {},
    buzz: false,
    password: null,
  }),
  methods: {
    register() {
      if (!this.object.email) {
        return false
      }
      if (this.object.password != this.password) {
        return false
      }

      this.object.idPlan = 1

      const res = this.$crud.insert('register', this.object)

      console.log(res)

      if (res) {
        this.$router.push('/login')
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
