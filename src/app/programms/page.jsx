import SEO from '@/components/seo';
import BreadCrumb from '../breadcrumb/breadcrumb';
import Footer from '../footer/footer';
import HeaderOne from '../header/HeaderOne';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import Programmsgridcontainer from './programms-grid-container';

const Programmsgrid = () => {
	return (
		<>
			<SEO pageTitle='Programms Grid' />
			<HeaderOne />
			<BreadCrumb
				title='Programms Grid'
				innerTitle='Programms Grid'
				bgImage='/img/banner/page-banner-3.jpg'
			/>
			<Programmsgridcontainer />
			<Footer />
			<ScrollToTopButton />
		</>
	);
};

export default Programmsgrid;
