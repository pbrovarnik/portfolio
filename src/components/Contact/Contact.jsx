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
				<Fade
					direction={isMobile ? '' : 'up'}
					duration={1000}
					delay={800}
					triggerOnce
				>
					<div className='contact-wrapper'>
						<p className='contact-wrapper__text'>{cta}</p>
						<Fade direction={isMobile ? '' : 'up'} duration={1000} triggerOnce>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className={`cta-btn cta-btn ${
									isMobile ? 'cta-btn--resume-mobile' : 'cta-btn--resume'
								}`}
								href={`mailto:${email}`}
							>
								{btn}
							</a>
						</Fade>
					</div>
				</Fade>
			</Container>
		</section>
	);
};

export default Contact;
