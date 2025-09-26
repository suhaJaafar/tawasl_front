'use client';

import React, { useEffect, useState } from 'react';
import { Page } from './Menu';
import DropDown from './DropDown';
import Link from 'next/link';
import Image from 'next/image';
type HeaderOneProps = {
	variant?: string;
};
export default function HeaderOne({ variant }: HeaderOneProps) {
	const [mobileToggle, setMobileToggle] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className={`header__sticky ${variant || ''} ${
				isSticky ? 'header__sticky-sticky-menu' : ''
			}`}
		>
			<div className='header__area'>
				<div className='container custom__container'>
					<div className='header__area-menubar'>
						{/* Logo and Menu */}
						<div className='header__area-menubar-left'>
							<div className='header__area-menubar-left-logo'>
								<Link href='/' className='bg-white p-2 rounded'>
									<Image src='/logo.png' alt='logo' width={90} height={50} />
								</Link>
								<span
									className={
										mobileToggle
											? 'mobile-menu mobile-menu-active'
											: 'mobile-menu'
									}
									onClick={() => setMobileToggle(!mobileToggle)}
								>
									<span></span>
								</span>
							</div>
						</div>
						{/* Menu items */}
						<div className='header__area-menubar-right'>
							<div className='header__area-menubar-right-menu menu-responsive'>
								<ul
									className='mobile__menu'
									style={{ display: mobileToggle ? 'block' : 'none' }}
								>
									<li>
										<Link href='/'>Home</Link>
									</li>
									<li className='menu-item-has-children'>
										<a href='#'>About</a>
										<DropDown></DropDown>

										<ul className='sub-menu'>
											<Page />
										</ul>
									</li>

									{/* <li>
										<Link href='/our_programs'>Our Programs</Link>
									</li> */}
									<li>
										<Link href='/blog-grid'>blog-grid</Link>
									</li>
									<li>
										<Link href='/programs'>Our Programs</Link>
									</li>
									<li>
										<Link href='/initiatives'>Initiatives</Link>
									</li>
									{/* <li className='menu-item-has-children'>
										<a href='#'>Room</a>
										<DropDown></DropDown>
										<ul className='sub-menu'>
											<Room />
										</ul>
									</li> */}
									{/* <li className='menu-item-has-children'>
										<a href='#'>Blog</a>
										<DropDown></DropDown>
										<ul className='sub-menu'>
											<Blog />
										</ul>
									</li> */}
									<li>
										<Link href='/contact'>Contact</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className='header__area-menubar-right-box'>
							<div className='header__area-menubar-right-box-btn'>
								<Link className='theme-btn' href='/contact'>
									Contact Us <i className='fal fa-long-arrow-right'></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
