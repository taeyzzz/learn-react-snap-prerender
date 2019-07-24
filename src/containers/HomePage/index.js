import React from "react"

import ImageSrc from '../../asset/images/test.jpg'

import HomePageStyled from './styledComponent'

class HomePage extends React.Component{
	render(){
		return (
			<HomePageStyled>
				<div className="banner-text">
					This is Home page
				</div>
				<div className="banner-image">
					<img src={ImageSrc} />
				</div>
			</HomePageStyled>
		)
	}
}

export default HomePage
