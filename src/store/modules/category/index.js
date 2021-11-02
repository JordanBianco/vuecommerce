import state from '@/store/modules/category/state'
import * as getters from '@/store/modules/category/getters'
import * as actions from '@/store/modules/category/actions'
import * as mutations from '@/store/modules/category/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}