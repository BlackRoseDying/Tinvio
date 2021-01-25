import React from 'react';

import classes from './Input.module.css';

const Input = ({ type, placeholder, id, labelContent, additionalWrapperClass, value, changeValue, phoneImg }) => {
	return (
		<div className={ [classes.InputWrapper, classes[additionalWrapperClass]].join('  ') }>
			<input type={ type }
			       placeholder={ placeholder }
			       id={ id }
			       className={ classes.Input }
			       value={ value }
			       onChange={ evt => changeValue(evt, id) }
			       required/>
			<label htmlFor={ id } className={ classes.Label }>{ labelContent }</label>
			{
				phoneImg ? <img  className={ classes.Img } src={ phoneImg } alt=''/> : null
			}
		</div>
	);
};

export default Input;