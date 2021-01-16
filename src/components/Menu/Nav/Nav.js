import React from 'react';

import Button from "../../UI/Button/Button";
import waveImage from '../../../images/menuWave.png';
import classes from './Nav.module.css';

const Nav = ({ isVisible }) => {
	const navClasses = [classes.Nav, isVisible ? classes.NavActive : ''];

	return (
		<div className={ navClasses.join('  ') }>
			<div className={ classes.Wrapper }>
				<ul className={ classes.NavList }>
					<li>
						<a href="/#0">Home</a>
					</li>
					<li>
						<a href="/#1">Supplier</a>
					</li>
					<li>
						<a href="/#2">About</a>
					</li>
					<li>
						<a href="/#3">Contact</a>
					</li>
				</ul>
			</div>
			<Button type='menuBtn' content='Get Started'/>
			<div className={ classes.Wave } style={{
				backgroundColor: 'transparent',
				backgroundImage: `url(${ waveImage })`,
				backgroundSize: '580px 710px',
				backgroundPosition: 'left -156px bottom',
				backgroundRepeat: 'no-repeat',
				transform: 'rotateY(180deg)'
			}}>
			</div>
		</div>
	);
};

export default Nav;