import React from 'react';

import Backdrop from "../Backdrop/Backdrop";
import Form from "../../Form/Form";

const Modal = ({ closeModal }) => {
	return (
		<div>
			<Backdrop click={ closeModal }/>
			<Form type='modal' closeModal={ closeModal }/>
		</div>
	);
};

export default Modal;