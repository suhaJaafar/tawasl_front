'use client';
import BreadCrumb from '../breadcrumb/breadcrumb';
import Footer from '../footer/footer';
import HeaderOne from '../header/HeaderOne';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import VolunteerContent from './volunteer-content';
import SEO from '@/components/seo';

const VolunteerUs = () => {
	return (
		<>
			<SEO pageTitle='Volunteer With Us' />
			<HeaderOne />
			<BreadCrumb
				title='Volunteer With Us'
				innerTitle='Volunteer'
				bgImage='/img/banner/about_us.jpg'
			/>
			<VolunteerContent />
			<Footer />
			<ScrollToTopButton />
		</>
	);
};

export default VolunteerUs;
