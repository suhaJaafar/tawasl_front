const InitiativeComment = ({ initiativeData }) => {
	console.log('in container:', initiativeData);
	return (
		<div className='col-xxl-9 col-xl-8 col-lg-8 lg-mb-30'>
			<div className='blog__details-left'>
				<img src={initiativeData.image?.url} alt='' />
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
				<h3 className='mb-20'>{initiativeData.title}</h3>
				<p className='mb-25'>{initiativeData.description}</p>
			</div>
		</div>
	);
};

export default InitiativeComment;
