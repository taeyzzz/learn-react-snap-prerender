import React from "react"
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom'

import HeaderStyled from './styledComponent'

class Header extends React.Component{
	render(){
		return (
			<HeaderStyled>
				<Link className="nav-btn" to="/home">Home</Link>
        <Link className="nav-btn" to="/home/product">Product</Link>
        <Link className="nav-btn" to="/home/contact-us">Contact US</Link>
			</HeaderStyled>
		)
	}
}

export default Header
