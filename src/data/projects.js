// Import images
import WebImage1 from "../images/Lorenzo's Cleaners.png";
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/Enron.jpg';
import UIImage1 from '../images/Earth (1).png';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: "Lorenzo's Cleaners App",
		category: 'Front End Web Application',
		img: WebImage1,
		link:'https://cleaners-rose.vercel.app/',
		projectto:'projects/single-project',
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'EnronDS Search',
		category: 'Data Analytics',
		img: MobileImage2,
		link:'',
		projectto:'projects/second-project',
		ProjectHeader: {
			title: '',
			publishDate: '',
			tags: '',
		},
	},
	{
		id: 3,
		title: 'Earth',
		category: 'Front End Web Application',
		img: UIImage1,
		link:'',
		projectto:'projects/third-project',
		ProjectHeader: {
			title: '',
			publishDate: '',
			tags: '',
		},
	},
	
];
