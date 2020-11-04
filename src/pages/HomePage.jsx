import React from 'react';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<FeaturedProjects />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
