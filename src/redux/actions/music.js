import service from '../../util/service.js';
import API from '../../util/API.js';
//获取歌单
const updateMusic = (data) => {
  return {
    type: 'MUSIC_UPDATE',
    data
  }
}
//当前播放列表
const addMusic = (data) => {
  return {
    type: 'MUSIC_ADD',
    data
  }
}
//移除播放列表歌曲
const removeMusic = (data) => {
  return {
    type: 'MUSIC_REMOVE',
    data
  }
}
// 移除播放列表所有歌曲
const removeMusicAll = () => {
    return {
        type: 'MUSIC_REMOVE_ALL'
    }
};
//获取音乐hash
const getMusic = (data) => {
  return {
    type: 'MUSIC_GET_HASH',
    data
  }
}
//控制音乐播放
const control = (playing) => {
  return {
    type: 'MUSIC_CONTROL',
    playing
  }
}
//播放进度
const updateProgress = (data) => {
  return {
    type: 'MUSIC_PLAYTIME',
    data
  }
}
//传递音乐对象
const audioObj = (data) => {
  return {
    type: 'MUSIC_AUDIO',
    data
  }
}
// 歌词同步
const updateLyrics = (data) => {
    return {
        type: 'MUSIC_UPDATELYRICS',
        data
    }
};
//请求数据
const fetchMusic = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_MUSIC'
    })
    service.get(`/kugou/${API.song_detail}?cmd=playInfo&hash=${id}`).then((res) => {
      let musicObj = {song: res.data, lyrics:''}
      dispatch(addMusic(musicObj));
    })
  }
}
//音量控制
const volumeControl = (data) => {
  return {
    type: 'MUSIC_VOLUME',
    data
  }
}
export {updateMusic, addMusic, removeMusic, removeMusicAll, getMusic, control, updateProgress, audioObj, updateLyrics, fetchMusic, volumeControl}
