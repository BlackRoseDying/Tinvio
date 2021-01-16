import React, { useState } from 'react';

import logo from '../../images/logo-color.svg';

import classes from './Menu.module.css';
import Nav from "./Nav/Nav";

const Menu = props => {
	const [ isVisible, setVisible ] = useState(false);

	const burgerClasses = [isVisible ? classes.BurgerActive : '', classes.Burger];

	return (
		<div className={ classes.Menu }>
			<img src={ logo }
			     alt="Tinvio logo"
			     className={ classes.Logo }
			     onClick={ () => window.scrollTo(0, 0) }/>
			<Nav isVisible={ isVisible }/>
			<div className={ burgerClasses.join('  ') } onClick={ () => setVisible(prevState => !prevState) }>
				<span className={ classes.BurgerTop }/>
				<span className={ classes.BurgerCenter }/>
				<span className={ classes.BurgerBottom }/>
			</div>
		</div>
	);
};

export default Menu;