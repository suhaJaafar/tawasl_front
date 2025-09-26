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
		<div className='initiatives__area section-padding'>
			{/* just view the json data for test  */}
			<div>{JSON.stringify(programs, null, 2)}</div>
		</div>
	);
}
