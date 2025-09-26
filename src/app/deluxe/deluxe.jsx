'use client';

import React, { useState, useEffect } from 'react';
import RoomItem from './room-item';
import { fetchBlogs } from '../../utils/fetchBlogs';
import roomFilter from '../../components/data/room-filter';

const { filters } = roomFilter;

const Deluxe = () => {
	// Item Filter
	const [filter, setFilter] = useState('filter-item');
	// API Data
	const [programs, setPrograms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// Item Active Hover
	const [active, setActive] = useState(0);

	useEffect(() => {
		const getPrograms = async () => {
			try {
				const data = await fetchBlogs();
				setPrograms(data.data || []);
			} catch (err) {
				setError('Failed to load programs');
			} finally {
				setLoading(false);
			}
		};
		getPrograms();
	}, []);

	// Grid layout classes for varied design
	const gridClasses = [
		'col-xl-3 col-lg-4 mt-30',
		'col-xl-6 col-lg-8 mt-30',
		'col-xl-3 col-lg-4 mt-30',
		'col-xl-6 col-lg-8 mt-30',
		'col-xl-6 mt-30',
	];

	// Filtering logic (adapt as needed)
	const getFilteredPrograms = (filterData) => {
		if (filterData === 'filter-item') return programs;
		// If your API data has a 'filter' or category field, adjust this accordingly
		return programs.filter((program) =>
			Array.isArray(program.filter)
				? program.filter.includes(filterData)
				: false
		);
	};
	const filteredPrograms = getFilteredPrograms(filter).map(
		(program, index) => ({
			...program,
			class_s: program.class_s || gridClasses[index % gridClasses.length],
		})
	);

	const handelActive = (index) => {
		setActive(index);
	};

	return (
		<>
			<div className='deluxe__area section-padding'>
				<div className='container'>
					<div className='row align-items-end mb-30'>
						<div className='col-xl-5'>
							<div className='deluxe__area-title'>
								<span className='subtitle__one'>Our Programms</span>
								<h2 className='text-[#0a3d73]'>Our Programs</h2>
							</div>
						</div>
						<div className='col-xl-7'>
							<div className='deluxe__area-btn'>
								<ul>
									{filters.map(({ id, name, filterData }) => (
										<li
											key={id}
											onClick={() => setFilter(filterData)}
											className={filter === filterData ? 'active' : ''}
										>
											{name}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className='row'>
						{loading ? (
							<div className='col-12'>
								<div>Loading programs...</div>
							</div>
						) : error ? (
							<div className='col-12'>
								<div>{error}</div>
							</div>
						) : filteredPrograms.length > 0 ? (
							filteredPrograms.map((program, index) => (
								<div
									className={program.class_s}
									key={program.id}
									onMouseEnter={() => handelActive(index)}
								>
									<div
										className={`deluxe__area-item ${
											active === index ? 'deluxe__area-item-hover' : ''
										} ${
											Array.isArray(program.filter)
												? program.filter.join(' ')
												: ''
										}`}
									>
										<RoomItem program={program} />
									</div>
								</div>
							))
						) : (
							<div className='col-12'>
								<div>No programs found.</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Deluxe;
