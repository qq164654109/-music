import service from '../../util/service.js';
import API from '../../util/API.js';
//轮播图
const setSlideList = (data) => {
  return {
    type: 'SET_SLIDELIST',
    data
  };
};
const getSlideList = () => {
  return (dispatch) => {
    service.get(`/kugou/${API.new_song}`).then((res) => {
      dispatch(setSlideList(res.data.banner))
		})
  };
};
//新歌列表
const setNewList = (data) => {
  return {
    type: 'SET_NEWLIST',
    data
  };
};
const getNewList = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_NEWLIST'
    })
    service.get(`/kugou/${API.new_song}`).then((res) => {
			dispatch(setNewList(res.data.data))
		});
  };
};
//所有歌单列表
const setSongList = (data) => {
  return {
    type: 'SET_SONGLIST',
    data
  };
};
const getSongList = () => {
  return (dispatch) => {
    service.get(`/kugou/${API.song_play}`).then((res) => {
			dispatch(setSongList(res.data.plist.list.info))
		});
  };
};
//歌单内容列表
const setAlbum = (data) => {
  return {
    type: 'SET_ALBUM',
    data
  };
};
const getAlbum = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_ALBUM'
    })
    service.get(`/kugou/${API.song_playlist}/${id}?json=true`).then(res => {
      dispatch(setAlbum(res.data))
    });
  };
};
//排行榜列表
const setRankList = (data) => {
  return {
    type: 'SET_RANKLIST',
    data
  }
};
const getRankList = () => {
  return (dispatch) => {
    service.get(`/kugou/${API.rank}`).then((res) => {
      dispatch(setRankList(res.data.rank.list))
    });
  };
};
export {getSlideList, getNewList, getSongList, getRankList, getAlbum};
