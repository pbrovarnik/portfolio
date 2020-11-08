import React from 'react';
import { Fade } from 'react-awesome-reveal';

import NewProjectCard from '../project-card/new-project-card.component';

const ProjectsList = ({ projects }) => {
	return (
		<Fade duration={1000} delay={800} triggerOnce>
			<div className='projects-list'>
				{projects.map((project, i) => (
					<NewProjectCard project={project} key={i} />
				))}
			</div>
		</Fade>
	);
};

export default ProjectsList;
