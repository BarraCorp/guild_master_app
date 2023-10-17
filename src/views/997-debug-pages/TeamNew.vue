<template>
  <div class="w-full">
    <TLoadingBar v-if="loading" />
    <TRow class="mb-5" center>
      <TCol class="flex-grow">
        <p class="text-3xl font-bold text-yellow-400 uppercase">Criar Time</p>
      </TCol>
      <TCol class="w-64" right>
        <TButton class="px-3 mr-2 shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900" @click="back()">
          <TIcon name="fa-angles-left fa-sm mr-2" regular />
          Voltar
        </TButton>
      </TCol>
    </TRow>
    <TCard class="flex flex-col p-4 shadow-md bg-stone-800">
      <div v-for="(item, i) in form" :key="i">
        <div class="flex flex-wrap mb-4">
          <div v-for="(field, j) in item.children" :key="j" :class="field.classes + ' p-1'">
            <div class="mb-2 ml-2">
              <b>{{ field.label }}</b>
            </div>
            <TInput v-model="object[field.name]" :placeholder="field.placeholder" v-if="field.type === 1" />
            <TInput v-model="object[field.name]" :placeholder="field.placeholder" password v-if="field.type === 2" />

            <TCheckbox v-model="object[field.name]" :placeholder="field.placeholder" v-if="field.type === 3" />

            <TSelect
              v-model="object[field.name]"
              :placeholder="field.placeholder"
              :items="field.database"
              v-if="field.type === 4"
              :itemValue="field.itemValue ? field.itemValue : 'id'"
              :itemText="field.itemKey ? field.itemKey : 'name'"
            />
          </div>
        </div>
        <div class="text-right flex">
          <TButton @click="save()" class="px-3 shadow bg-yellow-400 hover:bg-yellow-600 text-gray-900">
            <TIcon solid name="fas fa-save" class="mr-2" />
            Salvar
          </TButton>
        </div>
      </div>
    </TCard>
  </div>
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
  }),
  methods: {
    async start() {
      this.loading = true
      const res = await this.$crud.get('form', { params: { route: 'team' } })
      this.loading = false
      if (!res) {
        this.$router.push('/login')
        this.$store.dispatch('setUserInfo', null)
      }
      this.form = res.data
      if (this.$route.params && this.$route.params.id) {
        const raw = await this.$crud.get('team', { params: { ...this.$route.params } })
        if (raw.data) {
          this.object = raw.data[0]
        }
      }
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

        res = await this.$crud.update('team', this.$route.params.id, this.object)
      } else {
        res = await this.$crud.insert('team', this.object)
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
