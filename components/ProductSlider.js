"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAlert } from "@/context/AlerterContext";
import Slider from "react-slick";
import { PackagCard } from "./PackagCard";
import { Rupees } from "./svg-components/Rupees";
import { TestCard } from "@/components/TestCard";
import { useData } from "@/context/context";
const URL = `https://www.assurepathlabs.com/api/algos/fetch_details.php?category=package&start=packages&start=0&limit=8`;

export const ProductSlider = (props) => {
  const { cartState, cartDispatch } = useData();
  const [isInCart, setIsInCart] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showAlert } = useAlert();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        const data = await response.json();
        setProject(data);
        if (data.test_data.length === 0) {
          showAlert("info", "no data is found", "info");
          // console.log("no data is found");
        }
      } catch (error) {
        // console.error("Error fetching data:", error);
        showAlert("Error", "network Error", "error");
      } finally {
        setLoading(false);
      }
    };
    console.log("this is the wellness api data", project);

    fetchData();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    autoplay: true,
    initialSlide: 1, // Update this to 0
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1, // Update this to 0
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1, // Update this to 0
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          initialSlide: 1, // Update this to 0
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} {...props}>
        {project &&
          project.test_data.slice(0, 6).map((test, index) => (
            <div>
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
                BaseDirectory="packages"
              />
              {/* <TestCard
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
                BaseDirectory={
                  test.category === "test" ? "test-detail" : test.category
                }
              /> */}
            </div>
          ))}
      </Slider>
    </>
  );
};
