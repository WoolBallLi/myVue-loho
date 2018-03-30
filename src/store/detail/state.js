
let state = {
  result: {
    info: {
      pics: []
    },
    unioned: {
      goods: []
    },
    arguments: [],
    txtcontent: []
  },
  uni: [],
  id: [],
  
  cars:localStorage.cars?JSON.parse(localStorage.cars):[]
}

export default state