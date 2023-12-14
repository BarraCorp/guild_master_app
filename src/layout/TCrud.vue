<template>
  <TCard class="flex flex-col h-full p-4 shadow-md">
    <div class="h-24">
      <div class="flex content-center items-center">
        <div class="flex-grow">
          <p class="text-2xl">{{ config.head }}</p>
          <TBreadcrumb :list="config.breadcrumb" class="my-4" />
        </div>
        <div class="text-right flex">
          <TButton class="px-3 mr-2 bg-indigo-800 hover:bg-indigo-900 text-white" @click="back()" v-if="idFather">
            <TIcon name="fa-angles-left fa-sm mr-2" regular />
            Voltar
          </TButton>
          <TButton class="px-3 bg-indigo-800 hover:bg-indigo-900 text-white" @click="add()">
            <TIcon name="fa-plus fa-sm mr-2" regular />
            Adicionar
          </TButton>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <Transition>
        <TTable
          :headers="headers"
          :items="items"
          class="h-full"
          :loading="loading"
          :trClasses="['bg-gray-200']"
          :tdClasses="['hover:bg-gray-100']"
        >
          <template v-for="head in config.headers" #[`item-${head.value}`]="{ item }">
            <slot :name="`item-${head.value}`" v-bind="{ item, head }"></slot>
          </template>

          <template #item-action="{ item }">
            <TButton
              dark
              icon
              normal
              class="mr-1"
              v-for="(sub, j) in config.children"
              :key="j"
              @click="subRoute(item.id, sub)"
            >
              <TIcon :name="`${sub.icon} fa-sm`" regular v-if="sub.icon" />
            </TButton>

            <TButton dark icon normal class="mr-1" @click="edit(item.id)">
              <TIcon name="fa-pen-to-square fa-sm" regular />
            </TButton>
            <TButton dark icon normal class="mr-1" @click="remove(item.id)">
              <TIcon name="fa-eraser fa-sm" regular />
            </TButton>
          </template>
        </TTable>
      </Transition>
    </div>
    <div class="h-8 mt-2">
      <TPagination v-model="page" :config="pageConfig" v-if="!loading" />
    </div>
  </TCard>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    config: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapState(['user']),
    idFather() {
      return this.$route?.params?.idFather
    },
  },
  data: () => ({
    headers: [],
    items: [],
    pageConfig: {},
    perPage: 12,
    page: 1,
    loading: false,
  }),
  methods: {
    async start() {
      if (this.config.route) {
        const params = {}
        if (this.$route.params.idFather) {
          params[this.config.fatherField] = this.$route.params.idFather
        }
        params.limit = this.perPage
        params.page = this.page
        this.loading = true
        const res = await this.$crud.get(this.config.route, { params })
        this.loading = false
        if (!res || (res.response && res.response.status === 401)) {
          this.$router.push('/login')
          this.$store.dispatch('setUserInfo', null)
        }
        this.items = res.data
        this.headers = []
        this.headers = [...this.config.headers] || [{ text: 'ID', value: 'id', classes: 'text-left' }]
        if (
          !this.headers.find((el) => {
            return el.value === 'action'
          })
        ) {
          this.headers.push({ text: 'Ações', value: 'action', classes: 'text-center' })
        }
        this.pageConfig = { total: res.total, actual: res.actualPage, perPage: this.perPage }
      }
    },
    add() {
      const route = this.$route.path
      this.$router.push(`${route}/new`)
    },
    edit(id) {
      const route = this.$route.path
      this.$router.push(`${route}/edit/${id}`)
    },
    subRoute(id, sub) {
      const route = this.$route.path
      this.$router.push(`${route}/${id}/${sub.route}`)
    },
    async remove(id) {
      const res = await this.$crud.remove(this.config.route, id)
      if (res) {
        await this.start()
        this.$store.dispatch('setToasted', {
          active: true,
          text: 'Excluído com sucesso',
          icon: 'fa-check-square',
          color: '#14532do9',
        })
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
  watch: {
    page() {
      this.start()
    },
  },
}
</script>
