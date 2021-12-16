import state from '@/store/modules/admin/products/state'
import * as getters from '@/store/modules/admin/products/getters'
import * as actions from '@/store/modules/admin/products/actions'
import * as mutations from '@/store/modules/admin/products/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}