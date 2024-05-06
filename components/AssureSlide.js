"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css"; // Import AOS CSS
import Aos from "aos";
import Left from "./svg-components/Left";
import Right from "./svg-components/Right";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
export const AssureSlide = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 5000,
    autoplay: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="home_banner position-relative">
        <div
          className="banner_slider"
          data-aos="fade-zoom-in"
          data-aos-delay={100}
          data-aos-duration={120}
          data-aos-once="true"
        >
          <Slider {...settings} {...props} ref={sliderRef}>
            <div>
              <div className="banner_slide">
                <Link href="/search/test-for-fever">
                  <Image
                    className="d-none d-sm-block"
                    src="/banner-2.webp"
                    alt="Early Detection is the Key of Cure"
                    width={1270}
                    height={780}
                  />
                  <Image
                    className="d-sm-none m_home_banner"
                    src="/banner-03-m.jpg"
                    alt="Early Detection is the Key of Cure"
                    width={1270}
                    height={780}
                  />
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Link href="/packages/assure-complete-wellness-package-for-man">
                  <Image
                    className="d-none d-sm-block"
                    src="/banner-3.webp"
                    alt="Early Detection is the Key of Cure"
                    width={1270}
                    height={780}
                  />
                  <Image
                    className="d-sm-none m_home_banner"
                    src="/banner-01-m.jpg"
                    alt="Early Detection is the Key of Cure"
                    width={630}
                    height={780}
                  />
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Link href="/organ/heart">
                  <Image
                    className="d-none d-sm-block"
                    src="/banner-4.webp"
                    alt="Early Detection is the Key of Cure"
                    width={1270}
                    height={780}
                  />
                  <Image
                    className="d-sm-none m_home_banner"
                    src="/banner-02-m.jpg"
                    alt="Early Detection is the Key of Cure"
                    width={630}
                    height={780}
                  />
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Link
                  href="https://patients.assurepathlabs.com/patient/login"
                  target="_blank"
                >
                  <Image
                    className="d-none d-sm-block"
                    src="/banner-01.webp"
                    alt="Early Detection is the Key of Cure"
                    width={1270}
                    height={780}
                  />
                  <Image
                    className="d-sm-none m_home_banner"
                    src="/banner-04-m.jpg"
                    alt="Early Detection is the Key of Cure"
                    width={630}
                    height={780}
                  />
                </Link>
              </div>
            </div>
          </Slider>
          <div className="currentslide flex-center">
            <button
              className="slider_count left flex-center "
              onClick={goToPrevSlide}
            >
              <PiCaretLeftThin />
            </button>
            {/* <span>
              {currentSlide + 1} - {4}
            </span> */}
            <button
              className="slider_count  flex-center"
              onClick={goToNextSlide}
            >
              <PiCaretRightThin />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
