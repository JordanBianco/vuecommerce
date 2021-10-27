import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from '@/store/modules/cart'
import product from '@/store/modules/product'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    product
  }
})
