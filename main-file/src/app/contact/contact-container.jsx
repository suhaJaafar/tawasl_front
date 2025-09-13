import Social from '../socials/page';

const Contactcontainer = () => {
	return (
		<>
			<div className='contact__area section-padding pb-0'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-5 col-lg-5 lg-mb-30'>
							<div className='contact__area-title'>
								<h3 className='mb-25'>Get In Touch</h3>
								<p>Tawasoul Organization for Youth Empowerment</p>
							</div>
							<div className='contact__area-info'>
								<div className='contact__area-info-item'>
									<div className='contact__area-info-item-icon'>
										<i className='fal fa-phone-alt'></i>
									</div>
									<div className='contact__area-info-item-content'>
										<span>Emergency Help</span>
										<h6>
											<a href='tel:+0770 211 1332'>0770 211 1332</a>
										</h6>
									</div>
								</div>
								<div className='contact__area-info-item'>
									<div className='contact__area-info-item-icon'>
										<i className='fal fa-envelope'></i>
									</div>
									<div className='contact__area-info-item-content'>
										<span>Quick Email</span>
										<h6>
											<a href='mailto:tawasoul.office@tawasoul.org'>
												tawasoul.office@tawasoul.org
											</a>
										</h6>
									</div>
								</div>
								<div className='contact__area-info-item'>
									<div className='contact__area-info-item-icon'>
										<i className='fal fa-map-marker-alt'></i>
									</div>
									<div className='contact__area-info-item-content'>
										<span>Office Address</span>
										<h6>
											<a href='#'>AL-Karradah District, Baghdad, Iraq </a>
										</h6>
									</div>
								</div>
							</div>
							<div className='contact__area-social'>
								<Social />
							</div>
						</div>
						<div className='col-xl-7 col-lg-7'>
							<div className='contact__area-form'>
								<h3 className='mb-35'>Send Massage</h3>
								<form action='#'>
									<div className='row'>
										<div className='col-sm-6 mb-30'>
											<div className='contact__area-form-item'>
												<i className='fal fa-user'></i>
												<input
													type='text'
													name='name'
													placeholder='Full Name'
													required='required'
												/>
											</div>
										</div>
										<div className='col-sm-6 sm-mb-30'>
											<div className='contact__area-form-item'>
												<i className='far fa-envelope-open'></i>
												<input
													type='email'
													name='email'
													placeholder='Email Address'
													required='required'
												/>
											</div>
										</div>
										<div className='col-sm-6 mb-30'>
											<div className='contact__area-form-item'>
												<i className='far fa-phone-alt'></i>
												<input
													type='text'
													name='phone'
													placeholder='Phone'
													required='required'
												/>
											</div>
										</div>
										<div className='col-sm-6 sm-mb-30'>
											<div className='contact__area-form-item'>
												<i className='far fa-address-book'></i>
												<input
													type='text'
													name='subject'
													placeholder='Subject'
													required='required'
												/>
											</div>
										</div>
										<div className='col-sm-12 mb-30'>
											<div className='contact__area-form-item'>
												<i className='far fa-comments'></i>
												<textarea
													name='message'
													placeholder='Type your comments....'
												></textarea>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='contact__area-form-item'>
												<button className='theme-btn' type='submit'>
													Submit Now<i className='fal fa-long-arrow-right'></i>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='contact__area-map section-padding'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.096574023845!2d44.392839075473275!3d33.30564537350714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578171e36d34e3%3A0x4231748d3dcef7a3!2sAl%20Karrada%2C%20Baghdad%2C%20Iraq!5e0!3m2!1sen!2siq!4v1712924200000!5m2!1sen!2siq'
									width='100%'
									height='450'
									style={{ border: 0 }}
									allowFullScreen=''
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contactcontainer;
