"use client";
// import React, { useState } from "react";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import test_info from "@/Data/Test_detail.json";
import { TestCard } from "@/components/TestCard";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useData } from "@/context/context";
// import UseApi from "../../../context/UseApi.js";

export const page = ({ params: { slug } }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1/NS-arcus/xml_api.php",
          {
            headers: {
              "Content-Type": "application/xml",
              // Add any other headers if needed
            },
            // You may need to adjust the responseType based on your API response
            responseType: "text",
          }
        );

        // Parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");
        setData(xmlDoc);
        console.log("the api data ", xmlDoc);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  console.log(error);
  console.log(loading);

  const filtered_slug_data = test_info.test_data.filter(
    (p) => p.Department_Name.toLowerCase() === slug
  );
  // const { apiData } = useData();

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3>{slug} Test</h3>
              </div>
              <div className="col-12 float-start all-test">
                <div className="row justify-content-center">
                  {filtered_slug_data.map((test, index) => (
                    <TestCard
                      key={index} // Don't forget to set a unique key when using .map()
                      ID={test.id}
                      Slug={test.Slug}
                      Test_Name={test.Test_Name}
                      Test_Amount={test.Test_Amount}
                      Discount_Amount={test.Discount_Amount}
                      Test_Category={test.Test_Category}
                      Test_ID={test.Test_ID}
                      Test_Description={test.Test_Description}
                      Who_is_it_for={test.Who_is_it_for}
                      Pre_test_information={test.Pre_test_information}
                      BaseDirectory={`condition/${slug}/test`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
            <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
