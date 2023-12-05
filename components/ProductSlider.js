"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Rupees } from "./svg-components/Rupees";
import Link from "next/link";
import { PackagCard } from "./PackagCard";
import data from "@/Data/test_data.json";

export const ProductSlider = (props) => {
  var settings = {
    dots: false,
    infinite: true,
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
          dots: false,
        },
      },
      {
        breakpoint: 768,
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
  const packageData = data.test_data.filter(
    (item) => item.category === "package"
  );
  return (
    <>
      <Slider {...settings} {...props}>
        {packageData.map((test, index) => (
          <div className="  m-auto">
            <PackagCard
              key={index}
              Test_Name={test.Test_Name}
              Test_for={test.Test_Name}
              Test_Amount={parseInt(test.Test_Amount)}
              Discount_Amount={parseInt(test.Discount_Amount)}
              Test_info={test.TestInfo || []}
              Number_test={test.TestInfo ? test.TestInfo.length : 0}
              Test_Slug={test.Slug}
              widthFull={true}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
