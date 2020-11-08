import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

import PortfolioContext from '../../context/context';
import ProjectsList from './ProjectsList/ProjectsList';
import Title from '../Title/Title';

const ProjectsContainer = () => {
	const history = useHistory();
	const { projects } = useContext(PortfolioContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section id='projects'>
			<Link onClick={() => history.goBack()} className='projects__back-btn' to='/'>
				<Fade duration={1000} delay={200} triggerOnce>
					<i className='fas fa-arrow-circle-left' />
				</Fade>
			</Link>

			<div className='projects__heading'>
				<Title title='More projects' />
			</div>

			<Container>
				<ProjectsList projects={projects} />
			</Container>
		</section>
	);
};

export default ProjectsContainer;
