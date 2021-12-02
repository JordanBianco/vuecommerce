import state from '@/store/modules/admin/users/state'
import * as getters from '@/store/modules/admin/users/getters'
import * as actions from '@/store/modules/admin/users/actions'
import * as mutations from '@/store/modules/admin/users/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}