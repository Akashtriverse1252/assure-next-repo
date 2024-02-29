import { useState } from "react";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const YourCustomModal = ({
  open,
  onClose,
  videoUrl,
  handleVideoloaded,
  videoLoading,
}) => {
  return (
    <div className={`your-custom-modal ${open ? "open" : "close"}`}>
      <div className="modal_content">
        <div className="modal_closer">
          <div onClick={onClose}>
            <IoCloseOutline />
          </div>
        </div>
        <div className="modal-body">
          <div
            className={`search_loader vedio_review_loader ${
              videoLoading ? "open" : "close"
            }`}
          >
            {/* <div className="loader"></div> */}
          </div>
          {videoUrl && (
            <iframe
              width="400"
              height="250"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleVideoloaded}
            ></iframe>
          )}
        </div>
      </div>
    </div>
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

  const data = [
    {
      thumbnail: "/video_tumbnail_01.jpg",
      videoUrl:
        "https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100&autoplay=1&controls=0&rel=1",
      description: "We are Indians, not Chinese! | Assurepath Labs",
    },
    {
      thumbnail: "/video_tumbnail_02.jpg",
      videoUrl:
        "https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100&autoplay=1&controls=0&rel=1",
      description: "Another dynamic description | Another Source",
    },
    // Add more video data as needed
  ];

  return (
    <>
      <div className="video_review_scene pt-0 pt-sm-3">
        {data.map((video, index) => (
          <div
            key={index}
            className="video_thumbnail"
            onClick={() => openModal(index)}
          >
            <Image
              src={video.thumbnail}
              alt="Video Thumbnail"
              width={400}
              height={250}
            />
            <i>
              <BsYoutube />
            </i>
            <p>{video.description}</p>
          </div>
        ))}
      </div>

      <YourCustomModal
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
