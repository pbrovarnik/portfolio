import { Fade } from 'react-awesome-reveal';

const Title = ({ title }) => (
	<Fade direction="down" duration={1000} delay={300} triggerOnce>
		<h2 className="section-title">{title}</h2>
	</Fade>
);

export default Title;
