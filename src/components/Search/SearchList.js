import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class SearchList extends Component {
  componentDidMount() {
  }
  render() {
    const l = this.props.searchList.length;
    return (
      <div className="search-list">
        <ul className="search-menu">
          {
            l ? this.props.searchList.map((item, index) => {
              return (
                <li className="search-item" key={index}>
                  <Link to={'/music/#'+ item.hash.toUpperCase()}>
                    <div className="name">{item.filename}</div>
                    <div className="favor">
                      <i className="icon-favorite"></i>
                    </div>
                  </Link>
                </li>
              )
            }) : <li className="search-item">
              <div className="no-found">无匹配歌曲</div>
            </li>
          }
        </ul>
      </div>
    )
  }
}
