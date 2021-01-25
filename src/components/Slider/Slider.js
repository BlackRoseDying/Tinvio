import React, { useState, useCallback, useEffect } from 'react';

import classes from './Slider.module.css';

const Slider = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0),
		[imagesPath, setImagesPath] = useState([]);

	const changeCurrentSlide = useCallback(direction => {
		if (direction === 'left' && currentSlide - 1 >= 0) setCurrentSlide(prevState => prevState - 1);
		if (direction === 'right' && currentSlide + 1 <= slides.length - 1) setCurrentSlide(prevState => prevState + 1);
	}, [currentSlide, slides.length]);

	let dotsList = [],
		imageList = [];

	for (let i = 0; i < slides.length; i++)  {
		dotsList.push(<li className={ [classes.Dot, currentSlide === i ? classes.ActiveDot : ''].join('  ') } key={ i }/>);

		if (imagesPath[i]) {
			imageList.push(
				<li key={ i }>
					<img src={ imagesPath[i].default } alt={ slides.alt }/>
				</li>
			)
		}
	}

	useEffect(() => {
		slides.forEach(slide => {
			import(`../../images/${ slide.img }`).then(imagePath => setImagesPath(prevState => {
				return [...prevState, imagePath]
			}));
		});
	}, [slides]);

	return (
		<div className={ classes.Slider }>
			<div className={ classes.ImagesListWrapper }>
				<ul className={ classes.ImagesList } style={{ transform: `translateX(-${currentSlide}00%)` }}>
					{ imageList }
				</ul>
			</div>
			<div className={ classes.NavContentWrapper }>
				<div className={classes.Navigation}>
					<button className={ classes.PrevButton }
					        onClick={ () => changeCurrentSlide('left') }
					        disabled={ currentSlide === 0 }>
						Previous slide
					</button>
					<ul className={ classes.DotsList }>
						{ dotsList }
					</ul>
					<button className={ classes.NextButton }
					        onClick={ () => changeCurrentSlide('right') }
					        disabled={ currentSlide === slides.length - 1 }>
						Next slide
					</button>
				</div>
				<div>
					<h3 className={ classes.Title }>{ slides[currentSlide].title }</h3>
					<p className={ classes.Content }>{ slides[currentSlide].content }</p>
				</div>
			</div>
		</div>
	);
};

export default Slider;