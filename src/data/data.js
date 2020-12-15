import profilePhoto from '../assets/images/profile-photo.jpg';
import clothingShopThumbnail from '../assets/images/thumbnails/clothing-shop-thumbnail.png';
import moviePreviewThumbnail from '../assets/images/thumbnails/movie-preview-thumbnail.png';
import movieFightThumbnail from '../assets/images/thumbnails/movie-fight-thumbnail.png';
import animatedNavThumbnail from '../assets/images/thumbnails/animated-nav-thumbnail.png';
import bookingPageThumbnail from '../assets/images/thumbnails/booking-page-thumbnail.png';
import bookmarkThumbnail from '../assets/images/thumbnails/bookmark-thumbnail.png';
import calculatorThumbnail from '../assets/images/thumbnails/calculator-thumbnail.png';
import countdownThumbnail from '../assets/images/thumbnails/countdown-thumbnail.png';
import formValidationThumbnail from '../assets/images/thumbnails/form-validation.png';
import infiniteScrollThumbnail from '../assets/images/thumbnails/infinite-scroll-thumbnail.png';
import jokesThumbnail from '../assets/images/thumbnails/jokes-thumbnail.png';
import kanbanThumbnail from '../assets/images/thumbnails/kanban-thumbnail.png';
import lightDarkModeThumbnail from '../assets/images/thumbnails/light-dark-mode-thumbnail.png';
import luxuryHomesThumbnail from '../assets/images/thumbnails/luxury-homes-thumbnail.png';
import mazeThumbnail from '../assets/images/thumbnails/maze-thumbnail.png';
import monstersRolodexImg from '../assets/images/thumbnails/monsters-rolodex-thumbnail.png';
import musicPlayerThumbnail from '../assets/images/thumbnails/music-player-thumbnail.png';
import nasaPhotosThumbnail from '../assets/images/thumbnails/nasa-photos-thumbnail.png';
import natureToursThumbnail from '../assets/images/thumbnails/nature-tours-thumbnail.png';
import paintThumbnail from '../assets/images/thumbnails/paint-thumbnail.png';
import pongThumbnail from '../assets/images/thumbnails/pong-thumbnail.png';
import quotesThumbnail from '../assets/images/thumbnails/quotes-thumbnail.png';
import secretChatThumbnail from '../assets/images/thumbnails/secret-chat-thumbnail.png';
import spockRockThumbnail from '../assets/images/thumbnails/spock-rock-thumbnail.png';
import videoPlayerThumbnail from '../assets/images/thumbnails/video-player-thumbnail.png';

// Hero data
export const heroData = {
	title: 'Hi, my name is ',
	name: 'Pasha',
	subtitle: "I'm the Unknown Developer.",
	cta: 'Get to know me',
};

// About data
export const aboutData = {
	img: profilePhoto,
	paragraphOne:
		"Hello! I'm Pasha, a software engineer based in San Francisco, CA.",
	paragraphTwo:
		'I enjoy creating software for the internet, whether its web applications, websites, or anything in between. My intentions are to build products that are well designed, performant, and have the user’s experience in mind.',
	paragraphThree:
		'I’ve worked with many engineering teams over the last 10 years, spending the majority of my time on the quality side designing tools and processes to ensure reliability. This gives me a unique perspective into the entire development cycle which allows me to not only create great software, but provide an overall awesome product experience.',
	paragraphFour: "Some technologies I've been working with recently:",
	technologies: [
		'JavaScript (ES6+)',
		'TypeScript',
		'React',
		'Node',
		'SASS',
		'HTML',
		'Redux',
		'Easy-peasy',
	],
	resume:
		'https://drive.google.com/file/d/0B7h0_KSWIaQ-S0R6ZXl6ZFp5WnM/view?usp=sharing',
};

// Feature Projects data
export const featureProjectsData = [
	{
		title: 'Clothing Shop',
		alt: 'clothing shop',
		img: clothingShopThumbnail,
		info:
			'A example of a massive e-commerce application, similar to Shopify, that gives users an authentic online shopping experience. This is a full stack appilcation that was built using some of the latest technologies like React, Redux, SASS, Firebase, Stripe.',
		tags: ['React', 'Redux', 'SASS', 'Firebase', 'Stripe API'],
		repo: 'https://github.com/pbrovarnik/clothing-shop',
		url: 'https://pashas-clothing-shop.herokuapp.com/',
	},
	{
		title: 'Movie Preview',
		alt: 'movie preview',
		img: moviePreviewThumbnail,
		info:
			'Find your favorite movies! Users can search for any movie, get a plot overview, watch the trailer, and see rating scores from companies like Rotten Tomatoes and IMDB. The API data is obtained from TheMovieDB, OpenMovieDB, YouTube and uses technologies like React, SASS, and Easy Peasy to built an interactive UI.',
		tags: [
			'React',
			'Easy-peasy',
			'SASS',
			'TheMovieDB',
			'OpenMovieDB',
			'YouTube API',
		],
		repo: 'https://github.com/pbrovarnik/movie-preview',
		url: 'https://pasha-movie-preview.herokuapp.com/',
	},
	{
		title: 'Booking Page',
		alt: 'booking page',
		img: bookingPageThumbnail,
		info:
			'A simple but elegant take on an all in one Booking page. This is an example UI  with the idea that a user can book a Hotel, Flight, Car Rental, and Tour all on one platform. This application is built using purely HTML5 and SASS.',
		tags: ['HTML5', 'SASS'],
		repo: 'https://bitbucket.org/Pasha-brovarnik/booking-landing/src/master/',
		url: 'https://pasha-booking-landing.herokuapp.com/',
	},
];

