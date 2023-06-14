import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import About from './AboutMe';
import Contact from './Contact'

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<About></About>
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<Contact></Contact>
		</div>
	);
};

export default Home;
