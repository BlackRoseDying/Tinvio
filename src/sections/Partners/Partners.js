import React from 'react';

import classes from './Partners.module.css';
import PartnersItem from "./PartnersItem/PartnersItem";

const Partners = (props) => {
	const partnersList = [
		{
			alt: 'Go Chicken',
			src: 'GoChicken.png'
		},
		{
			alt: 'Jollibean',
			src: 'Jolliebean.svg'
		},
		{
			alt: 'Bens Cookies',
			src: 'Bens.svg'
		},
		{
			alt: 'Simply Wrapps',
			src: 'SimplyWrapps.png'
		},
		{
			alt: 'Italian',
			src: 'Italian.png'
		}
	];

	return (
		<section>
			<h2 className={ classes.Title }>Trusted by 1000+ partners across APAC</h2>
			<ul className={ classes.PartnersList }>
				{ partnersList.map((partner, index) => {
					return <PartnersItem src={ partner.src } alt={ partner.alt } key={ index }/>
				}) }
			</ul>
		</section>
	);
};

export default Partners;