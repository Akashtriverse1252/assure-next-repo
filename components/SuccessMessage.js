"use client";
import React from "react";
import Sucess from "@/components/svg-components/Sucess";
import { Line } from "./svg-components/Line";
import { Dots } from "./svg-components/Dots";

const SuccessMessage = ({ data }) => {
  // Access the collected data and display it in the success message
  const { productDetail, userData } = data;

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="sucess_msg">
                  <Sucess />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10" />
        <Line className="svgwidthline position-absolute opacity-10 top-20 end-0" />
      </section>
    </>
  );
};

export default SuccessMessage;
