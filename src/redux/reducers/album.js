const album = (state = {isGet: true, data: {}}, action) => {
  let {type, data} = action;
  switch (type) {
    case 'GET_ALBUM':
      return Object.assign({}, state, {isGet: true});
    case 'SET_ALBUM':
      return Object.assign({}, state, {isGet: false, data: data});
    default:
      return state
  }
}
export {album}
