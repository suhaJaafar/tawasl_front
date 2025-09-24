import Blogcomment from './blog-comment';
import BlogSideBar from './blog-sidebar';
import { fetchBlogById } from '@/utils/fetchBlogs';

const Blogdetailscontainer = async ({ params }) => {
	const { id } = params;
	const blog = await fetchBlogById(id);

	if (!blog) {
		return <div>Blog not found</div>;
	}
	return (
		<>
			<div className='blog__details section-padding'>
				<div className='container'>
					<div className='row'>
						<Blogcomment blogsData={blog} />
						{/* <BlogSideBar /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Blogdetailscontainer;
