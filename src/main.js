import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'
import './assets/tstyles.css'
import './assets/fa/css/fontawesome.css'
import './assets/fa/css/brands.css'
import './assets/fa/css/solid.css'

import router from './router'

createApp(App).use(router).mount('#app')
