import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import 'bootstrap/dist/css/bootstrap.css'
import 'material-icons/iconfont/material-icons.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {})
Vue.use(VueScrollTo)
Vue.use(BootstrapVue, {
  breakpoints: ['xs', 'gm', 'sm', 'md', 'lg', 'xl', 'xxl']
})
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}

initializeApp(firebaseConfig)
getAnalytics()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
