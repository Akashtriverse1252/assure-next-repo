"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Rupees } from "./svg-components/Rupees";
import { BsInfoCircleFill } from "react-icons/bs";
import { Tooltip } from "@mui/material";

export const TestCard = ({
  Slug,
  Test_Name,
  Test_Amount,
  Discount_Amount,
  Test_Category,
  Test_ID,
  Test_Description,
  Who_is_it_for,
  Pre_test_information,
  Turn_around_time,
  widthFull,
  BaseDirectory,
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleTooltipToggle = () => {
    setTooltipVisible(!isTooltipVisible);
  };
  return (
    <>
      <div
        className={
          widthFull
            ? "col-lg-12 col-12 test_card"
            : "col-xxl-3  col-xl-4 col-md-4 col-sm-6 col-12 test_card"
        }
      >
        <Link href={`/${BaseDirectory || "test-detail"}/${Slug}`}>
          <div className="sliderbox">
            <div className="packagename_test">
              <h5 className="">{Test_Name}</h5>
            </div>
            <div className="packageprice">
              {Discount_Amount == 0 ? (
                <>
                  <div className="discountprice gradient text-white">
                    <Rupees /> <span>{Test_Amount}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="actualprice">
                    <Rupees /> <span>{Test_Amount}</span>
                  </div>
                  <div className="discountprice gradient text-white">
                    <Rupees /> <span>{Discount_Amount}</span>
                  </div>
                </>
              )}
            </div>
            <div className="packagedetail _test">
              <p className="m-0">
                <strong className="text-black">TEST DETAILS</strong>
              </p>
              <ul>
                {/* {Test_Category && <li>{Test_Category} Related Test</li>} */}
                {/* {Turn_around_time && <li>Report Time: {Turn_around_time}</li>} */}
                {Pre_test_information && (
                  <li>
                    Pre Test Information
                    <div
                      className="_tooltip"
                      tabIndex="0"
                      onMouseEnter={handleTooltipToggle}
                      onMouseLeave={handleTooltipToggle}
                      onFocus={handleTooltipToggle}
                      onBlur={handleTooltipToggle}
                    >
                      <BsInfoCircleFill className="_info" />
                      <span className="_tooltip-text">
                        <div className="pre_test_content flex-center flex-column px-2 py-1">
                          <h5>Pre Test Information</h5>
                          <p>{Pre_test_information}</p>
                        </div>
                      </span>
                    </div>
                  </li>
                )}
                {Turn_around_time && (
                  <li>
                    Report Available In
                    <div  
                      className="_tooltip"
                      tabIndex="0"
                      onMouseEnter={handleTooltipToggle}
                      onMouseLeave={handleTooltipToggle}
                      onFocus={handleTooltipToggle}
                      onBlur={handleTooltipToggle}
                    >
                      <BsInfoCircleFill className="_info" />
                      <span className="_tooltip-text">
                        <div className="pre_test_content flex-center flex-column px-2 py-1">
                          <h5>Report Available In</h5>
                          <p>{Turn_around_time}</p>
                        </div>
                      </span>
                    </div>
                  </li>
                )}
                {/* {Test_Description && (
                  <li>
                    Test Description
                    <div
                      className="_tooltip"
                      tabIndex="0"
                      onMouseEnter={handleTooltipToggle}
                      onMouseLeave={handleTooltipToggle}
                      onFocus={handleTooltipToggle}
                      onBlur={handleTooltipToggle}
                    >
                      <BsInfoCircleFill  className="_info" />
                      <span className="_tooltip-text">
                        <div className="pre_test_content flex-center flex-column px-2 py-1">
                          <h5>Test Requisit</h5>
                          <p>{Test_Description}</p>
                        </div>
                      </span>
                    </div>
                  </li>
                )} */}
              </ul>
            </div>
            <div className='packageprice_btn'>
              <div className="textbtn">
                <span href={`/${BaseDirectory || "test-detail"}/${Slug}`}>
                  KNOW MORE +
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
