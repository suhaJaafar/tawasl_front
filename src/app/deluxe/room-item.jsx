'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const RoomItem = ({ program }) => {
	if (!program) return null;
	return (
		<>
			<div className='deluxe__area-item-image'>
				{program.image?.url ? (
					<Image
						src={program.image.url}
						alt={program.title}
						width={700}
						height={300}
						style={{ objectFit: 'cover' }}
					/>
				) : (
					<div></div>
				)}
			</div>
			<div className='deluxe__area-item-content'>
				<h4>
					<Link href={`/blog-details/${program.id}`}>{program.title}</Link>
				</h4>
				<Link className='simple-btn' href={`/blog-details/${program.id}`}>
					<i className='far fa-chevron-right'></i>Read More
				</Link>
			</div>
		</>
	);
};

export default RoomItem;
