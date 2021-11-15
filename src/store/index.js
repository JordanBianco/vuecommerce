import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";
// var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex)

const data = createPersistedState({
  paths: [
    'user',
    'auth'
  ]
})

import cart from '@/store/modules/cart'
import product from '@/store/modules/product'
import category from '@/store/modules/category'
import order from '@/store/modules/order'
import auth from '@/store/modules/auth'
import user from '@/store/modules/user'
import coupon from '@/store/modules/coupon'
import review from '@/store/modules/review'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    product,
    category,
    order,
    auth,
    user,
    coupon,
    review
  },
  plugins: [
    data
    // createPersistedState({
    //   paths: [user],
    //   storage: {
    //     getItem: (key) => ls.get(key),
    //     setItem: (key, value) => ls.set(key, value),
    //     removeItem: (key) => ls.remove(key),
    //   },
    // }),
  ],
})
