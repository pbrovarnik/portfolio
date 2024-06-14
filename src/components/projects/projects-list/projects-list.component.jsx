import { Fade } from 'react-awesome-reveal';

import ProjectCard from '../project-card/project-card.component';

const ProjectsList = ({ projects }) => {
	return (
		<Fade duration={1000} delay={800} triggerOnce>
			<div className="projects-list">
				{projects.map((project, i) => (
					<ProjectCard project={project} key={i} />
				))}
			</div>
		</Fade>
	);
};

export default ProjectsList;
