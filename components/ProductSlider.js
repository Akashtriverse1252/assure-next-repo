"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAlert } from "@/context/AlerterContext";
import useIntersectionObserver from "@/context/useIntersectionObserver";
import Slider from "react-slick";
import { PackagCard } from "./PackagCard";
import { Rupees } from "./svg-components/Rupees";
import { TestCard } from "@/components/TestCard";
import { useData } from "@/context/context";
import "aos/dist/aos.css"; // Import AOS CSS
import Aos from "aos";
const URL = `https://triverseadvertising.com/assure_website/api/algos/fetch_details.php?category=package&start=packages&start=0&limit=8`;

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
    // console.log("this is the wellness api data", project);

    fetchData();
  }, []);
  const { targetElementRef, isElementVisible } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    autoplay: { isElementVisible },
    initialSlide: 0, // Update this to 0
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
          initialSlide: 1,
          autoplaySpeed: 6000,
          infinite: true,
          arrows: false, 
        },
      },
    ],
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Slider {...settings} {...props} ref={targetElementRef}>
        {project &&
          project.test_data.map((test, index) => (
            <div
              key={test.id}
              data-aos="fade-up"
              data-aos-duration={400}
              data-aos-once="true"
              data-aos-easing="ease-in"
            >
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
            </div>
          ))}
      </Slider>
    </>
  );
};
