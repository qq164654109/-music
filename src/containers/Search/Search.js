import {connect} from 'react-redux';
import {getSearchList, getHotList} from '../../redux/actions/search.js';
import Search from '../../components/Search/Search.js';

const mapStateToProps = (state) => {
  return {
    searchList: state.searchList,
    hotList: state.hotList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchList: (fetchData) => {
      dispatch(getSearchList(fetchData))
    },
    getHotList: (fetchData) => {
      dispatch(getHotList(fetchData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
