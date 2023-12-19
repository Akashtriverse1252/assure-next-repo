"use client";

import React, { useEffect, useState } from "react";
import IsHomeCollection from "./IsHomeCollection";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export const HomeCollectionData = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedPlan(event.target.id);
  };
  return (
    <>
      <div className="container">
        <div className="plans">
          <div className="title">Choose Test Type</div>
          <div className="plans_selection">
            <label className="plan basic-plan" for="Home_collection">
              <input
                type="radio"
                name="plan"
                id="Home_collection"
                checked={selectedPlan === "Home_collection"}
                onChange={handleRadioChange}
              />
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

            <label className="plan complete-plan" for="Walk-in">
              <input
                type="radio"
                id="Walk-in"
                name="plan"
                checked={selectedPlan === "Walk-in"}
                onChange={handleRadioChange}
              />
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
        <Accordion
          expanded={selectedPlan === "Home_collection"}
          className="shadow-none isHomeCollection"
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="d-none shadow-none"
          ></AccordionSummary>
          <AccordionDetails className="shadow-none p-0">
            <IsHomeCollection />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
