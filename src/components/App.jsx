import { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import ErrorPage from '../pages/error';
import Layout from '../pages/layout';
import Homepage from '../pages/homepage.component';
import ProjectsPage from '../pages/projects.component';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, featureProjectsData, projectsData, contactData, footerData } from '../data/data';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
			<Route index element={<Homepage />} />
			<Route path="/projects" element={<ProjectsPage />} />
		</Route>
	),
	{
		basename: '/portfolio',
	}
);

const App = () => {
	const [hero, setHero] = useState({});
	const [about, setAbout] = useState({});
	const [featuredProjects, setFeaturedProjects] = useState([]);
	const [projects, setProjects] = useState([]);
	const [contact, setContact] = useState({});
	const [footer, setFooter] = useState({});
	const [isMobile, setIsMobile] = useState(false);

	// Pinging Heroku servers for all projects because they take time to spin up.
	const warmUpProjectServers = async () => {
		const proxyUrl = 'https://cors-anywhere.herokuapp.com';
		const appUrl = 'https://pashas-clothing-shop.herokuapp.com/';
		try {
			await fetch(`${proxyUrl}/${appUrl}`);
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

		if (import.meta.env.NODE_ENV === 'production') {
			warmUpProjectServers();
		}
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
			}}>
			<RouterProvider router={router} />
		</PortfolioProvider>
	);
};

export default App;
