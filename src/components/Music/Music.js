import React, {Component} from 'react';
import {storage} from '../../util/storage.js';
import {formatTime} from '../../util/tools';
import Loading from '../../components/common/Loading';
import noData from '../../static/images/nodata.png';
import svg1 from '../../static/css/svg/svg-1.svg';
import svg2 from '../../static/css/svg/svg-2.svg';

export default class Player extends Component {
    static defaultProps = {
        background: '-webkit-linear-gradient(#e9203d, #e9203d) no-repeat, #ddd'
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            modal: false, // 弹层默认不显示
            dot: false,
            volumed: true, // 是否静音,
            progress: storage.get('currentVolume') ? storage.get('currentVolume') * 100 + '%' : this.props.volumeObj.volume * 100 + '%', // 声音进度条进度
        };
        this.onChange = this.onChange.bind(this);
        this.playPause = this.playPause.bind(this);
        this.showMusicList = this.showMusicList.bind(this);
        this.getCurrentSong = this.getCurrentSong.bind(this);
        this.playPrev = this.playPrev.bind(this);
        this.playNext = this.playNext.bind(this);
        this.openDot = this.openDot.bind(this);
        this.closeDot = this.closeDot.bind(this);
        this.setSVG = this.setSVG.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.singerInfo = this.singerInfo.bind(this);
    }

    componentDidMount() {
        // const hash = this.props.match.params.id;
        const hash = this.props.location.hash.replace(/#/, '');
        if (hash && hash !== 'null' && hash !== this.props.music.hash) {
            this.props.musicInfoActions.getMusic({hash: hash});
            this.props.musicInfoActions.fetchMusic(hash);
            this.props.musicInfoActions.control({playing: true});
        }
    }

    playPause() {
        this.props.musicInfoActions.control({playing: !this.props.control.playing});
    }

    onChange(e) {
        this.props.musicInfoActions.control({playing: true});
        this.props.audio.player.seekTo(parseFloat(e.target.value));
    }

    showMusicList() {
        this.setState({modal: true});
    }

    changeShowModal(e) {
        this.setState({modal: e.modal});
    }

    getCurrentSong() {
        const musicList = this.props.musicList;
        const hash = this.props.music.hash;
        let currentSong = null;
        if (musicList.length > 0 && hash) {
            musicList.map((ele) => {
                if (ele.song.hash === hash) {
                    currentSong = ele;
                }
                return ele
            })
        }
        return currentSong;
    }

    playPrev() {
        const hash = this.props.music.hash;
        const musicList = this.props.musicList;
        let index = 0;
        if (musicList.length > 0) {
            for (let i = 0; i < musicList.length; i++) {
                if (musicList[i].song.hash === hash) {
                    index = i;
                }
            }
        }
        let currentIndex = index - 1 < 0 ? musicList.length - 1 : --index;
        const currentSong = musicList[currentIndex].song;
        this.props.musicInfoActions.getMusic({hash: currentSong.hash});
        this.props.history.replace('#' + currentSong.hash);
        this.props.musicInfoActions.fetchMusic(currentSong.hash);
    }

    playNext() {
        const hash = this.props.music.hash;
        const musicList = this.props.musicList;
        let index = 0;
        if (musicList.length > 0) {
            for (let i = 0; i < musicList.length; i++) {
                if (musicList[i].song.hash === hash) {
                    index = i;
                }
            }
        }
        let currentIndex = index + 1 > musicList.length - 1 ? 0 : ++index;
        const currentSong = musicList[currentIndex].song;
        this.props.musicInfoActions.getMusic({hash: currentSong.hash});
        this.props.history.replace('#' + currentSong.hash);
        this.props.musicInfoActions.fetchMusic(currentSong.hash);
    }

    openDot() {
        this.setState({dot: true,modal: false});
    }

    closeDot() {
        this.setState({dot: false});
    }

    setSVG() {
        return this.state.volumed ? {backgroundImage: `url(${svg1})`} : {backgroundImage: `url(${svg2})`};
    }

    setVolume() {
        const currentVolume = storage.get('currentVolume');
        this.setState({volumed: !this.state.volumed});
        if (this.state.volumed) {
            this.props.musicInfoActions.volumeControl({volume: 0});
            this.setState({progress: 0});
        } else {
            if (currentVolume && currentVolume !== null) {
                this.props.musicInfoActions.volumeControl({volume: parseFloat(currentVolume)});
                this.setState({progress: parseFloat(currentVolume) * 100 + '%'});
            } else {
                this.setState({progress: 0.5 * 100 + '%'});
                this.props.musicInfoActions.volumeControl({volume: 0.5});
            }
        }
    }

    handleStart(e) {
        e.preventDefault();
        const touchObj1 = e.changedTouches[0];
        const x = touchObj1.clientX;
        const l = e.target.offsetLeft;
        const leftVal = x - l;
        this.setState({
            leftVal: leftVal,
            sliderWidth: this.refs.slider.offsetWidth,
            barWidth: e.target.offsetWidth,
        })
    }

    handleTouchMove(e) {
        const {leftVal, sliderWidth, barWidth} = this.state;
        const touchObj2 = e.changedTouches[0];
        const thisX = touchObj2.clientX;
        let barLeft = thisX - leftVal;
        if (barLeft < 0) {
            barLeft = 0;
        } else if (barLeft > sliderWidth - barWidth) {
            barLeft = sliderWidth - barWidth
        }
        const currentValue = sliderWidth - barWidth > 0 ? (barLeft / ( sliderWidth - barWidth)).toFixed(2) : 0.5;
        if (currentValue >= 0 && currentValue <= 1) {
            parseFloat(currentValue) === 0 ? this.setState({volumed: false}) : this.setState({volumed: true});
            this.props.musicInfoActions.volumeControl({volume: parseFloat(currentValue)});
            storage.set('currentVolume', currentValue);
        } else {
            this.props.musicInfoActions.volumeControl({volume: 0.5});
        }
        this.setState({progress: barLeft + 'px'});
    }
    singerInfo(id) {
        this.props.history.push({pathname: '/singer/info', state: {singerId: id}});
    }

    render() {
        if (this.getCurrentSong()) {
            let currentSong = this.getCurrentSong().song;
            let albumImg = currentSong.imgUrl.replace(/\{size\}/g, 400);
            let currentTime = formatTime(this.props.progress.currentTime);
            let duration = formatTime(storage.get('duration'));
            let percentage = this.props.progress.percentage;
            let rangeStyle = `${percentage * 100}% 100%`;
            if (currentSong.error) {
                return (
                    <div className="container">
                        <div className="no-data">
                            <img src={noData} alt="error"/>
                            <span>很抱歉，当前音乐{currentSong.error}！</span>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="music">
                        <div className="background" style={{backgroundImage: `url(${albumImg})`}}></div>
                        <div className="header">
                        <div className="back" onClick={() => window.history.back()}>
                          <i className="back icon-keyboard_arrow_left"></i>
                        </div>
                        </div>
                        <div className="content">
                          <div className="container-inner">
                            <div className="songName">{currentSong.songName}</div>
                            <div className="singerName"> - {currentSong.singerName} -</div>
                            <div className="songPic">
                              <img width="100%" height="100%" src={albumImg}  alt="error"/>
                            </div>
                            <div className="player-control">
                              <div className="player-time">
                                <div className="time_left">{currentTime}</div>
                                <div className="player-range">
                                  <input type='range' min={0} max={1} step='any' value={percentage || '0'}
                                    style={{background: this.props.background, backgroundSize: rangeStyle}} onChange={this.onChange}/>
                                </div>
                              <div className="time_right">{duration}</div>
                            </div>
                            <div className="player-btn">
                              <i className="icon-prev" onClick={this.playPrev}></i>
                              <i onClick={this.playPause} className={this.props.control.playing ? 'icon-pause' : 'icon-play'}></i>
                              <i className="icon-next" onClick={this.playNext}></i>
                              <i className="icon-list" onClick={this.showMusicList}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                )
            }
        } else if (!this.props.music.hash || this.props.music.hash === 'null') {
            return (
                <div className="container">
                    <div className="no-data">
                        <img src={noData} alt="error"/>
                        <span>当前无音乐！</span>
                    </div>
                </div>
            )
        } else {
            return (
                <Loading/>
            )
        }
    }
}
