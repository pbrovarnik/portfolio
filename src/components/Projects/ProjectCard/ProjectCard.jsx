import React from 'react';
import { Card } from 'react-bootstrap';
import './style.scss';

const ProjectCard = (props) => {
	const { name, url } = props.project;
	return (
		// <div>
		// 	<a href={url} target='_blank' rel='noopener noreferrer'>
		// 		{name}
		// 	</a>
		// </div>

		<Card className='projects-list__card'>
			<Card.Body className='projects-list__card--body'>
				<Card.Title className='projects-list__card--title'>{name}</Card.Title>
				<Card.Link
					target='_blank'
					rel='noopener noreferrer'
					className='cta-btn cta-btn--hero projects-list__card--btn'
					href={url}
				>
					Demo
				</Card.Link>
				<Card.Link
					target='_blank'
					rel='noopener noreferrer'
					className='cta-btn text-color-main projects-list__card--btn'
					href='#'
				>
					Code
				</Card.Link>
			</Card.Body>
		</Card>
		// <div className='projects-list__card'>
		// 	<div className='projects-list__card--inner'>
		// 		<div className='projects-list__card--front'>{name}</div>
		// 		<div className='projects-list__card--back'>
		// 			<a
		// 				target='_blank'
		// 				rel='noopener noreferrer'
		// 				className='cta-btn cta-btn--hero projects-list__card--btn'
		// 				href={url}
		// 			>
		// 				Demo
		// 			</a>
		// 			<a
		// 				target='_blank'
		// 				rel='noopener noreferrer'
		// 				className='cta-btn text-color-main projects-list__card--btn'
		// 				href='#'
		// 			>
		// 				Code
		// 			</a>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default ProjectCard;
