import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SongList extends Component {
	componentDidMount() {
		this.props.getSongList();
	}
	render() {
		return (
			<ul className="song-menu">
				{
					!this.props.songList.isGet ?
					this.props.songList.data.map((item, index) => {
						if (index < 9) {
							return (
								<li className="song-item" key={index}>
									<Link to={`/album/${item.specialid}`}>
										<div className="img-wrap">
											<img src={item.imgurl.replace(/\{size\}/g,400)} alt="error"/>
										</div>
										<div className="text">{item.specialname}</div>
									</Link>
								</li>
							)
						} else {
							return null
						}
					}) : null
				}
			</ul>
		)
	}
}
