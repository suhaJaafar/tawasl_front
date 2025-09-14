'use client';
import BreadCrumb from '../breadcrumb/breadcrumb';
import Footer from '../footer/footer';
import HeaderOne from '../header/HeaderOne';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import InitiativesContent from './initiatives-content';
import SEO from '@/components/seo';

const Initiatives = () => {
	return (
		<>
			<SEO pageTitle='Our Initiatives' />
			<HeaderOne />
			<BreadCrumb
				title='Our Initiatives'
				innerTitle='Initiatives'
				bgImage='/img/banner/our_programs.jpg'
			/>
			<InitiativesContent />
			<Footer />
			<ScrollToTopButton />
		</>
	);
};

export default Initiatives;
