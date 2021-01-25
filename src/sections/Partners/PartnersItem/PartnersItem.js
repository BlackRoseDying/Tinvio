import React, { useState } from 'react';

const PartnersItem = ({ src, alt }) => {
	const [imagePath, setImagePath] = useState(null);

	import(`../../../images/${src}`).then(image => {
		return setImagePath(image.default)
	});

	return (
		<li>
			{ imagePath ? <img src={ imagePath } alt={ alt }/> : null}
		</li>
	);
};

export default PartnersItem;