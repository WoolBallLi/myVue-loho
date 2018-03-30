
import {
  GET_RESULT,
  SET_RESULT,
  SET_UNI
} from './const'

import axios from 'axios';
import config from '../../modules/config'

let actions = {   
  
  [GET_RESULT]({ commit },id) {
    console.log(id)
  axios.get(config.host + "lh/goods/"+ id
  ).then(res => {
      commit(SET_RESULT, res.data.result);
      commit(SET_UNI, res.data.result.unioned[0]);
    })
  }
}
//  methods: {
//   getGoods() {
//     axios.get(this.$root.config.host + "lh/goods/"+'5230').then(res => {
//       // console.log(res.data.result.info);
//       // console.log(res.data.result.info.pics);
//       this.pics = res.data.result.info.pics;
//     });
//   }
// },
export default actions