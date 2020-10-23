import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import profileImg from '../../assets/images/profile-image.jpg';

const About = () => {
	const { about, isMobile } = useContext(PortfolioContext);
	const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

	return (
		<section id='about'>
			<Container>
				<Title title='About Me' />
				<Row className='about-wrapper'>
					<Col md={6} sm={12}>
						<Fade bottom duration={1000} delay={600} distance='30px'>
							<div className='about-wrapper__image-container'>
								<img
									className='rounded shadow-lg about-wrapper__image'
									alt='about'
									src={profileImg}
								/>
							</div>
						</Fade>
					</Col>
					<Col md={6} sm={12}>
						<Fade
							left={!isMobile}
							bottom={isMobile}
							duration={1000}
							delay={1000}
							distance='30px'
						>
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
