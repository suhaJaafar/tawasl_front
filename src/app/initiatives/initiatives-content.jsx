import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function InitiativesContent() {
	const initiatives = [
		{
			id: 1,
			title: 'Government Transparency Program',
			description:
				'Monitoring and evaluating government programs to ensure transparency and accountability in public sector operations.',
			image: '/img/features/our_initiatives.jpg',
			link: '/initiatives/transparency',
		},
		{
			id: 2,
			title: 'Public Policy Research',
			description:
				'Conducting independent research on public policies and their impact on communities and economic development.',
			image: '/img/banner/our_programs.jpg',
			link: '/initiatives/policy-research',
		},
		{
			id: 3,
			title: 'Community Engagement',
			description:
				'Building bridges between citizens and government through community outreach and engagement programs.',
			image: '/img/banner/our_programs.jpg',
			link: '/initiatives/community-engagement',
		},
		{
			id: 4,
			title: 'Innovation in Governance',
			description:
				'Promoting innovative approaches to governance through technology and modern administrative practices.',
			image: '/img/banner/our_programs.jpg',
			link: '/initiatives/innovation',
		},
	];

	return (
		<div className='initiatives__area section-padding'>
			<div className='container'>
				{/* Main Introduction */}
				<div className='row mb-60'>
					<div className='col-xl-8 col-lg-8 mx-auto text-center'>
						<div className='initiatives__area-title'>
							<span className='subtitle__one'>Our Impact</span>
							<h2>Driving Change Through Strategic Initiatives</h2>
							<p>
								Our initiatives represent our commitment to transparency,
								accountability, and progress in public governance. Through
								targeted programs and partnerships, we work to bridge the gap
								between private sector insights and public sector impact.
							</p>
						</div>
					</div>
				</div>

				{/* Initiatives Grid */}
				<div className='row'>
					{initiatives.map((initiative, index) => (
						<div
							key={initiative.id}
							className='col-xl-6 col-lg-6 col-md-12 mb-30'
						>
							<div
								className={`initiatives__area-item ${
									index % 2 === 0 ? 'bg-left' : 'bg-right'
								}`}
							>
								<div className='row align-items-center'>
									{index % 2 === 0 ? (
										<>
											<div className='col-xl-6 col-lg-6'>
												<div className='initiatives__area-item-image'>
													<Image
														src={initiative.image}
														alt={initiative.title}
														width={400}
														height={300}
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6'>
												<div className='initiatives__area-item-content'>
													<h4>{initiative.title}</h4>
													<p>{initiative.description}</p>
													<Link
														className='theme-border-btn'
														href={initiative.link}
													>
														Learn More <FaArrowRight className='ml-10' />
													</Link>
												</div>
											</div>
										</>
									) : (
										<>
											<div className='col-xl-6 col-lg-6 order-last order-lg-first'>
												<div className='initiatives__area-item-content'>
													<h4>{initiative.title}</h4>
													<p>{initiative.description}</p>
													<Link
														className='theme-border-btn'
														href={initiative.link}
													>
														Learn More <FaArrowRight className='ml-10' />
													</Link>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6'>
												<div className='initiatives__area-item-image'>
													<Image
														src={initiative.image}
														alt={initiative.title}
														width={400}
														height={300}
													/>
												</div>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className='row mt-60'>
					<div className='col-xl-8 col-lg-8 mx-auto text-center'>
						<div className='initiatives__area-cta'>
							<h3 className='text-white'>Ready to Get Involved?</h3>
							<p>
								Join us in our mission to promote transparency and
								accountability. Contact us to learn how you can contribute to
								our initiatives.
							</p>
							<Link className='theme-btn mt-20' href='/contact'>
								Contact Us <FaArrowRight className='ml-10' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
