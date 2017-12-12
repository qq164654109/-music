import {combineReducers} from 'redux';
import {songList} from './songList.js';
import {rankList} from './rankList.js';
import {newList} from './newList.js';
import {slideList} from './slideList.js';
import {hotList, searchList} from './search.js';
import {album} from './album.js';
import {albums, musicList, music, control, progress, audio, volumeObj} from './music';
export default combineReducers({
  slideList,
  songList,
  rankList,
  newList,
  hotList,
  searchList,
  album,
  albums,
  musicList,
  music,
  control,
  progress,
  audio,
  volumeObj
})
