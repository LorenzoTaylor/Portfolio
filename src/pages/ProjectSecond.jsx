import ProjectGallery from '../components/projects/ProjectGallerySecond';
import ProjectHeader from '../components/projects/ProjectHeaderSecond';
import ProjectInfo from '../components/projects/ProjectInfoSecond';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SecondProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
			</SingleProjectProvider>
		</motion.div>
	);
};
 
export default ProjectSingle;
