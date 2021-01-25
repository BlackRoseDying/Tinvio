import React, { useState, useCallback } from 'react';

import Button from "../../UI/Button/Button";
import waveImage from '../../../images/menuWave.png';
import classes from './Nav.module.css';
import { useWindowSize } from "../../../hooks/screenSize";
import Modal from "../../UI/Modal/Modal";

const Nav = ({ isVisible }) => {
	const navClasses = [classes.Nav, isVisible ? classes.NavActive : ''],
		[showModal, setShowModal] = useState(false),
		pageWidth = useWindowSize(),
		btnClass = pageWidth >= 768 ? 'NavBtn' : 'Button';

	let buttonClickedHandler = useCallback(() => {
		if (pageWidth >= 768) {
			setShowModal(prevState => {
				document.body.style.overflow = !prevState ? 'hidden' : 'auto';

				return !prevState;
			});
		}
	}, [pageWidth]);

	return (
		<div className={ navClasses.join('  ') }>
			{ showModal ? <Modal closeModal={ buttonClickedHandler }/> : null }
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
			<Button type='menuBtn' content='Get Started' btnClass={ btnClass } click={ buttonClickedHandler }/>
			<div className={ classes.Wave } style={ {
				backgroundColor: 'transparent',
				backgroundImage: `url(${ waveImage })`,
				backgroundSize: '580px 710px',
				backgroundPosition: 'left -156px bottom',
				backgroundRepeat: 'no-repeat',
				transform: 'rotateY(180deg)'
			} }>
			</div>
		</div>
	);
};

export default Nav;