import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class HomeHeader extends Component {
	render() {
		return (
			<div className="home-header">
				<div className="toSearch">
					<Link to="/search">
						<i className="input-btn icon-search"></i>
					</Link>
				</div>
				<div className="name">
					<Link to="/music">
						MUSIC
					</Link>
				</div>
				<div className="user"><i className="icon-user-circle-o"></i></div>
			</div>
		)
	}
}
