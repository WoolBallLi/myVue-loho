
import {
  SET_RESULT,
  SET_UNI,
  CONTROL_CAR_GOODS
} from './const'
let mutations = {
  [SET_RESULT](state, result) {
    state.result = result
  },
  [SET_UNI](state, uni) {
    state.uni = uni
  },
  /* [CONTROL_CAR_GOODS] (state,{id,name,price,num = 1,type = 1}){
    let isHas = state.cars.some((good,i) => {
        if(id == good.id){
            good.num += type==1?num:-num
            if(good.num<=0){
                console.log('木有啦')
                state.cars.splice(i,1)
            }
            return true
        }else{
             return false;
        }
    })
    if(!isHas){
        state.cars.push({
            id,name,price,num,
        })
    }

    console.log(state.cars)
    localStorage.cars = JSON.stringify(state.cars)
} */
}

export default mutations