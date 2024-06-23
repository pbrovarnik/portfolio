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
		basename: import.meta.env.BASE_URL,
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

	useEffect(() => {
		setHero({ ...heroData });
		setAbout({ ...aboutData });
		setFeaturedProjects([...featureProjectsData]);
		setProjects([...projectsData]);
		setContact({ ...contactData });
		setFooter({ ...footerData });
		setIsMobile(/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent));
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
