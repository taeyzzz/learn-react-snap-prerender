import React from "react"

import ImageSrc from '../../asset/images/emptyCase.svg'

import ContactUsPageStyled from './styledComponent'

class ContactUsPage extends React.Component{
	render(){
		return (
			<ContactUsPageStyled>
				<div className="banner-text">
					Contact Us page
				</div>
				<div className="banner-image">
					<img src={ImageSrc} />
				</div>
			</ContactUsPageStyled>
		)
	}
}

export default ContactUsPage
