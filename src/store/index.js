import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";
// var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex)

const data = createPersistedState({
  paths: [
    'user',
    'auth',
    'language',
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
import notification from '@/store/modules/notification'
import language from '@/store/modules/language'
import weather from '@/store/modules/weather'

// Admin
import users from '@/store/modules/admin/users'
import products from '@/store/modules/admin/products'
import event from '@/store/modules/admin/event'


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
    review,
    notification,
    language,
    weather,
    users,
    event,
    products
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
