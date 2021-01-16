import React, { useState, useEffect } from 'react';

import classes from './Header.module.css';
import Menu from "../../components/Menu/Menu";

const Header = props => {
	const [pageOffset, setPageOffset] = useState(0);
	
	useEffect(() => {
		const scrollListener = () => setPageOffset(window.pageYOffset);

		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		}
	}, []);

	return (
		<header className={ classes.Header } style={{
			backgroundColor: pageOffset ? '#fff' : 'transparent'
		}}>
			<Menu/>
		</header>
	);
};

export default Header;