import React from 'react';

const ImageSpinner = ({ height = '1430', width = '2880', className }) => {
	return (
		<div className={`image-spinner-container ${className}`}>
			<svg height={height} width={width}>
				<g>
					<rect fill='#c9faea' height='100%' width='100%' />
				</g>
			</svg>
			<div className='spinner'></div>
		</div>
	);
};

export default ImageSpinner;
