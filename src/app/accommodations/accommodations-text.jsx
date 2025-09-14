import Link from 'next/link';

const Accommodationstext = () => {
	return (
		<div className='col-xl-5 col-lg-6 lg-mb-50'>
			<div className='accommodations__area-title'>
				<span className='subtitle__one'>about us</span>
				<h2>Welcome Our Org.</h2>
				<p>
					The organization seeks to create an informed generation and promote
					societal peace, and to contribute to building good governance by
					issuing reliable and accurate data and indicators within a scientific
					methodology on various topics.
				</p>
				<Link className='theme-btn' href='/about'>
					Read More <i className='fal fa-long-arrow-right'></i>
				</Link>
			</div>
		</div>
	);
};

export default Accommodationstext;
