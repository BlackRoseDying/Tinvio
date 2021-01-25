import React, { useState, useCallback } from 'react';

import phoneImg from '../../images/phone.svg';
import Input from "./Input/Input";
import classes from "./Form.module.css";
import Button from "../UI/Button/Button";

const Form = ({ closeModal, type }) => {
	const [inputsConfig, setInputsConfig] = useState({
		name: {
			type: 'text',
			placeholder: 'Name',
			labelContent: 'Name',
			value: ''
		},
		business: {
			type: 'text',
			placeholder: 'Business Name',
			labelContent: 'Business Name',
			value: ''
		},
		code: {
			type: 'tel',
			placeholder: '+65',
			labelContent: 'Code',
			additionalClass: 'CodeWrapper',
			value: ''
		},
		phone: {
			type: 'tel',
			labelContent: 'Phone',
			additionalClass: 'PhoneWrapper',
			value: ''
		}
	});

	let inputElements = [];

	const changeHandler = useCallback((evt, id) => {
		setInputsConfig[id].value = evt.target.value;
	}, []);

	for (let input in inputsConfig) {
		inputElements.push(
			<Input type={ inputsConfig[input].type }
			       placeholder={ inputsConfig[input].placeholder }
			       id={ input }
			       labelContent={ inputsConfig[input].labelContent }
			       additionalWrapperClass={ inputsConfig[input].additionalClass }
			       value={ inputsConfig[input].value }
			       changeValue={ changeHandler }
			       phoneImg={ inputsConfig[input].additionalClass === 'PhoneWrapper' ? phoneImg : null }
					 key={input}/>
			)
	}

	return (
		<form className={ classes.Form }>
			<div className={ classes.Close } onClick={ closeModal }>Close</div>
			<h3 className={ classes.Title }>Hi, we are Tinvio! And you?</h3>
			<div className={ classes.InputElements }>
				{ inputElements }
				<Button content='Get Started' click={() => {}}/>
				<p>No spam, promise 🙌</p>
			</div>
		</form>
	);
};

export default Form;