import React, { useContext, useState } from 'react';

import PortfolioContext from '../../context/context';
import SearchBox from '../SearchBox/SearchBox';
import ProjectsList from './ProjectsList/ProjectsList';

const ProjectsContainer = () => {
	const { projects } = useContext(PortfolioContext);
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

export default ProjectsContainer;
