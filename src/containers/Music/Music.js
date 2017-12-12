import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as musicInfoAction from '../../redux/actions/music.js';
import Music from '../../components/Music/Music.js';

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);
