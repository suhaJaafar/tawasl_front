'use client';

import Link from 'next/link';
import React from 'react';

const RoomItem = ({ program }) => {
	if (!program) return null;
	return (
		<>
			<div className='deluxe__area-item-image'>
				<img className='img__full' src={program.image?.url} alt='image' />
			</div>
			<div className='deluxe__area-item-content'>
				<h4>
					<Link href='/room-details'>{program.title}</Link>
				</h4>
				<Link className='simple-btn' href={`/blog-details/${program.id}`}>
					<i className='far fa-chevron-right'></i>Read More
				</Link>
			</div>
		</>
	);
};

export default RoomItem;
