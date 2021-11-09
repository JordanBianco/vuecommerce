import state from '@/store/modules/order/state'
import * as getters from '@/store/modules/order/getters'
import * as actions from '@/store/modules/order/actions'
import * as mutations from '@/store/modules/order/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}