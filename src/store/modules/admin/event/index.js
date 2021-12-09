import state from '@/store/modules/admin/event/state'
import * as getters from '@/store/modules/admin/event/getters'
import * as actions from '@/store/modules/admin/event/actions'
import * as mutations from '@/store/modules/admin/event/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}