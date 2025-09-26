'use client';
import BreadCrumb from '../breadcrumb/breadcrumb';
import Footer from '../footer/footer';
import HeaderOne from '../header/HeaderOne';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import ProgramsContent from './programs-content';
import SEO from '@/components/seo';

const Programs = () => {
	return (
		<>
			<SEO pageTitle='Our Programs' />
			<HeaderOne />
			<BreadCrumb
				title='Our Programs'
				innerTitle='Programs'
				bgImage='/img/banner/our_programs.jpg'
			/>
			<ProgramsContent />
			<Footer />
			<ScrollToTopButton />
		</>
	);
};

export default Programs;
