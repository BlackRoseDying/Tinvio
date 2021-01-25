import React, { useState, useEffect } from 'react';

import { useWindowSize } from "../../hooks/screenSize";
import waveImage from '../../images/menuWave.png';
import homePageImage from '../../images/homePageShadow.png';
import Button from "../../components/UI/Button/Button";
import Background from "./Background/Background";
import classes from './Hero.module.css';

const Hero = (props) => {
	const pageWidth = useWindowSize(),
		[containerStyles, setContainerStyles] = useState({});

	useEffect(() => {
		if (pageWidth >= 768) setContainerStyles({
			backgroundImage: `url(${ waveImage })`
		});
		else setContainerStyles({});
	}, [pageWidth]);

	return (
		<section className={ classes.Hero } style={ containerStyles }>
			<div className={ classes.Container }>
				<h3 className={ classes.Subtitle }>FOR A SMARTER SUPPLY CHAIN</h3>
				<h2 className={ classes.Title }>Take your business to the next level with Tinvio’s Supplier Platform</h2>
				<Button content='Get Started Now' click={() => {}}/>
				<p className={ classes.TextNearButton } >Yes, it’s free 🎉</p>
				<Background/>
				<div className={ classes.HomePage } style={{ backgroundImage: `url(${homePageImage})` }}/>
			</div>
		</section>
	);
};

export default Hero;