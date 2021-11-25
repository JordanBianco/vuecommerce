import state from '@/store/modules/weather/state'
import * as getters from '@/store/modules/weather/getters'
import * as actions from '@/store/modules/weather/actions'
import * as mutations from '@/store/modules/weather/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}