import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import Homepage from '../pages/homepage.component';
import ProjectsPage from '../pages/projects.component';

import { PortfolioProvider } from '../context/context';

import {
	heroData,
	aboutData,
	featureProjectsData,
	projectsData,
	contactData,
	footerData,
} from '../data/data';

const App = () => {
	const [hero, setHero] = useState({});
	const [about, setAbout] = useState({});
	const [featuredProjects, setFeaturedProjects] = useState([]);
	const [projects, setProjects] = useState([]);
	const [contact, setContact] = useState({});
	const [footer, setFooter] = useState({});
	const [isMobile, setIsMobile] = useState(false);

	// Pinging Heroku servers for all projects because they take time to spin up.
	const warmUpProjectServers = () => {
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		try {
			projectsData.forEach(async ({ url }) => await fetch(proxyurl + url));
		} catch (error) {
			console.log('Url fetch error', error);
		}
	};

	useEffect(() => {
		setHero({ ...heroData });
		setAbout({ ...aboutData });
		setFeaturedProjects([...featureProjectsData]);
		setProjects([...projectsData]);
		setContact({ ...contactData });
		setFooter({ ...footerData });
		setIsMobile(/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent));
		warmUpProjectServers();
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
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/projects' component={ProjectsPage} />
					<Redirect to='/' />
				</Switch>
			</BrowserRouter>
		</PortfolioProvider>
	);
};

export default App;
