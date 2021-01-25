import React from 'react';

import classes from './Button.module.css';

const Button = ({ content, click, btnClass }) => {
	return (
		<button className={ classes[btnClass || 'Button'] } onClick={ click }>
			{ content }
		</button>
	);
};

export default Button;