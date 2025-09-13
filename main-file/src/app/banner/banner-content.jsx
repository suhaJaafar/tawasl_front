import React, { useState } from 'react';
// import ReactPlayer from "react-player/youtube";
import dynamic from 'next/dynamic';
const BannerContent = () => {
	const [show, setShow] = useState(false);
	const [isOpen, setOpen] = useState(false);
	const ReactPlayer = dynamic(() => import('react-player/youtube'), {
		ssr: false,
	});
	return (
		<div className='row'>
			<div className='col-xl-12'>
				<div className='banner__area-title'>
					<p className='text-4xl sm:text-6xl md:text-4xl lg:text-6xl xl:text-6xl text-white'>
						Tawasoul Org.
						<span className='block pt-4 '>for Youth Empowerment</span>
					</p>
					<div className='banner__area-title-video'>
						<div className='video__play'>
							{/*<React.Fragment>*/}
							{/*  <ReactPlayer*/}
							{/*      key={show ? "playing" : "stopped"}*/}
							{/*      url="https://www.youtube.com/watch?v=SZEflIVnhH8"*/}
							{/*      playing={show}*/}
							{/*      controls*/}
							{/*      width="100%"*/}
							{/*      height="100%"*/}
							{/*      style={{ position: "absolute", top: 0, left: 0 }}*/}
							{/*  />*/}
							{/*  <span onClick={() => setOpen(true)}>*/}
							{/*    <i className="fas fa-play"></i>*/}
							{/*  </span>*/}
							{/*</React.Fragment>*/}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerContent;
