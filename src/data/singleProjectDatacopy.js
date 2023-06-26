// Import images
import Image1 from "../images/HTML Email Template.png";
import Image2 from "../images/HTML Email Template (1).png";
import Image3 from "../images/HTML Email Template (2).png";
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiGithub,
	FiGlobe,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'HTML Email Template',
		publishDate: 'May 2023',
		tags: 'Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management I',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management I',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management I',
			img: Image3,
		},
	],
	ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Creating a production level HTML Email Template.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML Tables',
					'CSS',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'The HTML Email Portfolio project I completed was designed with a jewelry companys sales campaign in mind. The email template incorporated various sections to showcase the companys products and promote their ongoing sales. The template featured a professional and visually appealing design to attract and engage the target audience.',
			},
			{
				id: 2,
				details:
					'Overall, the HTML Email Portfolio project successfully presented the jewelry companys sales campaign in an engaging and visually appealing manner. The template effectively showcased their products, promoted their discounts, and encouraged recipients to explore and make purchases from the companys website.',
			},
			{
				id: 3,
				details:
					'Please check out the full HTML Email Portfolio project to see how it works by clicking the globe icon.',
			},
			{
				id: 4,
				details:
					'',
			},
		],
		SocialSharingHeading: 'View Project',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiGithub />,
				url: 'https://github.com/LorenzoTaylor/GldHtmlEmail',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiGlobe />,
				url: 'https://gld-html-email.vercel.app/',
			},
			
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
