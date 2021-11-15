import state from '@/store/modules/review/state'
import * as getters from '@/store/modules/review/getters'
import * as actions from '@/store/modules/review/actions'
import * as mutations from '@/store/modules/review/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}