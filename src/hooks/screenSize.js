import { useState, useEffect } from 'react';

export const useWindowSize = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		console.log('LISTENER ADDED');
		const changeWidth = () => setWidth(window.innerWidth);

		window.addEventListener('resize', changeWidth);

		return () => {
			window.removeEventListener('resize', changeWidth);
		}
	}, []);

	return width;
};