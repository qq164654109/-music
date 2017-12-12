import React, {Component} from 'react';
import service from '../../util/service.js';
import API from '../../util/API.js';
import SearchHot from './SearchHot.js';
import SearchList from './SearchList.js';
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      flag: false
    }
    this.setVal = this.setVal.bind(this);
    this.getSearchList = this.getSearchList.bind(this)
  }
  componentDidMount() {
    this.getHotList()
  }
  setVal(e) {
    this.setState({
      keyword: e.target.value
    })
    e.preventDefault()
  }
  getHotList() {
    service.get(`/mobilecdn/${API.searchHot}`).then((res) => {
      this.props.getHotList(res.data.data.info)
    })
  }
  getSearchList(e) {
    let keyword = this.state.keyword;
    if (keyword) {
      service.get(`/mobilecdn/${API.searchResult}?format=json&keyword=${keyword}&page=1&pagesize=20`).then((res) => {
        this.props.getSearchList(res.data.data.info)
        this.setState({
          flag: true
        })
      })
    }
    e.preventDefault()
  }
  render() {
    return(
      <div className="search">
        <div className="search-header">
          <div className="back" onClick={() => window.history.back()}>
            <i className="back icon-keyboard_arrow_left"></i>
          </div>
          <div className="search-input">
            <input className="input-text" type="text" placeholder="歌手 音乐" onChange={this.setVal}/>
          </div>
          <div className="btn" onClick={this.getSearchList}>
            <i className="input-btn icon-search"></i>
          </div>
        </div>
        <div className="search-main" >
          <div className={this.state.flag ? 'hidden' : ''}>
            <SearchHot hotList={this.props.hotList} />
          </div>
          <div className={!this.state.flag ? 'hidden' : ''}>
            <SearchList searchList={this.props.searchList}/>
          </div>
        </div>
      </div>
    )
  }
}
