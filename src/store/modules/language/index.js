import state from '@/store/modules/language/state'
import * as getters from '@/store/modules/language/getters'
import * as actions from '@/store/modules/language/actions'
import * as mutations from '@/store/modules/language/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}