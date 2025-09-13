'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonialData = [
	{
		image: '/img/avatar/wisam_jaafar.jpg',
		name: 'Wissam Jaafar',
		position: 'Manager',
		des: 'Leading our vision and operations to achieve organizational goals.',
	},
	{
		image: '/img/avatar/rauf_noori.jpg',
		name: 'Rauf Noori',
		position: 'Manager',
		des: 'Leading our vision and operations to achieve organizational goals.',
	},
	{
		image: '/img/avatar/emad_jabbar.jpg',
		name: 'Emad Jabbar',
		position: 'Manager',
		des: 'Leading our vision and operations to achieve organizational goals.',
	},
	{
		image: '/img/avatar/women_avatar.png',
		name: 'Sahar Jabbar',
		position: 'Trainer',
		des: 'Empowering skills and knowledge to drive impactful change.',
	},
	{
		image: '/img/avatar/women_avatar.png',
		name: 'Amira Dagher',
		position: 'HR Manager',
		des: 'Building connections and supporting our team for growth and success.',
	},
];

const Testimonial = () => {
	return (
		<>
			<div className='testimonial__area section-padding'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='testimonial__area-bg'>
								<Swiper
									pagination={{
										clickable: true,
									}}
									autoplay={{
										delay: 4500,
									}}
									loop={true}
									modules={[Autoplay, Pagination]}
								>
									{testimonialData?.map((data, id) => (
										<SwiperSlide key={id}>
											<div className='testimonial__area-item'>
												<div className='testimonial__area-item-image'>
													<img
														className='img__full'
														src={data.image}
														alt='image'
													/>
												</div>
												<div className='testimonial__area-item-content'>
													<h4>{data.name}</h4>
													<span>{data.position}</span>
													<p>{data.des}</p>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
