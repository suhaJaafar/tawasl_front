import SEO from '@/components/seo';
import BreadCrumb from '../breadcrumb/breadcrumb';
import Footer from '../footer/footer';
import HeaderOne from '../header/HeaderOne';
import ScrollToTopButton from '../scroll-to-top/scrollToTop';
import Bloggridcontainer from './blog-grid-container';
import { fetchBlogs } from '@/utils/fetchBlogs';

export default async function Bloggrid() {
	let blogs = [];
	try {
		console.log('Fetching blogs from API...');
		blogs = await fetchBlogs();
		console.log('Fetched blogs:', blogs);
	} catch (e) {
		console.error('Error fetching blogs:', e);
	}
	return (
		<>
			<SEO pageTitle='Our Programs' />
			<HeaderOne />
			<BreadCrumb
				title='Our Programs'
				innerTitle='Our Programs'
				bgImage='/img/banner/our_programs.jpg'
			/>
			<Bloggridcontainer blogs={blogs.data || blogs} />
			<Footer />
			<ScrollToTopButton />
		</>
	);
}
