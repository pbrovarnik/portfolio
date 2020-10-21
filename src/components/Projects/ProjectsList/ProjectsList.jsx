import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsList = ({ projects }) => {
	return (
		<div>
			{projects.map((project, i) => (
				<ProjectCard project={project} key={i} />
			))}
		</div>
	);
};

export default ProjectsList;
