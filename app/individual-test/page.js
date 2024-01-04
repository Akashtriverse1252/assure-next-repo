"use client";
import React, { useState, useEffect, useRef } from "react";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { TestCard } from "@/components/TestCard";
import { usePathname } from "next/navigation";
import data from "@/Data/test_data.json";

export const Page = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const pathname = usePathname();
  const lastCardRef = useRef(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://assure.triverseadvertising.com/api/fetch_details.php?category=test&start=${page}&limit=12`
      );
      const newData = await response.json();
      setTests((prevTests) => [...prevTests, ...newData.test_data]);
      setPage((prevPage) => prevPage + 10);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const handleIntersection = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      fetchData();
    }
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  useEffect(() => {
    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      if (lastCardRef.current) {
        observer.unobserve(lastCardRef.current);
      }
    };
  }, [lastCardRef, observer]);

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
                  {loading && <p>Loading...</p>}
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
