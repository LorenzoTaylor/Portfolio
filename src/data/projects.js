// Import images
import WebImage1 from "../images/Lorenzo's Cleaners.png";
import MobileImage2 from '../images/HTML Email Template.png';
import UIImage1 from '../images/Youtube.png';

export const projectsData = [
	{
		id: 1,
		title: "Youtube Clone",
		category: 'Full Stack Web Application',
		img: UIImage1,
		link:'https://dynamic-tapioca-4e369d.netlify.app/',
		projectto:'projects/single-project',
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: "Lorenzo's Cleaners App",
		category: 'Front End Web Application',
		img: WebImage1,
		link:'https://cleaners-rose.vercel.app/',
		projectto:'projects/second-project',
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 3,
		title: 'HTML Email Template',
		category: 'Front End Web Application',
		img: MobileImage2,
		link:'https://gld-html-email.vercel.app/',
		projectto:'projects/third-project',
		ProjectHeader: {
			title: '',
			publishDate: '',
			tags: '',
		},
	},
	
];
