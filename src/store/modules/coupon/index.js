import state from '@/store/modules/coupon/state'
import * as getters from '@/store/modules/coupon/getters'
import * as actions from '@/store/modules/coupon/actions'
import * as mutations from '@/store/modules/coupon/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}