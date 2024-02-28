"use client";

import React from "react";
import Slider from "react-slick";
import { Star } from "../components/svg-components/Star";
import Halfstar from "../components/svg-components/Halfstar";
import Google from "../components/svg-components/Google";
import TestimonialData from "../Data/TestimonialData.json";
import { Rating } from "@mui/material";

export const Testimonials = (props) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    autoplay: true,
    responsive: [
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
      <div>
        <div
          className="google_review"
          data-aos="fade-up"
          data-aos-duration={400}
          data-aos-once="true"
          data-aos-easing="ease-in"
        >
          <div className="googlereviewslider">
            <Slider {...settings} {...props}>
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
          <div className="col-12 flex-center  __trestmonail">
            <a
              className="button button--aylen button--round-l button--text-thick text-uppercase bg-white col-lg-3 col-md-6 col-10 "
              href="https://www.google.com/maps/place/Assure+Pathlabs+%7C+Best+Pathology+Labs+%26+Blood+Test+Lab+in+Jalandhar+Punjab/@31.3042172,75.5861548,15z/data=!4m8!3m7!1s0x391a5bb201b0f3d1:0x7856b16cd286d465!8m2!3d31.3042172!4d75.5861548!9m1!1b1!16s%2Fg%2F11f__bnrjm?entry=ttu"
              target="_blank"
            >
              READ ALL GOOGLE REVIEWS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
