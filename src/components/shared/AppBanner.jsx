import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../../images/Dev.svg';
import developerDark from '../../images/Dev.svg';
import { motion } from 'framer-motion';
import Badge from '../badge/Badge.jsx';
import './AppBanner.css'

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-100 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left mx-20">
				<motion.h1
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hi, Im Lorenzo
				</motion.h1>
				<motion.p
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					Im A Software Engineer Specializing In Front End Web Development.
				</motion.p>
				<motion.div
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					{/*<a
						download="LorenzoTaylor-Resume.pdf"
						href="/LorenzoTaylor-Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Resume
						</span>
					</a>*/} 
				</motion.div>
			</div>
			<motion.div
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="text-right float-right mt-8 sm:mt-0 !h-screen"
			>	
			<div className='badge-spacer'>
			</div>
				<Badge/>
				{/*<img
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>*/} 
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
