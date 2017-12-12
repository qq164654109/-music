//总歌单
const albums = (state = {}, action) => {
  switch (action.type) {
    case 'MUSIC_UPDATE':
      return action.data;
    default:
      return state
  }
}
//播放列表
const musicList = (state = [], action) => {
  switch (action.type) {
    case 'MUSIC_ADD':
    let arr = [...state, action.data];
    let hash = {};
    // 去除数组里的重复对象
    let newArr = arr.reduce((item, next) => {
      if (!hash[next.song.hash]) {
        hash[next.song.hash] = true;
        item.push(next);
      }
      return item
    }, []);
    return newArr;
    case 'MUSIC_REMOVE':
        return state.fiter((item) => {
          if (item.song.hash !== action.data){
              return item
          }
        })
    default:
      return state;
  }
}
//当前播放的音乐
const music = (state = {}, action) => {
  switch (action.type) {
    case 'MUSIC_GET_HASH':
      return action.data;
    default:
      return state;
  }
}
//播放控制
const control =(state = {playing: false}, action) => {
  switch (action.type) {
    case 'MUSIC_CONTROL':
      return Object.assign({}, state, action.playing);
    default:
      return state;
  }
}
//播放进度
const progress = (state = {currentTime: 0, percentage: 0}, action) => {
  switch (action.type) {
    case 'MUSIC_PLAYTIME':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
//声音对象
const audio = (state = {}, action) => {
  switch (action.type) {
    case 'MUSIC_AUDIO':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
//音量
const volumeObj = (state = {volume: 0.5}, action) => {
  switch (action.type) {
    case 'MUSIC_VOLUME':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
export {albums, musicList, music, control, progress, audio, volumeObj};
