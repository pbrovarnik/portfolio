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
				{/* <Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
				</Card.Text> */}
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
		// <div className='card'>
		// 	<div className='card__side card__side--front'>
		// 		<div className='card__picture card__picture--1'>&nbsp;</div>
		// 		<h4 className='card__heading'>
		// 			<span className='card__heading-span card__heading-span--1'>
		// 				the sea explore
		// 			</span>
		// 		</h4>
		// 		<div className='card__details'>
		// 			<ul>
		// 				<li>3 day tour</li>
		// 				<li>Up to 30 people</li>
		// 				<li>2 tour guides</li>
		// 				<li>Sleep in cozy hotels</li>
		// 				<li>Difficulty: easy</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// 	<div className='card__side card__side--back card__side--back-1'>
		// 		<div className='card__cta'>
		// 			<div className='card__price-box'>
		// 				<p className='card__price-only'>Only</p>
		// 				<p className='card__price-value'>$297</p>
		// 			</div>
		// 			<a href='#popup' className='btn btn--white'>
		// 				Book now!
		// 			</a>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default ProjectCard;
