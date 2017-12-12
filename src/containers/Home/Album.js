import {connect} from 'react-redux';
import {getAlbum} from '../../redux/actions/ajaxDate.js';
import Album from '../../components/Home/Album.js';

const mapStateToProps = (state) =>{
  return {
    album: state.album
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbum: (id) => {
      dispatch(getAlbum(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
