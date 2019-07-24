import React from "react"
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom'

import HomePage from '../HomePage/Loadable'
import ProductPage from '../ProductPage/Loadable'
import NavHeader from '../../components/NavHeader/Loadable'
import ContactUsPage from '../ContactUsPage/Loadable'

import ApplicationLayoutStyled from './styledComponent'

class ApplicationLayout extends React.Component{
	render(){
		return (
			<ApplicationLayoutStyled>
				<NavHeader />
				<Switch>
					<Route exact path='/home' component={HomePage} />
					<Route exact path='/home/product' component={ProductPage} />
					<Route exact path='/home/contact-us' component={ContactUsPage} />
				</Switch>
			</ApplicationLayoutStyled>
		)
	}
}

export default ApplicationLayout
