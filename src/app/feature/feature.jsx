import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function Feature() {
	return (
		<div className='feature__area mt-36'>
			<div className='container'>
				<div className='row align-items-center bg-left mb-60 flex justify-between'>
					<div className='col-xl-6 col-lg-6'>
						<div className='feature__area-image border-2 border-[#0a3d73]'>
							<Image
								alt=''
								src='/img/features/what_do_we_do.jpg'
								width={600}
								height={600}
							/>
						</div>
					</div>
					<div className='col-xl-6 col-lg-6'>
						<div className='feature__area-left'>
							<div className='feature__area-left-title'>
								<span className='subtitle__one'>Our Work</span>
								<h2>What Do We Do?</h2>
								<p>
									Empowering transparency and progress through independent
									programs and government monitoring. We bridge private insights
									with public sector impact.
								</p>
								<Link className='theme-border-btn' href='/about'>
									Read More <FaArrowRight className='ml-10' />
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='row align-items-center bg-right mb-60 flex justify-between'>
					<div className='col-xl-6 col-lg-6  order-last order-lg-first'>
						<div className='feature__area-left'>
							<div className='feature__area-left-title'>
								<span className='subtitle__one'>Read Our Books</span>
								<h2>The Library</h2>
								<p>
									Proin massa augue, lacinia at blandit ac, fringilla
									scelerisque tortor. Mauris sit amet lectus porta,
								</p>
								<Link className='theme-border-btn' href='/about'>
									Read More <FaArrowRight className='ml-10' />
								</Link>
							</div>
						</div>
					</div>
					<div className='col-xl-6 col-lg-6'>
						<div className='feature__area-image'>
							<Image
								src='/img/features/feature-2.jpg'
								alt=''
								width={600}
								height={600}
							/>
						</div>
					</div>
				</div> */}
				{/* <div className='row align-items-center bg-left mb-60 flex justify-between'>
					<div className='col-xl-6 col-lg-6'>
						<div className='feature__area-image'>
							<Image
								src='/img/features/feature-3.jpg'
								alt=''
								width={600}
								height={600}
							/>
						</div>
					</div>
					<div className='col-xl-6 col-lg-6'>
						<div className='feature__area-left'>
							<div className='feature__area-left-title p-4'>
								<span className='subtitle__one'>Fitness Equipment</span>
								<h2>Exercise equipment</h2>
								<p>
									Proin massa augue, lacinia at blandit ac, fringilla
									scelerisque tortor. Mauris sit amet lectus porta,
								</p>
								<Link className='theme-border-btn' href='/about'>
									Read More <FaArrowRight className='ml-10' />
								</Link>
							</div>
						</div>
					</div>
				</div> */}
				<div className='row align-items-center bg-right flex justify-between'>
					<div className='col-xl-6 col-lg-6 order-last order-lg-first'>
						<div className='feature__area-left'>
							<div className='feature__area-left-title'>
								<span className='subtitle__one'>Our Initiatives</span>
								<h2>Initiatives</h2>
								<p>
									Our initiatives drive impactful change through targeted
									programs, activities, and partnerships that promote
									accountability and innovation in public governance.
								</p>
								<Link className='theme-border-btn' href='/about'>
									Discover Them <FaArrowRight className='ml-10' />
								</Link>
							</div>
						</div>
					</div>
					<div className='col-xl-6 col-lg-6'>
						<div className='feature__area-image'>
							<Image
								src='/img/features/our_initiatives.jpg'
								alt=''
								width={600}
								height={600}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
