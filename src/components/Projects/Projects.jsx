import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';

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
		<section id='projects'>
			<Container>
				<SearchBox
					placeholder='search projects'
					handleChange={(e) => setSearchValue(e.target.value)}
					handleKeyPress={handleKeyPress}
				/>
				<ProjectsList projects={filteredProjects} />
			</Container>
		</section>
	);
};

export default ProjectsContainer;
