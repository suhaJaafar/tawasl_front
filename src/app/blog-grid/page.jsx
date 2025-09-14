import SEO from '@/components/seo';
import BreadCrumb from '../breadcrumb/breadcrumb';
import Footer from '../footer/footer';
import HeaderOne from '../header/HeaderOne';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import Bloggridcontainer from './blog-grid-container';

const Bloggrid = () => {
	return (
		<>
			<SEO pageTitle='Our Programs' />
			<HeaderOne />
			<BreadCrumb
				title='Our Programs'
				innerTitle='Our Programs'
				bgImage='/img/banner/our_programs.jpg'
			/>
			<Bloggridcontainer />
			<Footer />
			<ScrollToTopButton />
		</>
	);
};

export default Bloggrid;
