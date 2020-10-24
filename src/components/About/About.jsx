import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const About = () => {
	const { about, isMobile } = useContext(PortfolioContext);
	const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

	return (
		<section id='about'>
			<Container>
				<Title title='About Me' />
				<Row className='about-wrapper'>
					<Col md={6} sm={12}>
						<Fade
							direction={isMobile ? '' : 'up'}
							duration={800}
							delay={600}
							triggerOnce
							cascade
						>
							<div className='about-wrapper__image-container'>
								<img
									className='rounded shadow-lg about-wrapper__image'
									alt='about'
									src={img}
								/>
							</div>
						</Fade>
					</Col>
					<Col md={6} sm={12}>
						<Fade duration={800} delay={1000} triggerOnce>
							<div className='about-wrapper__info'>
								<p className='about-wrapper__info-text'>{paragraphOne}</p>
								<p className='about-wrapper__info-text'>{paragraphTwo}</p>
								<p className='about-wrapper__info-text'>{paragraphThree}</p>
								<span className='d-flex mt-3 about-wrapper__info-btn'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										className={`cta-btn ${
											isMobile ? 'cta-btn--resume-mobile' : 'cta-btn--resume'
										}`}
										href={resume}
									>
										Resume
									</a>
								</span>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
