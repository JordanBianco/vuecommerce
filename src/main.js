import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/css/tailwind.css'

import i18n from './assets/i18n'
import moment from 'moment'
import uniqid from 'uniqid';

Vue.prototype.$moment = moment;
Vue.prototype.$uniqid = uniqid;

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
