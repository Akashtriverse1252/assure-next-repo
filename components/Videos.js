"use client";

import React from "react";
import Slider from "react-slick";

export const Videos = (props) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings} {...props}>
        {/* <div>
          <div className="vedio_cont">
            <iframe
              width="1200px"
              height="100%"
              src="https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div className="vedio_cont">
            <iframe
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div className="vedio_cont">
            <iframe
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div className="vedio_cont">
            <iframe
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div className="vedio_cont">
            <iframe
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div className="vedio_cont">
            <iframe
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/1w815ClswG4?si=vTlsyfxCm9_lAIg7&amp;start=100"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
      </Slider>
    </>
  );
};
