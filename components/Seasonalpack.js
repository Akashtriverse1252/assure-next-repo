"use client";
import React from "react";
import Slider from "react-slick";
import { Rupees } from "./svg-components/Rupees";
import testData from "../Data/seasonaltst.json";
import { TestCard } from "@/components/TestCard";

export const Seasonalpack = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} {...props}>
        {testData.test_data.map((test, index) => (
          <div>
            <TestCard
              key={index}
              Slug={test.Slug}
              Test_Name={test.Test_Name}
              Test_Amount={test.Test_Amount}
              Discount_Amount={test.Discount_Amount}
              Test_Category={test.Test_Category}
              Test_ID={test.Test_ID}
              Test_Description={test.Test_Description}
              Who_is_it_for={test.Who_is_it_for}
              Pre_test_information={test.Pre_test_information}
              Turn_around_time={test.Turn_around_time}
              widthFull={true}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
