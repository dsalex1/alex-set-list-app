import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { VueFire, VueFireAuth } from 'vuefire'
import { app as firebaseApp } from './plugins/firebase'

// Import our custom CSS
import './main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import dayjs from 'dayjs'
//import 'dayjs/locale/de' // import locale
//dayjs.locale('de') // use locale
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.mount('#app')
