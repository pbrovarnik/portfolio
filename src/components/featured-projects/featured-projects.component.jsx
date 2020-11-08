import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import Tilty from 'react-tilty';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Title from '../title/title.component';
import ImageLoader from '../image-loader/image-loader.conponent';

const FeaturedProject = () => {
	const { featuredProjects, isMobile } = useContext(PortfolioContext);

	return (
		<section id='featured-projects'>
			<Container>
				<div className='featured-project-wrapper'>
					<Title title='Projects' />
					{featuredProjects.map((project, id) => {
						const { alt, img, title, info, info2, url, repo } = project;

						return (
							<Row key={id}>
								<Col lg={4} sm={12}>
									<Fade
										direction={isMobile ? '' : 'left'}
										duration={1000}
										delay={500}
										triggerOnce
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
										direction={isMobile ? '' : 'right'}
										duration={1000}
										delay={500}
										triggerOnce
									>
										<div className='featured-project-wrapper__image-container'>
											<a
												href={url}
												target='_blank'
												aria-label='Project Link'
												rel='noopener noreferrer'
											>
												<Tilty
													settings={{
														reverse: true,
														max: 10,
														perspective: isMobile ? false : 1000,
														scale: 1,
														speed: 300,
														transition: true,
														axis: null,
														reset: true,
														easing: 'cubic-bezier(.03,.98,.52,.99)',
													}}
												>
													<div className='thumbnail rounded'>
														<ImageLoader
															className='featured-project-wrapper__image'
															alt={alt}
															src={img}
														/>
													</div>
												</Tilty>
											</a>
										</div>
									</Fade>
								</Col>
							</Row>
						);
					})}
					<Fade duration={1000} delay={500} triggerOnce>
						<div className='featured-project-wrapper__more-projects-container'>
							<Link
								to='/projects'
								rel='noopener noreferrer'
								className='cta-btn featured-project-wrapper__more-projects-btn'
							>
								More projects
							</Link>
							<i className='fa fa-angle-right' aria-hidden='true' />
						</div>
					</Fade>
				</div>
			</Container>
		</section>
	);
};

export default FeaturedProject;
