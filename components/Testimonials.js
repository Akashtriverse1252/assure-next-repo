"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Star } from "../components/svg-components/Star";
import Halfstar from "../components/svg-components/Halfstar";
import review_image from "@/public/google review.jpg";
import Google from "../components/svg-components/Google";
import TestimonialData from "../Data/TestimonialData.json";
import { Rating } from "@mui/material";
import Image from "next/image";
import OverAllReview from "./OverAllReview";

export const Testimonials = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      const prevSlide = currentSlide - 1;
      // Prevent going below 0
      if (prevSlide >= 0) {
        sliderRef.current.slickPrev();
        setCurrentSlide(prevSlide);
      }
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      const nextSlide = currentSlide + 1;
      // Prevent exceeding 20.4
      if (nextSlide <= 20.4) {
        sliderRef.current.slickNext();
        setCurrentSlide(nextSlide);
      }
    }
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    autoplay: true,
    prevArrow: null, // or you can pass a custom React component here
    nextArrow: null,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1690,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
        autoplaySpeed: 6000,
      },
      {
        breakpoint: 1610,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        autoplaySpeed: 6000,
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
        autoplaySpeed: 6000,
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },  
      {
        breakpoint: 620,
        autoplaySpeed: 5000,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        autoplaySpeed: 5000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="testimonial_container">
        <div className="google_review_sction">
          <OverAllReview
            currentSlide={currentSlide}
            goToPrevSlide={goToPrevSlide}
            goToNextSlide={goToNextSlide}
            totalSide={TestimonialData.reviews.length}
          />
          {/* <OverAllReview /> */}
        </div>
        <div
          className="google_review"
          data-aos="fade-up"
          data-aos-duration={400}
          data-aos-once="true"
          data-aos-easing="ease-in"
        >
          <div className="googlereviewslider">
            <Slider {...settings} {...props} ref={sliderRef}>
              {TestimonialData.reviews.map((review, index) => (
                <div key={index}>
                  <div className="google_testimonial">
                    <Rating name="read-only" value={review.rating} readOnly />
                    <p className="revier_cnt">{review.content}</p>
                    <p className="revier_name">{review.author}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
