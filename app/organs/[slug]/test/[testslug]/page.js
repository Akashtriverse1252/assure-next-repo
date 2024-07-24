import React from "react";
import WhyUs from "@/components/WhyUs";
import data from "@/Data/Test_detail.json";
import { Test_details_logic } from "@/components/Test_details_logic";

export const page = ({ params: { testslug } }) => {
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section>
          <div className="container">
            <div className="web-container">
              <Test_details_logic
                Slug={testslug}
                data={data}
                Category="testpack"
              />
            </div>
          </div>
        </section>
        <section className="position-relative  col-12 ">
          <WhyUs Title="WHY ASSURE PATHLABS?" />
        </section>
      </main>
    </>
  );
};
export default page;