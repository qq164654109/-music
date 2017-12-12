import React, {Component} from 'react';
import Loading from '../common/Loading.js';

export default class Recommand extends Component {
	componentDidMount() {
		this.props.getRankList();
	}
	render() {
			return (
				<div className="rank">
				{
					!this.props.rankList.isGet ?
					<ul className="rank-menu">
						{
							this.props.rankList.data.map((item, index) => {
								return (
					        <li className="rank-item" key={index}>
					          <div className="rank-img">
					            <img width="100%" height="100%" src={item.imgurl.replace(/\{size\}/g, 400)} alt={item.rankname} />
					          </div>
					          <div className="rank-name">{item.rankname}</div>
					          <div className="rank-arrow">
					            <i className="icon-keyboard_arrow_right"></i>
					          </div>
					        </li>
								)
							})
						}
	        </ul> : <Loading />
				}
				</div>
			)
	}
}
