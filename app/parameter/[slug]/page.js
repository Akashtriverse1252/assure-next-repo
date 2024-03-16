"use client";
import React from "react";
import { ChooseAssure } from "@/components/ChooseAssure";
import { Test_details_logic } from "@/components/Test_details_logic";
import { useRouter } from "next/navigation";
import ToolTip from "@/components/ToolTip";

export const page = ({ params }) => {
  const router = useRouter();

  const handlePreviousStep = () => {
    router.back();
  };
  const slug = params.slug;
  // const catData = params.cat;
  // console.log("this is the catdata", catData);
  // alert("this is the catdata", catData);
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section>
          <div className="container">
            <div className="web-container">
              {/* <p>this si the cat {catData }</p>  */}
              <Test_details_logic Slug={slug} Category="testpack" />
            </div>
          </div>
        </section>
        <ChooseAssure />
        <div className="BACKTOPACKAGE" onClick={handlePreviousStep}>
          <span>BACK TO PACKAGE</span>
        </div>
      </main>
    </>
  );
};
export default page;
