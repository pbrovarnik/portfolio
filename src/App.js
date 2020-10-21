import React, { useState } from 'react';
import './App.css';

import projects from './projectsData';

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>Pasha's Porfolio</header>
			<ProjectsContainer />
		</div>
	);
};

const ProjectsContainer = () => {
	const [searchValue, setSearchValue] = useState('');
	const filteredProjects = projects.filter(({ name }) =>
		name.toLowerCase().includes(searchValue.toLowerCase())
	);

	const handleKeyPress = (e) => {
		if (filteredProjects.length === 1 && e.key === 'Enter') {
			const [{ url }] = filteredProjects;
			window.open(url, '_blank');
		}
	};

	return (
		<div>
			<SearchBox
				placeholder='search projects'
				handleChange={(e) => setSearchValue(e.target.value)}
				handleKeyPress={handleKeyPress}
			/>
			<ProjectsList projects={filteredProjects} />
		</div>
	);
};

const SearchBox = ({ placeholder, handleChange, handleKeyPress }) => (
	<input
		type='search'
		placeholder={placeholder}
		onChange={handleChange}
		onKeyPress={handleKeyPress}
	/>
);

const ProjectsList = ({ projects }) => {
	return (
		<div>
			{projects.map((project, i) => (
				<ProjectCard project={project} key={i} />
			))}
		</div>
	);
};

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

export default App;
