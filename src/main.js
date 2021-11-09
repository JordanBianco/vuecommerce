import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/css/tailwind.css'

import moment from 'moment'

Vue.prototype.$moment = moment;

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
