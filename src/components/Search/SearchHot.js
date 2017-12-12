import React, {Component} from 'react';
export default class SearchHot extends Component {
  render() {
    return (
      <div className="search-hot">
        <div className="title">热门搜索</div>
        <div className="content">
        {
          this.props.hotList.map((item, index) => {
            if (index < 12) {
              return (
                <span className="keyword" key={index} >{item.keyword}</span>
              )
            } else {
              return null;
            }
          })
        }
        </div>
      </div>
    )
  }
}
