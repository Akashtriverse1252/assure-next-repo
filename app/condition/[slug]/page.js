// "use client";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import React from "react";
import test_info from "@/Data/test_data.json";
import { TestCard } from "@/components/TestCard";

export const page = ({ params: { slug } }) => {
  const packageData = test_info.test_data.filter(
    (item) => item.category === "test"
  );
  const filtered_slug_data = packageData.filter(
    (p) => p.Test_Category === slug
  );

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h2>{slug} Test</h2>
              </div>
              <div className="col-12 float-start all-test">
                <div className="row justify-content-center">
                  {filtered_slug_data.lenght !== 0 ? (
                    <>
                      {filtered_slug_data.map((test, index) => (
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
                          BaseDirectory={`condition/${slug}/test`}
                        />
                      ))}
                    </>
                  ) : (
                    "No test found"
                  )}
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
