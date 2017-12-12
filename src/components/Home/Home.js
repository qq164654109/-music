import React, {Component} from 'react'
import HomeHeader from './homeHeader.js'
import Personal from '../../containers/Home/Personal.js'
import Nav from './nav.js'
import New from '../../containers/Home/New.js'
import Rank from '../../containers/Home/Rank.js'
import {Route} from 'react-router-dom';
import {storage} from '../../util/storage.js';
export default class Home extends Component {
	componentWillMount() {
		//拉取本地token
		if (storage.get('token')) {
      //有token发送请求验证token验证成功后
			return;
    } else {
			this.props.history.push({pathname: '/'});
		}
	}
	render() {
		return (
			<div className="home">
				<HomeHeader />
				<Nav pathname={this.props.location.pathname} />
				<div className="main">
					<Route exact path="/home" component={Personal} />
					<Route path="/home/new" component={New} />
					<Route path="/home/rank" component={Rank} />
				</div>
			</div>
		)
	}
}
