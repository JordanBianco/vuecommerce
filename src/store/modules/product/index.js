import state from '@/store/modules/product/state'
import * as getters from '@/store/modules/product/getters'
import * as actions from '@/store/modules/product/actions'
import * as mutations from '@/store/modules/product/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}