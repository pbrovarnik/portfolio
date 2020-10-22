import React, { useState, useEffect } from 'react';

import Hero from './Hero/Hero';
import About from './About/About';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

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

	useEffect(() => {
		setHero({ ...heroData });
		setAbout({ ...aboutData });
		setFeaturedProjects([...featureProjectsData]);
		setProjects([...projectsData]);
		setContact({ ...contactData });
		setFooter({ ...footerData });
	}, []);

	return (
		<PortfolioProvider
			value={{ hero, about, featuredProjects, projects, contact, footer }}
		>
			<Hero />
			<About />
			<FeaturedProjects />
			<Projects />
			<Contact />
			<Footer />
		</PortfolioProvider>
	);
};

export default App;
