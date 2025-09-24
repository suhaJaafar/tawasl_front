import { fetchBlogById } from '@/utils/fetchBlogs';
import SEO from '@/components/seo';
import HeaderOne from '@/app/header/HeaderOne';
import BreadCrumb from '@/app/breadcrumb/breadcrumb';
import Blogdetailscontainer from './blog-details-container';
import Footer from '@/app/footer/footer';
import ScrollToTopButton from '@/app/scroll-to-top/scrollToTop';
export default async function Blogdetails({ params }) {
	const { id } = params;
	const blog = await fetchBlogById(id);
	try {
		blog = await fetchBlogById(params.id);
	} catch (e) {
		// Optionally handle error
	}
	if (!blog) {
		return <div>Blog not found</div>;
	}
	return (
		<>
			<SEO pageTitle='Blog Details' />
			<HeaderOne />
			<BreadCrumb
				title='Blog Details'
				innerTitle='Blog Details'
				bgImage='/img/banner/tawasl_library.jpg'
			/>
			<Blogdetailscontainer params={params} />
			<Footer />
			<ScrollToTopButton />
		</>
	);
}
