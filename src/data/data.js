import profilePhoto from '../assets/images/profile-photo.jpg';
import clothingShopThumbnail from '../assets/images/thumbnails/clothing-shop-thumbnail.png';
import chessPartyThumbnail from '../assets/images/thumbnails/chess-party-thumbnail.png';
import moviePreviewThumbnail from '../assets/images/thumbnails/movie-preview-thumbnail.png';
import movieFightThumbnail from '../assets/images/thumbnails/movie-fight-thumbnail.png';
import animatedNavThumbnail from '../assets/images/thumbnails/animated-nav-thumbnail.png';
import devDoodlesThumbnail from '../assets/images/thumbnails/dev-doodles-thumbnail.png';
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
	subtitle: '',
	cta: 'Get to know me',
};

// About data
export const aboutData = {
	img: profilePhoto,
	paragraphOne: "Hello! I'm Pasha, a software engineer based in San Francisco, CA.",
	paragraphTwo:
		'I enjoy building software for the internet, including web applications, websites, or anything in between. I intend to create performant, well-designed products that have the user experience in mind.',
	paragraphThree:
		'I have worked with many engineering teams over the last 8 years, spending most of my time designing tools and processes to ensure reliability. Working on the quality side gives me a unique perspective into the entire development cycle, allowing me to not only create great software but provide an overall enjoyable product experience.',
	paragraphFour: "Some technologies I've been working with recently:",
	technologies: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node', 'SASS', 'HTML', 'Socket.io', 'Redux', 'Easy Peasy'],
	resume: 'https://drive.google.com/file/d/1qzIi4pgEFOp7Dd-BYRe7hCOUp5IUwqGG/view?usp=sharing',
};

const baseUrl = 'https://pbrovarnik.github.io';

// Feature Projects data
export const featureProjectsData = [
	{
		title: 'Chess Party',
		alt: 'chess party',
		img: chessPartyThumbnail,
		info: 'Let’s play a game of chess! Chess party is a real-time online multiplayer game that gives players additional features like video chat and messaging to really immerse themselves  and get competitive with their opponent. This full stack application was built using React, CSS, Socket.io, and WebRTC on the client and Node, Express, and Socket.io on the server.',
		tags: ['React', 'CSS', 'Socket.io', 'Node', 'WebRTC'],
		repo: 'https://github.com/pbrovarnik/chess-party-client',
		url: `${baseUrl}/chess-party/`,
	},
	{
		title: 'Movie Preview',
		alt: 'movie preview',
		img: moviePreviewThumbnail,
		info: 'Find your favorite movies! Users can search for any movie, get a plot overview, watch the trailer, and see rating scores from companies like Rotten Tomatoes and IMDB. The API data is obtained from TheMovieDB, OpenMovieDB, YouTube and uses technologies like React, SASS, and Easy Peasy to built an interactive UI.',
		tags: ['React', 'Easy-peasy', 'SASS', 'TheMovieDB', 'OpenMovieDB', 'YouTube API'],
		repo: 'https://github.com/pbrovarnik/movie-preview',
		url: `${baseUrl}/movie-preview/`,
	},
	{
		title: 'Clothing Shop',
		alt: 'clothing shop',
		img: clothingShopThumbnail,
		info: 'A example of a massive e-commerce application, similar to Shopify, that gives users an authentic online shopping experience. This is a full stack appilcation that was built using some of the latest technologies like React, Redux, SASS, Firebase, Stripe.',
		tags: ['React', 'Redux', 'SASS', 'Firebase', 'Stripe API'],
		repo: 'https://github.com/pbrovarnik/clothing-shop',
		url: `${baseUrl}/clothing-shop/`,
	},
	{
		title: 'DevDoodles',
		alt: 'devDoodles page',
		img: devDoodlesThumbnail,
		info: 'Step into the world of Dev Doodles! A playful mix of mini projects',
		tags: ['TypeScript', 'React', 'Hooks', 'Games', 'AI Player', 'Recursion', "Browser API's", 'MiniMax Algorithm', 'Trie Search'],
		repo: 'https://github.com/pbrovarnik/dev-doodles',
		url: `${baseUrl}/dev-doodles/`,
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
	],
};

