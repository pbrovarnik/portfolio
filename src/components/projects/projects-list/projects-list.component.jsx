import React from 'react';
import {
	Zoom,
	Fade,
	Slide,
	Rotate,
	Roll,
	JackInTheBox,
	Flip,
	Bounce,
	AttentionSeeker,
} from 'react-awesome-reveal';

import NewProjectCard from '../project-card/new-project-card.component';

const animationsArray = [
	Zoom,
	Fade,
	Slide,
	Rotate,
	Roll,
	JackInTheBox,
	// Hinge,
	Flip,
	Bounce,
	AttentionSeeker,
];

const randomNum = () => Math.floor(Math.random() * animationsArray.length);

const ProjectsList = ({ projects }) => {
	return (
		// <Zoom center duration={1000} delay={500} triggerOnce>
		<div className='projects-list'>
			{projects.map((project, i) => (
				<NewProjectCard
					project={project}
					key={i}
					Animation={animationsArray[randomNum()]}
				/>
			))}
		</div>
		// </Zoom>
	);
};

export default ProjectsList;
