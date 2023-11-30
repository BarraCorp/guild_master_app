<template>
  <TCard class="flex flex-col h-full p-4 shadow-md bg-stone-800">
    <TLoadingBar v-if="loading" />
    <div v-for="(item, i) in form" :key="i">
      <div class="flex content-center items-center">
        <div class="flex-grow">
          <h1 class="text-2xl ml-1 mb-2">Criar {{ item.name }}</h1>
          <p>{{ item.description }}</p>
        </div>
        <div class="text-right flex">
          <TButton class="px-3 mr-2 shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900" @click="back()">
            <TIcon name="fa-angles-left fa-sm mr-2" regular />
            Voltar
          </TButton>
          <TButton @click="save()" class="px-3 shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900">
            <TIcon solid name="fas fa-save" class="mr-2" />
            Salvar
          </TButton>
        </div>
      </div>

      <TRow class="mb-5">
        <TCol t9>
          <p>Membro</p>
          <TSelect v-model="object.idMember" :items="members" itemValue="id" itemText="name" @change="getCharacter()" />
        </TCol>
        <TCol t9>
          <p>Personagens</p>
          <TSelect v-model="object.idCharacter" :items="characters" itemValue="id" itemText="name" />
        </TCol>
      </TRow>

      <div v-for="(item, i) in characters" :key="i">
        {{ item.id }}
      </div>

      <!-- 
      <TInput v-model="object[field.name]" :placeholder="field.placeholder" v-if="field.type === 1" />
          <TInput v-model="object[field.name]" :placeholder="field.placeholder" password v-if="field.type === 2" />

          <TCheckbox v-model="object[field.name]" :placeholder="field.placeholder" v-if="field.type === 3" /> -->

      <div class="text-right flex">
        <TButton class="px-3 mr-2 shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900" @click="back()">
          <TIcon name="fa-angles-left fa-sm mr-2 " regular />
          Voltar
        </TButton>
        <TButton @click="save()" class="px-3 shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900">
          <TIcon solid name="fas fa-save" class="mr-2" />
          Salvar
        </TButton>
      </div>
    </div>
  </TCard>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
  },
  props: {
    config: Object,
  },
  data: () => ({
    loading: false,
    form: [],
    object: {},
    items: [],
    test: null,
    members: [],
    characters: [],
  }),
  methods: {
    async start() {
      this.loading = true
      const res = await this.$crud.get('form', { params: { route: 'teamMember' } })
      this.loading = false
      if (!res) {
        this.$router.push('/login')
        this.$store.dispatch('setUserInfo', null)
      }
      this.form = res.data
      const res2 = await this.$crud.get('member', { params: { idFather: this.$route.params.idFather } })
      this.members = res2.data
      this.loading = false
    },
    async getCharacter() {
      console.log('aw')
      this.loading = true
      const res2 = await this.$crud.get('character', { params: { idMember: this.object.idMember } })
      this.characters = res2.data
      this.loading = false
    },

    async save() {
      let res = null
      if (this.$route.params.idFather) {
        this.object.idFather = this.$route.params.idFather
      }

      if (this.$route.params.id) {
        delete this.object.id
        delete this.object.createdAt
        delete this.object.updatedAt
        delete this.object.deletedAt

        res = await this.$crud.update('teamMember', this.$route.params.id, this.object)
      } else {
        res = await this.$crud.insert('teamMember', this.object)
      }
      if (res && (res.status === 200 || res.status === 204)) {
        this.$router.go(-1)
      }
    },
    back() {
      this.$router.go(-1)
    },
  },
  mounted() {
    if (!this.user) {
      this.$router.push('/login')
      this.$store.dispatch('setUserInfo', null)
    }
    this.start()
  },
}
</script>

<style></style>
