import Link from "next/link";
import React, { useState } from "react";
// import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });
  return (
    <div
      className="banner__three"
      style={{ backgroundImage: `url('/img/bg/banner-bg.jpg')` }}
    >
      <div className="container custom__container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 order-last order-lg-first">
            <div className="banner__three-title">
              <span className="subtitle__one">Hotel Booking Website</span>
              <h1>
                Book hotels online<span> Get 20% Off !</span>
              </h1>
              <Link className="theme-btn" href="/about">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link>
              <div className="banner__three-title-video">
                <div className="video__play">
                  <React.Fragment>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=SZEflIVnhH8"
                        playing
                        controls
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", top: 0, left: 0 }}
                    />
                    <span onClick={() => setOpen(true)}>
                      <i className="fas fa-play"></i>
                    </span>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 lg-mb-60">
            <div className="banner__three-right">
              <img className="img__full" src="/img/banner-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
