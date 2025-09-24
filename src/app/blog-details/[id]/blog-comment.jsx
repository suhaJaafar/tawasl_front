const Blogcomment = ({ blogsData }) => {
	console.log('in container:', blogsData);

	return (
		<div className='col-xxl-9 col-xl-8 col-lg-8 lg-mb-30'>
			<div className='blog__details-left'>
				<img src={blogsData.image?.url} alt='' />
				<div className='blog__details-left-meta'>
					<ul>
						<li>
							<a href='#'>
								<i className='fal fa-user'></i>By - Admin
							</a>
						</li>
						<li>
							<a href='#'>
								<i className='fal fa-calendar-alt'></i>07, March 2023
							</a>
						</li>
						<li>
							<a href='#'>
								<i className='fal fa-comments'></i>3 Comment
							</a>
						</li>
					</ul>
				</div>
				<h3 className='mb-20'>{blogsData.title}</h3>
				<p className='mb-25'>{blogsData.description}</p>
			</div>
		</div>
	);
};

export default Blogcomment;
