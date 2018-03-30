
import {
  SET_RESULT,
  SET_UNI
} from './const'
let mutations = {
  [SET_RESULT](state, result) {
    state.result = result
  },
  [SET_UNI](state, uni) {
    state.uni = uni
  }
}

export default mutations