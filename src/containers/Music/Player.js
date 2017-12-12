import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as musicInfoAction from '../../redux/actions/music';
import Player from '../../components/Music/Player';

const mapStateToProps = (state) => {
    return {
        musicList: state.musicList,
        music: state.music,
        control:state.control,
        progress:state.progress,
        audio:state.audio,
        lyricsUpdate:state.lyricsUpdate,
        spin:state.spin,
        volumeObj:state.volumeObj
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
