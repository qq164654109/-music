const getHotList = fetchData => {
  return {
    type: 'GET_HOTLIST',
    fetchData
  }
}
const getSearchList = fetchData => {
  return {
    type: 'GET_SEARCHLIST',
    fetchData
  }
}
export {getHotList, getSearchList};
