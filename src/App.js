import React from 'react';

import ProjectsContainer from './components/Projects/ProjectsContainer/ProjectsContainer';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>Pasha's Porfolio</header>
			<ProjectsContainer />
		</div>
	);
};

export default App;
