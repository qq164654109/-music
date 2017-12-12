import {connect} from 'react-redux';
import {getSongList} from '../../redux/actions/ajaxDate.js';
import SongList from '../../components/Home/SongList.js';

const mapStateToProps = (state) =>{
  return {
    songList: state.songList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSongList: () => {
      dispatch(getSongList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
