"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Rupees } from "./svg-components/Rupees";
import Link from "next/link";
import { PackagCard } from "./PackagCard";
import data from "@/Data/All_packages.json";

export const ProductSlider = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: false,
  };
  return (
    <>
      <Slider {...settings} {...props}>
        {data.map((test, index) => (
          <div className="  m-auto">
            <PackagCard
              key={index}
              Test_Name={test.PackageName}
              Test_for={test.Test_Name}
              Test_Amount={parseInt(test.ActualPrice)}
              Discount_Amount={parseInt(test.DiscountPrice)}
              Test_info={test.TestInfo || []}
              Number_test={test.TestInfo ? test.TestInfo.length : 0}
              Test_Slug={test.Slug}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
