import React from 'react';

const ProjectCard = (props) => {
	const { name, url } = props.project;
	return (
		<div>
			<a href={url} target='_blank' rel='noopener noreferrer'>
				{name}
			</a>
		</div>
	);
};

export default ProjectCard;
