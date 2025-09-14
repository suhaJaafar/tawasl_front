'use client';
import Image from 'next/image';
import Offers from '../../../public/img/hotel/about_us_1.jpg';

const Offerarea = () => {
	return (
		<>
			<div className='offers__area section-padding'>
				<div className='container'>
					<div className='row justify-center items-center'>
						<div className='col-xl-9'>
							<div className='offers__area-title'>
								{/* <span className='subtitle__one'>Wellcome to our Org.</span> */}
								<h2>Wellcome to our Organization</h2>
								<p>
									The organization seeks to create an informed generation and
									promote societal peace, and to contribute to building good
									governance by issuing reliable and accurate data and
									indicators within a scientific methodology on various topics.
								</p>
							</div>
						</div>
					</div>
					<div className='row justify-center items-center'>
						<div className='col-xl-9'>
							<div className='offers__area-image'>
								<Image alt='' layout='responsive' src={Offers} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Offerarea;
