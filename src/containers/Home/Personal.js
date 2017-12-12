import {connect} from 'react-redux';
import {getSlideList} from '../../redux/actions/ajaxDate.js';
import Personal from '../../components/Home/Personal.js';

const mapStateToProps = (state) =>{
  return {
    slideList: state.slideList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSlideList: () => {
      dispatch(getSlideList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal)
