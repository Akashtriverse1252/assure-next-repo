"use client";

import React, { useState, useEffect, useRef } from "react";
import { TestCard } from "@/components/TestCard";
import { useAlert } from "@/context/AlerterContext";
import NoData from "@/components/svg-components/NoData";
const TestPackageList = ({ Type, h3true }) => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [page, setPage] = useState(0);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false); // Add a new state variable to track initial data fetch

  const lastCardRef = useRef(null);
  const { showAlert } = useAlert();

  const fetchData = async () => {
    try {
      if (allDataLoaded) {
        return; // Do not fetch more data if all data is already loaded
      }

      setLoading(true);

      const response = await fetch(
        `https://www.assurepathlabs.com/api/algos/fetch_details.php?category=${Type}&start=${page}&limit=12`
      );
      const newData = await response.json();

      if (newData.test_data.length === 0) {
        setAllDataLoaded(true);
      } else {
        setTests((prevTests) => [...prevTests, ...newData.test_data]);
        setPage((prevPage) => prevPage + 10);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      showAlert("Error", "Network Error", "error");
    } finally {
      setLoading(false);
      setInitialDataLoaded(true);
    }
  };
  console.log("is data finished", allDataLoaded);

  let timeoutId;

  const handleScroll = () => {
    if (timeoutId) {
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
    }, 250);
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

  const determineBaseDirectory = (type) => {
    return type === "package" ? "packages" : "all-test";
  };

  return (
    <>
      {!initialDataLoaded ? (
        <div className="_loader_cnt col-12 d-flex justify-content-center">
          <div className="_loader"></div>
        </div>
      ) : tests ? (
        <>
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
              BaseDirectory={determineBaseDirectory(Type)}
              index={index}
              IsSeoH3={h3true}
            />
          ))}
          {!loading && !allDataLoaded && (
            <div className=" h-min col-12 d-flex justify-content-center">
              <div className="_loader"></div>
            </div>
          )}
          {!allDataLoaded && <div ref={lastCardRef}></div>}
        </>
      ) : (
        <div className="No_Data d-flex justify-content-center col-12">
          <NoData />
        </div>
      )}
    </>
  );
};

export default TestPackageList;
