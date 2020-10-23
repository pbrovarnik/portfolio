import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsList = ({ projects }) => {
	return (
		<div className='projects-list'>
			{projects.length ? (
				projects.map((project, i) => <ProjectCard project={project} key={i} />)
			) : (
				<div className='projects-list__invalid-search'>
					Oops, try a different search
				</div>
			)}
		</div>
	);
};

export default ProjectsList;
