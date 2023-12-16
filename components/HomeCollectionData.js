"use client";

import React, { useEffect, useState } from "react";
import IsHomeCollection from "./IsHomeCollection";

export const HomeCollectionData = () => {


  return (
    <>
      <div className="container">
        <div className="plans">
          <div className="title">Choose Test Type</div>
          <div className="plans_selection">
            <label className="plan basic-plan" for="basic">
              <input type="radio" name="plan" id="basic" />
              <div className="plan-content">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg"
                  alt=""
                />
                <div className="plan-details">
                  <span>Home Collection</span>
                  <p>
                    For smaller business, with simple salaries and pay
                    schedules.
                  </p>
                </div>
              </div>
            </label>

            <label className="plan complete-plan" for="complete">
              <input type="radio" id="complete" name="plan" />
              <div className="plan-content">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg"
                  alt=""
                />
                <div className="plan-details">
                  <span>Walk In</span>
                  <p>
                    For growing business who wants to create a rewarding place
                    to work.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <IsHomeCollection/>

     
    </>
  );
};
