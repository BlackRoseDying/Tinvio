import React, { useState, useEffect } from 'react';

import classes from './Button.module.css';

const Button = ({ type, content }) => {
	const [pageWidth, setPageWidth] = useState(document.documentElement.clientWidth),
		[buttonClasses, setButtonClasses] = useState('');

	useEffect(() => {
		const resizeListener = () => setPageWidth(document.documentElement.clientWidth);

		window.addEventListener('resize', resizeListener);

		if (pageWidth >= 768 && type === 'menuBtn') setButtonClasses(classes.NavBtn);
		else setButtonClasses(classes.Button);

		return () => {
			window.removeEventListener('resize', resizeListener);
		}
	}, [pageWidth, type]);

	return (
		<button className={ buttonClasses }>{ content }</button>
	);
};

export default Button;