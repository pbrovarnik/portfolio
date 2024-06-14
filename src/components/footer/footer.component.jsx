import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

import PortfolioContext from '../../context/context';

const Footer = ({ scrollTo }) => {
	const { footer } = useContext(PortfolioContext);
	const { networks } = footer;

	return (
		<footer className="footer navbar-static-bottom">
			<Container>
				<span className="back-to-top">
					<Link to={scrollTo} smooth duration={1000}>
						<i className="fa fa-angle-up fa-2x" aria-hidden="true" />
					</Link>
				</span>
				<div className="social-links">
					{networks &&
						networks.map((network, id) => {
							const { name, url } = network;
							return (
								<a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
									<i className={`fab fa-${name}`} />
								</a>
							);
						})}
				</div>
				<hr />
				<p className="footer__text">
					© {new Date().getFullYear()} -{' '}
					<a href="https://github.com/pbrovarnik" target="_blank" rel="noopener noreferrer">
						Pasha Brovarnik
					</a>
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
