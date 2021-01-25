import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = ({ click }) => <div className={ classes.Backdrop } onClick={ click }/>;

export default Backdrop;