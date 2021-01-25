import React from 'react';

import classes from "./Background.module.css";
import boxesImg from "../../../images/Boxes.png";
import fruitsImg from "../../../images/Fruits.png";

const Background = (props) => {
	return (
		<div className={ classes.Background }>
			<div className={ classes.Boxes } style={{ backgroundImage: `url(${boxesImg})` }}/>
			<div className={ classes.Fruits } style={{ backgroundImage: `url(${fruitsImg})` }}/>
		</div>
	);
};

export default Background;