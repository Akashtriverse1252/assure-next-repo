"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { BsYoutube } from "react-icons/bs";

export const Videos = (props) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
    setVideoLoading(true);
  };
  const handleVideoloaded = () => {
    setVideoLoading(false);
    setIsVideoPlaying(false);
  };
  console.log(isVideoPlaying);
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
        breakpoint: 1300, // Small devices
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
    {
      thumbnail: "/video_tumbnail_03.jpg",
      videoUrl:
        "https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100&autoplay=1&controls=0&rel=1",
      description: "Dynamic description for video 3 | Some Source",
    },
    {
      thumbnail: "/video_tumbnail_04.jpg",
      videoUrl:
        "https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100&autoplay=1&controls=0&rel=1",
      description: "Description for video 4 | Another Source",
    },
  ];

  return (
    <>
      <div className="vedio_review_scn pt-0 pt-sm-3">
        <Slider {...settings} {...props} adaptiveHeight={true}>
          {data.map((video, index) => (
            <div key={index}>
              <div className="vedio_cont">
                {selectedVideoIndex === index ? (
                  <div className=" iframe_scn">
                    <div
                      className={`search_loader vedio_revieew_loader ${
                        videoLoading ? "open" : "close"
                      }`}
                    >
                      <div className="loader"></div>
                    </div>
                    <iframe
                      width="400"
                      height="215"
                      src={video.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={handleVideoloaded}
                    ></iframe>
                  </div>
                ) : (
                  <div
                    className="vedio_thumbnail"
                    onClick={() => handleVideoClick(index)}
                  >
                    <Image
                      src={video.thumbnail}
                      alt="gradient file"
                      width={400}
                      objectFit="cover"
                      height={215}
                    />
                    <i>
                      <BsYoutube />
                    </i>
                  </div>
                )}
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
