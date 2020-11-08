import React, { /*lazy, Suspense,*/ useState, useEffect } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
// import Spinner from './spinners/spinner.component';

import { PortfolioProvider } from '../context/context';

import {
	heroData,
	aboutData,
	featureProjectsData,
	projectsData,
	contactData,
	footerData,
} from '../data/data';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));

const App = () => {
	const [hero, setHero] = useState({});
	const [about, setAbout] = useState({});
	const [featuredProjects, setFeaturedProjects] = useState([]);
	const [projects, setProjects] = useState([]);
	const [contact, setContact] = useState({});
	const [footer, setFooter] = useState({});
	const [isMobile, setIsMobile] = useState(false);

	// Pinging Heroku servers for all projects because they take time to spin up.
	// const warmUpProjectServers = () => {
	// 	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	// 	try {
	// 		projectsData.forEach(async ({ url }) => await fetch(proxyurl + url));
	// 	} catch (error) {
	// 		console.log('Url fetch error', error);
	// 	}
	// };

	useEffect(() => {
		setHero({ ...heroData });
		setAbout({ ...aboutData });
		setFeaturedProjects([...featureProjectsData]);
		setProjects([...projectsData]);
		setContact({ ...contactData });
		setFooter({ ...footerData });
		setIsMobile(/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent));
		// warmUpProjectServers();
	}, []);

	return (
		<PortfolioProvider
			value={{
				hero,
				about,
				featuredProjects,
				projects,
				contact,
				footer,
				isMobile,
			}}
		>
			<BrowserRouter>
				{/* <Suspense fallback={<Spinner />}> */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/projects' component={ProjectsPage} />
					<Redirect to='/' />
				</Switch>
				{/* </Suspense> */}
			</BrowserRouter>
		</PortfolioProvider>
	);
};

export default App;
