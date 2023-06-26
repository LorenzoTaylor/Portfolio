// Import images
import Image1 from "../images/Lorenzo's Cleaners.png";
import Image2 from "../images/Lorenzo's Cleaners (1).png";
import Image3 from "../images/Lorenzo's Cleaners (2).png";
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
		title: 'Cleaning App Frontend',
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
		ClientHeading: 'About',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: "Lorenzo's Cleaners",
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Creating the front end portion of a site that provides cleaning services.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'JavaScript',
					'React.js',
					'styled-components',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Welcome to Lorenzos Cleaners - the ultimate platform for booking professional cleaners right at your doorstep! Our innovative website, built from scratch using React and styled-components, provides a seamless experience for users to effortlessly schedule cleaning services for their homes.',
			},
			{
				id: 2,
				details:
					'Next, I plan to focus on integrating Stripe, a trusted and secure payment processing system, to make the booking and payment process even smoother. In the next phase of the project, i will implement the Stripe integration, enabling customers to make quick and secure payments directly on the website. Additionally, I plan to enhance the user experience by introducing features such as personalized cleaning plans, real-time status updates, and an updated customer support system for any inquiries or concerns.',
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
				url: 'https://github.com/LorenzoTaylor/Cleaners',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiGlobe />,
				url: 'https://cleaners-rose.vercel.app/',
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
