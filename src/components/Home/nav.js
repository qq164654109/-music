import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Nav extends Component {
	render() {
		const navList = [
			{
				text: '个性推荐',
				path: '/home'
			},
			{
				text: '新歌',
				path: '/home/new'
			},
			{
				text: '排行榜',
				path: '/home/rank'
			}
		]
		return (
			<ul className="home-nav">
				{
					navList.map((item, index) => {
						return (
							<li key={index} className={this.props.pathname === item.path ? 'active' : ''}>
								<Link to={item.path}>
									{item.text}
								</Link>
							</li>
						)
					})
				}
			</ul>
		)
	}
}
