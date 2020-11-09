import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

import PortfolioContext from '../../context/context';
import Title from '../title/title.component';
import ImageLoader from '../image-loader/image-loader.conponent';

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
							duration={isMobile ? 1700 : 1000}
							delay={600}
							triggerOnce
						>
							<div className='about-wrapper__image-container'>
								<ImageLoader
									className='rounded shadow-lg about-wrapper__image'
									alt='about'
									src={img}
									height={'3088'}
									width={'2320'}
								/>
							</div>
						</Fade>
					</Col>
					<Col md={6} sm={12}>
						<Fade duration={1000} delay={1000} triggerOnce>
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
									<Link
										offset={isMobile ? 0 : 37}
										to='featured-projects'
										smooth
										duration={1000}
										target='_blank'
										rel='noopener noreferrer'
										className={`cta-btn ${
											isMobile ? 'text-color-white--mobile' : 'text-color-white '
										}`}
									>
										View Projects
									</Link>
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
