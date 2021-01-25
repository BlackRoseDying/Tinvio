import React, { useState } from 'react';

import { useWindowSize } from "../../hooks/screenSize";

import classes from './SliderSection.module.css';
import waveImage from '../../images/SliderWave.png';
import Slider from "../../components/Slider/Slider";

const SliderSection = (props) => {
	const windowWidth = useWindowSize();

	const slidesConfig = useState([
		{
			title: 'All your orders in one place',
			content: 'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform',
			img: 'Orders.png',
			alt: 'Orders example'
		},
		{
			title: '2 All your orders in one 2222',
			content: 'Say 222 more to chunky emails and messy WhatsApp messages. Receive and manage your orders in 222 platform',
			img: 'Payment.png',
			alt: 'Payment example'
		},
		{
			title: '3 All your orders in one 3333',
			content: 'Say 333 more to chunky emails and messy WhatsApp messages. Receive and manage your orders in 333 platform',
			img: 'Analytics.png',
			alt: 'Analytics example'
		}
	])[0];

	return (
		<section className={ classes.SliderSection }>
			<div className={ classes.Wave } style={ windowWidth >= 768 ? { backgroundImage: `url(${ waveImage })` } : null }/>
			<Slider slides={ slidesConfig }/>
		</section>
	);
};

export default SliderSection;