"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export const AssureSlide = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings} {...props}>
        <div>
          <div className="swiperslider">
            <Image
              className="d-sm-block d-none"
              src="/banner03.webp"
              alt="Comprehensive Health Checkup"
              width={1220}
              height={730}
            />
            <Image
              className="d-sm-none d-block"
              src="/banner_m.webp"
              alt="Comprehensive Health Checkup"
              width={1220}
              height={300}
            />
          </div>
        </div>
        <div>
          <div className="swiperslider">
            <Image
              className="d-sm-block d-none"
              src="/banner01.webp"
              alt="Early Detection is the Key of Cure"
              width={1220}
              height={730}
            />
            <Image
              className="d-sm-none d-block"
              src="/banner_m.webp"
              alt="Comprehensive Health Checkup"
              width={1220}
              height={300}
            />
          </div>
        </div>
        <div>
          <div className="swiperslider">
            <Image
              className="d-sm-block d-none"
              src="/banner02.webp"
              alt="Full Body Health Checkup"
              width={1220}
              height={730}
            />
            <Image
              className="d-sm-none d-block"
              src="/banner_m.webp"
              alt="Comprehensive Health Checkup"
              width={1220}
              height={300}
            />
          </div>
        </div>
      </Slider>
    </>
  );
};
