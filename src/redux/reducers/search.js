const hotList = (state = [], action) => {
  let {type, fetchData} = action;
  switch (type) {
    case 'GET_HOTLIST':
      return [...state, ...fetchData]
    default:
      return state
  }
}
const searchList = (state = [], action) => {
  let {type, fetchData} = action;
  switch (type) {
    case 'GET_SEARCHLIST':
      state = []
      return [...state, ...fetchData]
    default:
      return state
  }
}
export {hotList, searchList}
