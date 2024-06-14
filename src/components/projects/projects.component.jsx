import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

import PortfolioContext from '../../context/context';
import ProjectsList from './projects-list/projects-list.component';
import Title from '../title/title.component';

const ProjectsContainer = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { projects } = useContext(PortfolioContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleBackButon = () => {
		if (location.state && location.state.prevPath) {
			navigate(-1);
		} else {
			navigate('/');
		}
	};

	return (
		<section id="projects">
			<div className="projects__heading">
				<div onClick={handleBackButon} className="projects__back-btn">
					<Fade direction="left" duration={1000} delay={300} triggerOnce>
						<i className="fas fa-arrow-circle-left" />
					</Fade>
				</div>
				<Title title="More projects" />
			</div>

			<Container>
				<ProjectsList projects={projects} />
			</Container>
		</section>
	);
};

export default ProjectsContainer;
