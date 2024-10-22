import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'
import './assets/tstyles.css'
import './assets/venus.css'

import './assets/fa/css/fontawesome.css'
import './assets/fa/css/brands.css'
import './assets/fa/css/solid.css'

import format from './plugins/format'
import crud from './plugins/crud'
import venus from './plugins/venus'
import router from './router'
import store from './store'

createApp(App).use(format).use(crud).use(venus).use(store).use(router).mount('#app')
