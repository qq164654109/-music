import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from '../common/Loading.js';
export default class Recommand extends Component {
	componentDidMount() {
		this.props.getNewList();
	}
	render() {
    return (
  		<div className="new">
  			{
					!this.props.newList.isGet ?
					<ul className="new-menu">
			      {
							this.props.newList.data.map((item, index) => {
								return (
					        <li className="new-item" key={index}>
										<Link to={'/music/#'+ item.hash}>
					          	<div className="name">{item.filename}</div>
										</Link>
					        </li>
								)
							})
						}
        	</ul> :
					<Loading />
				}
  		</div>
  	)
	}
}
