import { useRef, useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Slider from "react-slick";
import { Box, Button, Fade, Modal } from "@mui/material";
import Link from "next/link";

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

export const Videos = () => {
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
      thumbnail: "/video_tumbnail_4.webp",
      videoUrl: "/Video04.mp4",
      description:
        "Let's Talk on Allergies by Dr. Sanjay Wadhwa | Assure Pathlabs",
    },
  ];
  const getAosDuration = (index) => {
    if (index === 0) {
      return 300; // First slide duration
    } else if (index === 1) {
      return 300; // Second slide duration
    } else if (index === 2) {
      return 300; // Second slide duration
    } else {
      return 400; // Third and subsequent slides duration
    }
  };

  return (
    <>
      <div className="vedio_review_scn pt-0 pt-sm-3">
        <Slider {...settings} adaptiveHeight={true}>
          {data.map((video, index) => (
            <div
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
        </Slider>
      </div>
      <div className="col-12 mx-auto text-center d-flex justify-content-center mt-3">
        <Link
          href={"/media/videos"}
          className=" col-xl-2 col-lg-3 col-md-4 col-11 "
        >
          <button className="button button--aylen button--round-l button--text-thick mx-auto gradient col-12">
            View More
          </button>
        </Link>
      </div>
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
