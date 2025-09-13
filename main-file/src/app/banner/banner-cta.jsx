const BannerCta = () => {
	return (
		<div className='row'>
			<form action='#'>
				<div className='check__area'>
					<div className='check__area-item'>
						<p>Our Email tawasoul.office@tawasoul.org</p>
					</div>
					<div className='check__area-item'>
						<div className='text-[#999999] font-bold'>
							Our phone Number <p> 0770 211 1332</p>
						</div>
					</div>
					<div className='check__area-item'>
						<div className='text-[#999999] font-bold'>
							Our Location <p>AL-Karradah District, Baghdad, Iraq</p>
						</div>
					</div>
					<div className='check__area-item button'>
						<button className='theme-btn' type='submit'>
							Contact Us
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BannerCta;
