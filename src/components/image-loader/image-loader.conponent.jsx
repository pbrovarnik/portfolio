import React, { useState } from 'react';

import ImageSpinner from '../spinners/image-spinner.component';

const ImageLoader = ({ alt, src, ...props }) => {
	const [loaded, setLoaded] = useState(false);

	const img = document.createElement('img');
	img.src = src;
	img.onload = () => setLoaded(true);

	return (
		<>
			{loaded ? (
				<img src={src} alt={alt} {...props} />
			) : (
				<ImageSpinner {...props} />
			)}
		</>
	);
};

export default ImageLoader;
