import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsList = ({ projects }) => {
	return (
		<Zoom center duration={1500} delay={700} triggerOnce>
			<div className='projects-list'>
				{projects.length ? (
					projects.map((project, i) => <ProjectCard project={project} key={i} />)
				) : (
					<div className='projects-list__invalid-search'>
						Oops, try a different search
					</div>
				)}
			</div>
		</Zoom>
	);
};

export default ProjectsList;
