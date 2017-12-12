import React, {Component} from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.onDuration = this.onDuration.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.getCurrentSong = this.getCurrentSong.bind(this);
        this.onEnd = this.onEnd.bind(this);
  }
  onDuration(e) {
    localStorage.setItem('duration', e);
  }
  getCurrentSong() {
    let musicList = this.props.musicList;
    let hash = this.props.music.hash;
    let currentSong = null;
    if (musicList.length > 0 && hash) {
      musicList.map((item) => {
        if (item.song.hash === hash) {
          currentSong = item;
        };
        return '1'
      });
    };
    return currentSong;
  }
  onProgress(state) {
    let currentLyrics = this.getCurrentSong().lyrics;
    this.props.musicInfoActions.updateProgress({currentTime: state.playedSeconds, percentage: state.played});
    for (let i = 0, l = currentLyrics.length; i < l; i++) {
      if (state.playedSeconds > currentLyrics[i][0]) {
        this.props.musicInfoActions.updateLyrics({updateLyrics: currentLyrics[i][1], time: currentLyrics[i][0], index: i})
      }
    }
  }
  onEnd(e) {
    let musicList = this.props.musicList;
    let hash = this.props.music.hash;
    let nowIndex;
    if (musicList.length > 1) {
      for (let i = 0; i < musicList.length; i++) {
        if (musicList[i].song.hash === hash) {
          nowIndex = i
        }
      }
      let currentIndex = nowIndex + 1 > musicList.length - 1 ? 0 : ++nowIndex;
      let currentSong = musicList[currentIndex].song;
      this.props.musicInfoActions.getMusic({hash: currentSong.hash});
      if (window.location.pathname === '/play/') {
        let reg = new RegExp(window.location.href.split('#')[1]);
        let url = window.location.href.replace(reg, currentSong.hash);
        window.location.replace(url);
      }
      this.props.musicInfoActions.fetchMusic(currentSong.hash);
    } else {
      this.props.musicInfoActions.control({playing: false});
    }
  }
  componentDidMount() {
    this.props.musicInfoActions.audioObj({player: this.refs.player});
  }
  render() {
    return (
      <div style = {{display: 'none'}}>
        <ReactPlayer volume={this.props.volumeObj.volume} url={this.getCurrentSong()?this.getCurrentSong().song.url:null} controls playing={this.props.control.playing} ref="player"
        onProgress={this.onProgress} onDuration={this.onDuration} onEnded={this.onEnd} />
      </div>
    )
  }
}
