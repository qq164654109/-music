import {connect} from 'react-redux';
import {getRankList} from '../../redux/actions/ajaxDate.js'
import Rank from '../../components/Home/Rank.js';

const mapStateToProps = (state) => {
  return {
    rankList: state.rankList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRankList: () => {
      dispatch(getRankList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank)
