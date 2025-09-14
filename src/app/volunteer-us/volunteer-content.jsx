'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const VolunteerContent = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		skills: '',
		availability: '',
		experience: '',
		motivation: '',
		program: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Volunteer application:', formData);
		// You can add your form submission logic here
		alert(
			'Thank you for your interest in volunteering! We will contact you soon.'
		);
	};

	return (
		<div className='volunteer__area section-padding'>
			<div className='container'>
				{/* Hero Section */}
				<div className='volunteer__hero'>
					<div className='row align-items-center'>
						<div className='col-xl-6 col-lg-6'>
							<div className='volunteer__hero-content'>
								<h2>Join Our Mission</h2>
								<h3>Volunteer With Tawasl</h3>
								<p>
									Make a difference in your community by joining our volunteer
									program. Whether you have a few hours a week or can commit to
									longer-term projects, your contribution matters and helps us
									create positive change.
								</p>
								<div className='volunteer__hero-benefits'>
									<div className='benefit-item'>
										<i className='fas fa-check-circle'></i>
										<span>Meaningful community impact</span>
									</div>
									<div className='benefit-item'>
										<i className='fas fa-check-circle'></i>
										<span>Skill development opportunities</span>
									</div>
									<div className='benefit-item'>
										<i className='fas fa-check-circle'></i>
										<span>Connect with like-minded people</span>
									</div>
									<div className='benefit-item'>
										<i className='fas fa-check-circle'></i>
										<span>Flexible scheduling</span>
									</div>
								</div>
							</div>
						</div>
						<div className='col-xl-6 col-lg-6'>
							<div className='volunteer__hero-image d-flex justify-content-center align-items-center'>
								<Image
									src='/img/volunteer_with_tawasl.jpeg'
									alt='Volunteers'
									width={270}
									height={500}
									className='volunteer-hero-img'
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Volunteer Opportunities */}
				<div className='volunteer__opportunities'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='volunteer__opportunities-title'>
								<h3>Volunteer Opportunities</h3>
								<p>Find the perfect way to contribute to our mission</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-xl-4 col-lg-4 col-md-6'>
							<div className='volunteer__card'>
								<div className='volunteer__card-icon'>
									<i className='fas fa-chalkboard-teacher'></i>
								</div>
								<h4>Training</h4>
								<p>
									Help teach skills, lead workshops, or mentor program
									participants
								</p>
								<ul>
									<li>Language classes</li>
									<li>Computer literacy</li>
									<li>Youth mentoring</li>
								</ul>
							</div>
						</div>
						<div className='col-xl-4 col-lg-4 col-md-6'>
							<div className='volunteer__card'>
								<div className='volunteer__card-icon'>
									<i className='fas fa-hands-helping'></i>
								</div>
								<h4>Community Support</h4>
								<p>
									Assist with community outreach and direct service programs
								</p>
								<ul>
									<li>Event planning</li>
									<li>Food distribution</li>
									<li>Community garden</li>
									<li>Elder care support</li>
								</ul>
							</div>
						</div>
						<div className='col-xl-4 col-lg-4 col-md-6'>
							<div className='volunteer__card'>
								<div className='volunteer__card-icon'>
									<i className='fas fa-laptop-code'></i>
								</div>
								<h4>Digital & Marketing</h4>
								<p>Support our online presence and communication efforts</p>
								<ul>
									<li>Social media management</li>
									<li>Website updates</li>
									<li>Graphic design</li>
									<li>Content creation</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Volunteer Application Form */}
				<div className='volunteer__application'>
					<div className='row'>
						<div className='col-xl-8 offset-xl-2'>
							<div className='volunteer__form'>
								<div className='volunteer__form-title'>
									<h3>Volunteer Application</h3>
									<p>
										Ready to make a difference? Fill out the form below to get
										started.
									</p>
								</div>
								<form onSubmit={handleSubmit} className='volunteer-form'>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-group'>
												<label htmlFor='name'>Full Name *</label>
												<input
													type='text'
													id='name'
													name='name'
													value={formData.name}
													onChange={handleChange}
													required
													placeholder='Enter your full name'
												/>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group'>
												<label htmlFor='email'>Email Address *</label>
												<input
													type='email'
													id='email'
													name='email'
													value={formData.email}
													onChange={handleChange}
													required
													placeholder='Enter your email'
												/>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-group'>
												<label htmlFor='phone'>Phone Number</label>
												<input
													type='tel'
													id='phone'
													name='phone'
													value={formData.phone}
													onChange={handleChange}
													placeholder='Enter your phone number'
												/>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group'>
												<label htmlFor='program'>Preferred Program *</label>
												<select
													id='program'
													name='program'
													value={formData.program}
													onChange={handleChange}
													required
												>
													<option value=''>Select a program</option>
													<option value='education'>
														Education & Training
													</option>
													<option value='community'>Community Support</option>
													<option value='digital'>Digital & Marketing</option>
													<option value='events'>Event Planning</option>
													<option value='other'>Other</option>
												</select>
											</div>
										</div>
									</div>
									<div className='form-group'>
										<label htmlFor='motivation'>
											Why do you want to volunteer with us?
										</label>
										<textarea
											id='motivation'
											name='motivation'
											value={formData.motivation}
											onChange={handleChange}
											placeholder='Share your motivation for volunteering'
											rows='4'
										></textarea>
									</div>
									<div className='form-group text-center'>
										<button type='submit' className='theme-btn'>
											Submit Application
											<i className='fal fa-long-arrow-right'></i>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				{/* Contact Info */}
				<div className='volunteer__contact'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='volunteer__contact-content text-center'>
								<h3>Have Questions?</h3>
								<p>
									If you have any questions about volunteering or need more
									information about our programs, don't hesitate to reach out.
								</p>
								<div className='volunteer__contact-info'>
									<div className='contact-item'>
										<i className='fas fa-envelope'></i>
										<span>tawasoul.office@gmail.com</span>
									</div>
									<div className='contact-item'>
										<i className='fas fa-phone'></i>
										<span>+964 770 211 1332</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VolunteerContent;
