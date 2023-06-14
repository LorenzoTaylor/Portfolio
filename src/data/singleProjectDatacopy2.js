// Import images
import Image1 from "../images/Earth (1).png";
import Image2 from "../images/Earth (2).png";
import Image3 from "../images/Earth (3).png";
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
		title: 'Earth',
		publishDate: 'May 2022',
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
			'Creating a short climate change info website.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'JavaScript',
					'HTML',
					'CSS',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'...',
			},
			{
				id: 2,
				details:
					'...',
			},
			{
				id: 3,
				details:
					'...',
			},
			{
				id: 4,
				details:
					'...',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiGithub />,
				url: 'https://github.com/LorenzoTaylor/Earth',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiGlobe />,
				url: 'https://earth.lorenzotaylor.repl.co',
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
