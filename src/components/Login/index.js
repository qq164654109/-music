import React, { Component } from 'react';
import {storage} from '../../util/storage.js';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassWord = this.handleChangePassWord.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    //拉取本地token
    if (storage.get('token')) {
      //有token发送请求验证token验证成功后
      this.props.history.push({pathname: '/home'});
    }
  }
  handleChangeUserName(e) {
    this.setState({
      username: e.target.value
    })
  }
  handleChangePassWord(e) {
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    //网络请求
    if (this.state.username === '' || this.state.password === '') {
      alert('检查填写')
    } else {
      //发送网络请求 返回数据 token 用户信息等
      let token = '2dasd2';
      let userinfo = {
        username: this.state.username
      };
      //存储在storage里
      storage.set('token', token);
      storage.set('userinfo', userinfo);
      this.props.history.push({pathname: '/home'});
    }
  }
  render() {
    return (
      <div className="login">
        <div className="form-wrap">
          <div className="logo">
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="group">
              <input type="text" value={this.state.username} onChange={this.handleChangeUserName} />
            </div>
            <div className="group">
              <input type="password" value={this.state.password} onChange={this.handleChangePassWord}/>
            </div>
            <div className="group">
              <input type="submit" value="登陆" />
            </div>
            <div className="tip">* 输入任意账号密码</div>
          </form>
        </div>
      </div>
    )
  }
}
