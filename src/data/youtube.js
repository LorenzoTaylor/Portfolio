// Import images
import Image1 from "../images/Youtube.png";
import Image2 from "../images/Youtube1.png";
import Image3 from "../images/Youtube3.png";
// Import icons
import {
	FiGithub,
	FiGlobe,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Youtube Clone',
		publishDate: 'December 2023',
		tags: 'Full Stack',
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
			'Create a fully fledged clone of youtube that allows for video surfing.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React',
					'Material UI',
					'Axios',
					'Rapid API',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'',
			},
			{
				id: 2,
				details:
					'',
			},
			{
				id: 3,
				details:
					'',
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
				name: 'Github',
				icon: <FiGithub />,
				url: 'https://github.com/LorenzoTaylor/youtube',
			},
			{
				id: 2,
				name: 'Web',
				icon: <FiGlobe />,
				url: 'https://dynamic-tapioca-4e369d.netlify.app/',
			},
		],
	},
};
