import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loading from '../common/Loading.js';

export default class Album extends Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }
  render() {
    return (
      <div className="album">
        <header className="album-header">
          <Link to="/home">
            <i className="back icon-keyboard_arrow_left"></i>
          </Link>
          <span className="title">歌单</span>
        </header>
        {
          !this.props.album.isGet ?
            <div className="content">
              <div className="album-info">
                <div className="background" style={{backgroundImage: `url(${this.props.album.data.info.list.imgurl.replace(/\{size\}/g, 400)})`}}></div>
                <div className="img-wrap">
                    <img width="100%" height="100%" src={this.props.album.data.info.list.imgurl.replace(/\{size\}/g, 400)} alt="error"/>
                </div>
                <div className="test">
                  <p>名称：{this.props.album.data.info.list.specialname}</p>
                  <p>创建人：{this.props.album.data.info.list.nickname}</p>
                  <p>更新时间：{this.props.album.data.info.list.publishtime.split(/\s/)[0]}</p>
                </div>
              </div>
              <ul className="album-menu">
                {
                  this.props.album.data.list.list.info.map((item, index) => {
                    return (
                      <li className="album-item" key={index}>
                        <Link to={'/music/#'+ item.hash}>
                          <div className="name">{item.filename}</div>
                          <p className="sub-name">{item.remark}</p>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div> :
            <div className="content">
              <Loading />
            </div>
          }
      </div>
    )
  }
}
