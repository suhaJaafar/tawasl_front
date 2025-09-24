import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { fetchInitiatives } from '../../utils/fetchInitiative';

export default function InitiativesContent() {
	const [initiatives, setInitiatives] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	console.log('ENV URL:', apiUrl);

	useEffect(() => {
		fetchInitiatives()
			.then((data) => {
				setInitiatives(data.data || []);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

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
					{loading && (
						<div className='col-12 text-center'>
							<p>Loading initiatives...</p>
						</div>
					)}
					{error && (
						<div className='col-12 text-center text-danger'>
							<p>{error}</p>
						</div>
					)}
					{!loading &&
						!error &&
						initiatives.map((initiative, index) => (
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
															src={initiative.image?.url}
															alt={initiative.title}
															width={400}
															height={300}
														/>
													</div>
												</div>
												<div className='col-xl-6 col-lg-6'>
													<div className='initiatives__area-item-content'>
														<h4>{initiative.title}</h4>
														{/* if description is long its bigger than 100 char so view 3 dots ..., other wise dont view the 3 dots , also truncate it */}
														<p>
															{initiative.description.length > 100
																? initiative.description.slice(0, 100) + '...'
																: initiative.description}
														</p>

														<Link
															className='theme-border-btn'
															href={`/initiatives/${initiative.id}`}
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
														{/* if description is long its bigger than 100 char so view 3 dots ..., other wise dont view the 3 dots , also truncate it */}
														<p>
															{initiative.description.length > 100
																? initiative.description.slice(0, 100) + '...'
																: initiative.description}
														</p>{' '}
														<Link
															className='theme-border-btn'
															href={`/initiatives/${initiative.id}`}
														>
															Learn More <FaArrowRight className='ml-10' />
														</Link>
													</div>
												</div>
												<div className='col-xl-6 col-lg-6'>
													<div className='initiatives__area-item-image'>
														<Image
															src={initiative.image?.url}
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