//	Contact data
export const contactData = {
	cta: 'Would you like to work with me? Awesome!',
	btn: "Let's Talk",
	email: 'pasha.brovarnik@gmail.com',
};

// Footer data
export const footerData = {
	networks: [
		{
			name: 'linkedin',
			url: 'https://linkedin.com/in/pasha-brovarnik',
		},
		{
			name: 'github',
			url: 'https://github.com/pbrovarnik',
		},
		{
			name: 'bitbucket',
			url: 'https://bitbucket.org/Pasha-brovarnik',
		},
	],
};

// List of built projects
export const projectsData = [
	{
		title: 'Animated nav',
		img: animatedNavThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/animated-navigation/src/master/',
		url: 'https://pasha-animated-navigation.herokuapp.com/',
	},
	{
		title: 'Bookmark',
		img: bookmarkThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/bookmark-app/src/master/',
		url: 'https://pasha-bookmark-app.herokuapp.com/',
	},
	{
		title: 'Calculator',
		img: calculatorThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/calculator/src/master/',
		url: 'https://pasha-calculator.herokuapp.com/',
	},
	{
		title: 'Countdown',
		img: countdownThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/custom-countdown/src/master/',
		url: 'https://pasha-custom-countdown.herokuapp.com/',
	},
	{
		title: 'Form validation',
		img: formValidationThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/form-validation/src/master/',
		url: 'https://pasha-form-validation.herokuapp.com/',
	},
	{
		title: 'Infinite scroll',
		img: infiniteScrollThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/infinite-scroll/src/master/',
		url: 'https://pasha-infinite-scroll.herokuapp.com/',
	},
	{
		title: 'Jokes',
		img: jokesThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/jokes/src/master/',
		url: 'https://pasha-jokes.herokuapp.com/',
	},
	{
		title: 'Kanban',
		img: kanbanThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/kanban/src/master/',
		url: 'https://pasha-kanban.herokuapp.com/',
	},
	{
		title: 'Light dark mode',
		img: lightDarkModeThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/light-dark-mode/src/master/',
		url: 'https://pasha-light-dark-mode.herokuapp.com/',
	},
	{
		title: 'Luxury homes',
		img: luxuryHomesThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/luxury-homes/src/master/',
		url: 'https://pasha-luxury-homes-landing.herokuapp.com/',
	},
	{
		title: 'Maze',
		img: mazeThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/maze/src/master/',
		url: 'https://pasha-maze.herokuapp.com/',
	},
	{
		title: 'Monsters Rolodex',
		img: monstersRolodexImg,
		url: 'https://pasha-monsters-rolodex.herokuapp.com/',
		repo: 'https://bitbucket.org/Pasha-brovarnik/monsters-rolodex/src/master/',
	},
	{
		title: 'Movie Fight',
		img: movieFightThumbnail,
		url: 'https://pasha-movie-fight.herokuapp.com/',
		repo: 'https://bitbucket.org/Pasha-brovarnik/movie-fight/src/master/',
	},
	{
		title: 'Music player',
		img: musicPlayerThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/music-player/src/master/',
		url: 'https://pasha-music-player.herokuapp.com/',
	},
	{
		title: 'Nasa pictures',
		img: nasaPhotosThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/nasa-pictures/src/master/',
		url: 'https://pasha-nasa-pictures.herokuapp.com/',
	},
	{
		title: 'Nature tours',
		img: natureToursThumbnail,
		repo:
			'https://bitbucket.org/Pasha-brovarnik/nature-tours-landing/src/master/',
		url: 'https://pasha-nature-tours-landing.herokuapp.com/',
	},
	{
		title: 'Paint',
		img: paintThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/paint/src/master/',
		url: 'https://pasha-paint.herokuapp.com/',
	},
	{
		title: 'Pong',
		img: pongThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/pong/src/master/',
		url: 'https://pasha-pong.herokuapp.com/',
	},
	{
		title: 'Quotes',
		img: quotesThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/quotes/src/master/',
		url: 'https://pasha-quotes.herokuapp.com/',
	},
	{
		title: 'Secret chat',
		img: secretChatThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/secret-chat/src/master/',
		url: 'https://pasha-secret-chat.herokuapp.com/',
	},
	{
		title: 'Spock Rock',
		img: spockRockThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/spock-rock-game/src/master/',
		url: 'https://pasha-spock-rock.herokuapp.com/',
	},
	{
		title: 'Video player',
		img: videoPlayerThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/video-player/src/master/',
		url: 'https://pasha-video-player.herokuapp.com/',
	},
];
