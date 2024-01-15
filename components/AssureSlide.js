"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

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
      <div className="home_banner position-relative">
        <div className="banner_slider">
          <Slider {...settings} {...props}>
            <div>
              <div className="banner_slide">
                <Image
                  className=""
                  src="/banner1.png"
                  alt="Early Detection is the Key of Cure"
                  width={630}
                  height={500}
                />
                <Link href="/packages/assure-complete-wellness-package-for-man">
                  <button className="button button--aylen button--round-l button--text-thick  gradient   flex-center gap-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Image
                  className=""
                  src="/banner2.png"
                  alt="Early Detection is the Key of Cure"
                  width={630}
                  height={500}
                />
                <Link href="/packages/healthy-heart-panel">
                  <button className="button button--aylen button--round-l button--text-thick  gradient   flex-center gap-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Image
                  className=""
                  src="/banner3.png"
                  alt="Early Detection is the Key of Cure"
                  width={630}
                  height={500}
                />
                <Link href="/test-detail/dengue-antibodies-igg-igm-ns1ag">
                  <button className="button button--aylen button--round-l button--text-thick  gradient   flex-center gap-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Image
                  className=""
                  src="/banner4.png"
                  alt="Early Detection is the Key of Cure"
                  width={630}
                  height={500}
                />
                <Link href="https://patient-in.creliohealth.com/patient/login">
                  <button className="button button--aylen button--round-l button--text-thick  gradient   flex-center gap-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