// List of built projects
export const projectsData = [
	{
		title: 'Animated nav',
		img: animatedNavThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/animated-navigation/src/master/',
		url: 'https://pasha-animated-navigation.netlify.app/',
	},
	{
		title: 'Bookmark',
		img: bookmarkThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/bookmark-app/src/master/',
		url: 'https://pasha-bookmarks.netlify.app/',
	},
	{
		title: 'Calculator',
		img: calculatorThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/calculator/src/master/',
		url: 'https://pasha-calculator.netlify.app/',
	},
	{
		title: 'Countdown',
		img: countdownThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/custom-countdown/src/master/',
		url: 'https://pasha-custom-countdown.netlify.app/',
	},
	{
		title: 'Form validation',
		img: formValidationThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/form-validation/src/master/',
		url: 'https://pasha-form-validation.netlify.app/',
	},
	{
		title: 'Infinite scroll',
		img: infiniteScrollThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/infinite-scroll/src/master/',
		url: 'https://pasha-infinite-scroll.netlify.app/',
	},
	{
		title: 'Jokes',
		img: jokesThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/jokes/src/master/',
		url: 'https://pasha-jokes.netlify.app/',
	},
	{
		title: 'Kanban',
		img: kanbanThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/kanban/src/master/',
		url: 'https://pasha-kanban.netlify.app/',
	},
	{
		title: 'Light dark mode',
		img: lightDarkModeThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/light-dark-mode/src/master/',
		url: 'https://pasha-light-dark.netlify.app/',
	},
	{
		title: 'Luxury homes',
		img: luxuryHomesThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/luxury-homes/src/master/',
		url: 'https://pasha-luxury-homes.netlify.app/',
	},
	{
		title: 'Maze',
		img: mazeThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/maze/src/master/',
		url: 'https://pasha-maze.netlify.app/',
	},
	{
		title: 'Monsters Rolodex',
		img: monstersRolodexImg,
		url: 'https://pasha-monsters-rolodex.netlify.app/',
		repo: 'https://bitbucket.org/Pasha-brovarnik/monsters-rolodex/src/master/',
	},
	{
		title: 'Movie Fight',
		img: movieFightThumbnail,
		url: 'https://pasha-movie-fight.netlify.app/',
		repo: 'https://bitbucket.org/Pasha-brovarnik/movie-fight/src/master/',
	},
	{
		title: 'Music player',
		img: musicPlayerThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/music-player/src/master/',
		url: 'https://pasha-music-player.netlify.app/',
	},
	{
		title: 'Nasa pictures',
		img: nasaPhotosThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/nasa-pictures/src/master/',
		url: 'https://pasha-nasa-pictures.netlify.app/',
	},
	{
		title: 'Nature tours',
		img: natureToursThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/nature-tours-landing/src/master/',
		url: 'https://pasha-nature-tours.netlify.app/',
	},
	{
		title: 'Paint',
		img: paintThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/paint/src/master/',
		url: 'https://pasha-paint.netlify.app/',
	},
	{
		title: 'Pong',
		img: pongThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/pong/src/master/',
		url: 'https://pasha-pong.netlify.app/',
	},
	{
		title: 'Quotes',
		img: quotesThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/quotes/src/master/',
		url: 'https://pasha-quotes.netlify.app/',
	},
	{
		title: 'Secret chat',
		img: secretChatThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/secret-chat/src/master/',
		url: 'https://pasha-secret-chat.netlify.app/',
	},
	{
		title: 'Spock Rock',
		img: spockRockThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/spock-rock-game/src/master/',
		url: 'https://pasha-spock-rock.netlify.app/',
	},
	{
		title: 'Video player',
		img: videoPlayerThumbnail,
		repo: 'https://bitbucket.org/Pasha-brovarnik/video-player/src/master/',
		url: 'https://pasha-video-player.netlify.app/',
	},
];
