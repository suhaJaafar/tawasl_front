import SEO from '@/components/seo';
import BreadCrumb from '../breadcrumb/breadcrumb';
import Footer from '../footer/footer';
import HeaderOne from '../header/HeaderOne';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import Contactcontainer from './contact-container';

const Contact = () => {
	return (
		<>
			<SEO pageTitle='Contact Us' />
			<HeaderOne />
			<BreadCrumb
				title='Contact Us'
				innerTitle='Contact Us'
				bgImage='/img/banner/call_us.jpg'
			/>
			<Contactcontainer />
			<Footer />
			<ScrollToTopButton />
		</>
	);
};

export default Contact;
