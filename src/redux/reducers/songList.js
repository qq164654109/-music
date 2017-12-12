const songList = (state = {isGet: true, data: []}, action) => {
  let {type, data} = action;
  switch (type) {
    case 'SET_SONGLIST':
      return Object.assign({}, state, {isGet: false, data: data})
    default:
      return state
  }
}

export {songList}
