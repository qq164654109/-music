import React, {Component} from 'react';
import Slider from 'react-slick';
import SongList from '../../containers/Home/SongList.js';

export default class Recommand extends Component {
	componentDidMount() {
		this.props.getSlideList()
	}
	render() {
		let settings = {
			dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
		}
		return (
			<div className="personal">
				<Slider {...settings}>
					{
						!this.props.slideList.isGet ?
						this.props.slideList.data.map((item, index) => {
							return (
								<div key={index}>
					        <img width="100%" height="100%" src={item.imgurl} alt={item.title}/>
					      </div>
							)
						}) : <div />
					}
				</Slider>
				<div className="content-wrap">
					<div className="title">
						<div>推荐歌单</div>
					</div>
					<SongList />
				</div>
			</div>
		)
	}
}
