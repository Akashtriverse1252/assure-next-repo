"use client";
import React, { useState, useEffect, useRef } from "react";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { TestCard } from "@/components/TestCard";
import { usePathname } from "next/navigation";
import data from "@/Data/test_data.json";
import { useAlert } from "@/context/AlerterContext";

export const Page = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const pathname = usePathname();
  const lastCardRef = useRef(null);
  const { showAlert } = useAlert();

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://www.assurepathlabs.com/api/algos/fetch_details.php?category=test&start=${page}&limit=12`
      );
      const newData = await response.json();
      setTests((prevTests) => [...prevTests, ...newData.test_data]);
      setPage((prevPage) => prevPage + 10);
    } catch (error) {
      console.error("Error fetching data:", error);
      showAlert("Error", "network Error", "error");
    } finally {
      setLoading(false);
    }
  };

  let timeoutId;

  const handleScroll = () => {
    if (timeoutId) {
      // Clear any existing timeout to debounce the function
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      const lastCard = lastCardRef.current;
      if (lastCard) {
        const { top, bottom } = lastCard.getBoundingClientRect();
        const isAtBottom = top <= window.innerHeight && bottom >= 0;
        if (isAtBottom && !loading) {
          fetchData();
        }
      }
    }, 250); // Adjust the debounce time (in milliseconds) as needed
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, page]);
  console.log("is loading", loading);

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h2>Individual Test</h2>
              </div>

              <div className="col-12 float-start all-test">
                <div className="row justify-content-center">
                  {tests.map((test, index) => (
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
                      BaseDirectory={"individual-test"}
                    />
                  ))}
                  <div ref={lastCardRef}></div>
                  {loading && (
                    <div className="_loader_cnt col-12 d-flex justify-content-center">
                      <div class="_loader"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Dots and Line components */}
            <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
            <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
