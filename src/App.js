import React from 'react';
import './App.css';

import projects from './projectsData';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>Hello from react</header>
			<ProjectsList />
		</div>
	);
}

function ProjectsList() {
	return projects.map((project, i) => <ProjectCard project={project} key={i} />);
}

function ProjectCard(props) {
	const { name, url } = props.project;
	return (
		<div>
			<a href={url} target='_blank' rel='noopener noreferrer'>
				{name}
			</a>
		</div>
	);
}

export default App;
