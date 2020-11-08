import React from 'react';

import Hero from '../components/hero/hero.component';
import About from '../components/about/about.component';
import FeaturedProjects from '../components/featured-projects/featured-projects.component';
import Contact from '../components/contact/contact.component';
import Footer from '../components/footer/footer.component';

const Homepage = () => {
	return (
		<>
			<Hero />
			<About />
			<FeaturedProjects />
			<Contact />
			<Footer scrollTo='hero' />
		</>
	);
};

export default Homepage;
