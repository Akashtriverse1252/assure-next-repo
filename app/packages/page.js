import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { Rupees } from "@/components/svg-components/Rupees";
import React from "react";
import data from "@/Data/All_packages.json";
import { TestCard } from "@/components/TestCard";
import { PackagCard } from "@/components/PackagCard";

export const page = () => {
  // console.log("this is the data", data.test_data);
  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3>HEALTH CHECK-UP PACKAGES</h3>
              </div>
              <div className="col-12 float-start all-test">
                <div className="row">
                  {data.map((test, index) => (
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
