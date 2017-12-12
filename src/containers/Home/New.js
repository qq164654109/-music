import {connect} from 'react-redux';
import {getNewList} from '../../redux/actions/ajaxDate.js';
import New from '../../components/Home/New.js';

const mapStateToProps = (state) => {
  return {
    newList: state.newList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewList: () => {
      dispatch(getNewList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New)
