import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import PortfolioContext from '../../context/context';

const Header = () => {
	const { hero, isMobile } = useContext(PortfolioContext);
	const { title, name, subtitle, cta } = hero;

	return (
		<section id='hero' className='jumbotron'>
			<Container>
				<Fade
					left={!isMobile}
					bottom={isMobile}
					duration={1000}
					delay={500}
					distance='30px'
				>
					<h1 className='hero-title'>
						{title}
						<span className='text-color-main'>{name}</span>,
						<br />
						{subtitle}
					</h1>
				</Fade>
				<Fade
					left={!isMobile}
					bottom={isMobile}
					duration={1000}
					delay={1000}
					distance='30px'
				>
					<p className='hero-cta'>
						<span
							className={`cta-btn ${
								isMobile ? 'cta-btn--hero-mobile' : 'cta-btn--hero'
							}`}
						>
							<Link to='about' smooth duration={1000}>
								{cta}
							</Link>
						</span>
					</p>
				</Fade>
			</Container>
		</section>
	);
};

export default Header;
