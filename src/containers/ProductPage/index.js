import React from "react"

import ImageSrc from '../../asset/images/default.png'

import ProductPageStyled from './styledComponent'

class ProductPage extends React.Component{
	render(){
		return (
			<ProductPageStyled>
				<div className="banner-text">
					This is ProductPage
				</div>
				<div className="banner-image">
					<img src={ImageSrc} />
				</div>
			</ProductPageStyled>
		)
	}
}

export default ProductPage
