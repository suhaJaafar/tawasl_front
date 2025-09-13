"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

export default function Videoarea() {
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="video__area" style={{ backgroundImage: `url('/img/video.jpg')` }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Title */}
                    <div className="col-xxl-6 col-xl-7 col-lg-8">
                        <div className="video__area-title">
                            <h2>Book hotel rooms, get deals & book flights online.</h2>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-5 col-lg-4">
                        <div className="video__area-right">
                            <div className="video__play">
                <span onClick={handleOpen} style={{ cursor: "pointer" }}>
                  <i className="fas fa-play"></i>
                </span>

                                {/* Modal */}
                                <Modal show={show} onHide={handleClose} centered size="lg">
                                    <Modal.Body className="p-0">
                                        <div style={{ position: "relative", paddingTop: "56.25%" }}>
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=SZEflIVnhH8"
                                                playing
                                                controls
                                                width="100%"
                                                height="100%"
                                                style={{ position: "absolute", top: 0, left: 0 }}
                                            />
                                        </div>
                                    </Modal.Body>
                                </Modal>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}