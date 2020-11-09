import React from 'react';
import { Card } from 'react-bootstrap';

import ImageLoader from '../../image-loader/image-loader.conponent';

const ProjectCard = ({ project }) => {
	const { name, img, repo, url } = project;

	return (
		<Card className='project__card'>
			<div className='project__card--img-container'>
				<a
					href={url}
					rel='noopener noreferrer'
					target='_blank'
					aria-label='bitbucket'
					className='project__card--img'
				>
					<Card.Img as={ImageLoader} src={img} />
				</a>
			</div>
			<Card.Body className='project__card--body'>
				<a href={url} rel='noopener noreferrer' target='_blank'>
					<Card.Title className='project__card--title'>{name}</Card.Title>
				</a>

				<a
					href={repo}
					rel='noopener noreferrer'
					target='_blank'
					aria-label='bitbucket'
					className='project__card--link'
				>
					<i className='fas fa-code project__card--icon' />
				</a>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
