import React, { useContext } from 'react';
import Tilty from 'react-tilty';
import { Card } from 'react-bootstrap';

import PortfolioContext from '../../../context/context';

const ProjectCard = (props) => {
	const { name, repo, url } = props.project;
	const { isMobile } = useContext(PortfolioContext);

	return (
		<Tilty
			settings={{
				reverse: true,
				max: 10,
				perspective: isMobile ? false : 200,
				scale: isMobile ? false : 1.07,
				speed: 300,
				transition: true,
				axis: null,
				reset: true,
				easing: 'cubic-bezier(.03,.98,.52,.99)',
			}}
		>
			<div data-tilt>
				<Card
					className='projects-list__card'
					onClick={() => window.open(url, '_blank')}
				>
					<Card.Body className='projects-list__card--body'>
						<Card.Title className='projects-list__card--title'>{name}</Card.Title>
						<Card.Link
							target='_blank'
							rel='noopener noreferrer'
							className={`cta-btn ${
								isMobile ? 'text-color-main--mobile' : 'text-color-main'
							} projects-list__card--btn`}
							href={repo}
						>
							<i className='fas fa-code'></i>
						</Card.Link>
					</Card.Body>
				</Card>
			</div>
		</Tilty>
	);
};

export default ProjectCard;
