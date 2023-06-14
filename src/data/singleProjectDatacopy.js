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
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'EnronDS Search',
		publishDate: 'january 2023',
		tags: 'Data',
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
				details: "EnronDS Search",
			},
			{
				id: 2,
				title: 'Services',
				details: 'Data Analytics',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Search the Enron email database to create a graph of connections between emails.',
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
					'Introducing EnronDS Search, a powerful tool I created as part of my portfolio to analyze the massive Enron email database. With EnronDS Search, users can delve into the extensive network of connections within the Enron organization and gain valuable insights into email interactions and team dynamics. ',
			},
			{
				id: 2,
				details:
					'By leveraging a graph data structure in java, EnronDS Search allows users to search for a specific email address within the Enron email database. Once a target email is entered, the application swiftly scans the database and constructs a dynamic graph of nodes, representing individuals, with over 400,000 connections.',
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
		SocialSharingHeading: 'Links',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiGithub />,
				url: 'https://github.com/LorenzoTaylor/EnronSearch',
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
