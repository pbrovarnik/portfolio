import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const FeaturedProject = () => {
	const { featuredProjects, isMobile } = useContext(PortfolioContext);

	return (
		<section id='featured-projects'>
			<Container>
				<div className='featured-project-wrapper'>
					<Title title='Featured projects' />
					{featuredProjects.map((project, id) => {
						const { alt, img, title, info, info2, url, repo } = project;

						return (
							<Row key={id}>
								<Col lg={4} sm={12}>
									<Fade
										left={!isMobile}
										bottom={isMobile}
										duration={1000}
										delay={500}
										distance='30px'
									>
										<div className='featured-project-wrapper__text'>
											<h3 className='featured-project-wrapper__text-title'>{title}</h3>
											<div>
												<p>{info}</p>
												<p className='mb-4'>{info2}</p>
											</div>
											<a
												target='_blank'
												rel='noopener noreferrer'
												className={`cta-btn ${
													isMobile ? 'cta-btn--hero-mobile' : 'cta-btn--hero'
												}`}
												href={url}
											>
												Demo
											</a>

											<a
												target='_blank'
												rel='noopener noreferrer'
												className={`cta-btn ${
													isMobile ? 'text-color-main--mobile' : 'text-color-main'
												}`}
												href={repo}
											>
												Code
											</a>
										</div>
									</Fade>
								</Col>
								<Col lg={8} sm={12}>
									<Fade
										right={!isMobile}
										bottom={isMobile}
										duration={1000}
										delay={1000}
										distance='30px'
									>
										<div className='featured-project-wrapper__image-container'>
											<a
												href={url}
												target='_blank'
												aria-label='Project Link'
												rel='noopener noreferrer'
											>
												<Tilt
													options={{
														reverse: false,
														max: 8,
														perspective: 1000,
														scale: 1,
														speed: 300,
														transition: true,
														axis: null,
														reset: true,
														easing: 'cubic-bezier(.03,.98,.52,.99)',
													}}
												>
													<div data-tilt className='thumbnail rounded'>
														<img
															className='featured-project-wrapper__image'
															alt={alt}
															src={img}
														/>
													</div>
												</Tilt>
											</a>
										</div>
									</Fade>
								</Col>
							</Row>
						);
					})}
				</div>
			</Container>
		</section>
	);
};

export default FeaturedProject;
