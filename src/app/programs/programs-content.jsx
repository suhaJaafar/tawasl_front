import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { fetchPrograms } from '../../utils/fetchPrograms';

export default function ProgramsContent() {
	const [programs, setPrograms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	console.log('ENV URL:', apiUrl);

	useEffect(() => {
		fetchPrograms()
			.then((data) => {
				setPrograms(data.data || []);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	return (
		<div className='container mt-6'>
			<div className='row'>
				{programs?.map((data, id) => (
					<div className='col-xl-4 col-lg-6 col-md-6 mb-30' key={id}>
						<div className='blog__two-item'>
							<div className='blog__two-item-image'>
								<div className='initiatives__area-item-image'>
									{data.image?.url ? (
										<Image
											src={data.image.url}
											alt={data.title}
											width={400}
											height={300}
											style={{ objectFit: 'cover' }}
										/>
									) : (
										<div
											style={{
												width: '400px',
												height: '300px',
												backgroundColor: '#f0f0f0',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#666',
											}}
										>
											No Image
										</div>
									)}
								</div>
								<div className='blog__two-item-image-date'>
									<h5>{data.date}</h5>
									<span>{data.month}</span>
								</div>
							</div>
							<div className='blog__two-item-content'>
								<h6>Post by - {data.postby}</h6>
								<h4>
									<a href={`/blog-details/${data.id}`}>{data.title}</a>
								</h4>
								<a className='simple-btn' href={`/blog-details/${data.id}`}>
									<i className='far fa-chevron-right'></i>Read More
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
