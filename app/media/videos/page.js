"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Slider from "react-slick";
import { Box, Button, Fade, Modal } from "@mui/material";

const CustomModal = ({
  open,
  onClose,
  videoUrl,
  handleVideoLoaded,
  videoLoading,
}) => {
  const videoRef = useRef(null);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      // slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box className="modal_content flex-center">
          {/* <Button onClick={onClose} className="modal_closer">
            <IoCloseOutline />
          </Button> */}
          <Box className="modal_body d-flex flex-column">
            <Box
              className={`search_loader vedio_review_loader ${
                videoLoading ? "open" : "close"
              }`}
            ></Box>
            <Button onClick={onClose} className="_cart_back_icon close_btn">
              <IoCloseOutline />
            </Button>
            {videoUrl && (
              <video
                autoPlay
                controls
                width="400"
                height="720"
                ref={videoRef}
                onLoadedData={handleVideoLoaded}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export const page = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (index) => {
    setSelectedVideoIndex(index);
    setVideoLoading(true);
    setModalIsOpen(true);
  };

  const handleVideoClick = (index) => {
    openModal(index);
  };

  const closeModal = () => {
    setSelectedVideoIndex(null);
    setVideoLoading(false);
    setIsVideoPlaying(false);
    setModalIsOpen(false);
  };

  const handleVideoloaded = () => {
    setVideoLoading(false);
    setIsVideoPlaying(true);
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: isVideoPlaying,
    autoplaySpeed: 6000,
    speed: 900,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true, // Enable pause on hover
    responsive: [
      {
        breakpoint: 1400, // Small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Extra small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      thumbnail: "/video_tumbnail_01.png",
      videoUrl: "/vedio02.mp4",
      description:
        "Let's Talk on Cancer by Dr. Sanjay Wadhwa | Assure Pathlabs",
    },
    {
      thumbnail: "/video_tumbnail_02.png",
      videoUrl: "/vedio03.mp4",
      description:
        "Let's Talk on Thyroid by Dr. Sanjay Wadhwa | Assure Pathlabs",
    },
    {
      thumbnail: "/video_tumbnail_03.png",
      videoUrl: "/vedio01.mp4",
      description:
        "Let's Talk on Diabetes by Dr. Sanjay Wadhwa | Assure Pathlabs",
    },
    {
      thumbnail: "/video_tumbnail_03.png",
      videoUrl: "/vedio01.mp4",
      description:
        "Let's Talk on Diabetes by Dr. Sanjay Wadhwa | Assure Pathlabs",
    },
  ];
  const getAosDuration = (index) => {
    if (index === 0) {
      return 350; // First slide duration
    } else if (index === 1) {
      return 300; // Second slide duration
    } else if (index === 2) {
      return 350; // Second slide duration
    } else {
      return 400; // Third and subsequent slides duration
    }
  };

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div
                className="title col-12 float-start text-center"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2 className="">OUR VIDEOS</h2>
              </div>
              <div className="vedio_review_scn d-flex flex-wrap justify-content-evenly pt-0 pt-sm-3">
                {data.map((video, index) => (
                  <div
                    className="_vedio_div"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={getAosDuration(index)}
                    data-aos-duration={getAosDuration(index)}
                    data-aos-once="true"
                    data-aos-offset={getAosDuration(index)}
                    data-aos-easing="ease-in"
                  >
                    <div className="vedio_cont">
                      <div
                        className="vedio_thumbnail"
                        onClick={() => handleVideoClick(index)}
                      >
                        <Image
                          src={video.thumbnail}
                          alt="gradient file"
                          width={400}
                          height={250}
                        />
                        <i>
                          <FaPlay />
                        </i>
                      </div>

                      <p>{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" /> */}
        {/* <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" /> */}
      </section>
      <CustomModal
        open={modalIsOpen}
        onClose={closeModal}
        videoUrl={
          selectedVideoIndex !== null ? data[selectedVideoIndex].videoUrl : ""
        }
        handleVideoloaded={handleVideoloaded}
        videoLoading={videoLoading}
      />
    </>
  );
};

export default page;
