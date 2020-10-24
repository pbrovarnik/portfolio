import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
	const { contact, isMobile } = useContext(PortfolioContext);
	const { cta, btn, email } = contact;

	return (
		<section id='contact'>
			<Container>
				<Title title='Contact' />
				<Fade direction='up' duration={1000} delay={800} triggerOnce>
					<div className='contact-wrapper'>
						<p className='contact-wrapper__text'>{cta}</p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							className={`cta-btn cta-btn ${
								isMobile ? 'cta-btn--hero-mobile' : 'cta-btn--hero'
							}`}
							href={`mailto:${email}`}
						>
							{btn}
						</a>
					</div>
				</Fade>
			</Container>
		</section>
	);
};

export default Contact;
