"use client";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "@/components/svg-components/Line";
import { Tab } from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/material";
import data from "@/Data/test_data.json";
import PackageData from "@/Data/Package_Data.json";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [selectedTab, setSelectedTab] = useState(1);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonWidth2, setButtonWidth2] = useState(0);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);

  const getWidth = () => {
    const activeButtonRef = selectedTab === 1 ? buttonRef1 : buttonRef2;
    const buttonRect = activeButtonRef.current.getBoundingClientRect();
    // const buttonWidth = buttonRect.width;
    setButtonWidth(buttonRect.width);
    const width1ref = buttonRef1.current.getBoundingClientRect();
    setButtonWidth2(width1ref.width);

    console.log(buttonWidth);
    console.log(selectedTab);

    console.log("Width of active tab button:", buttonWidth);
  };

  useEffect(() => {
    getWidth();
  }, [selectedTab]);

  return (
    <>
      <footer className="col-12 float-start position-relative">
        {/* <div className="footergray col-12 float-start">
          <div className="container">
            <div className="web-container "></div>
          </div>
        </div> */}
        <div className="footergray col-12 float-start">
          <div className="container">
            <div className="web-container ">
              <div className="row mb-5 pb-3">
                <div className="_acc flex-center  flex-column ">
                  <div className="_acc_btn flex-center position-relative flex-column ">
                    <div className="_acc_header position-relative  flex-center ">
                      <button
                        ref={buttonRef1}
                        onClick={() => setSelectedTab(1)}
                      >
                        <h5>Popular Test</h5>
                      </button>
                      <button
                        ref={buttonRef2}
                        onClick={() => setSelectedTab(2)}
                      >
                        <h5>Popular Packages</h5>
                      </button>
                    </div>
                    <span
                      className="underline"
                      style={{
                        left:
                          selectedTab === 1
                            ? "0"
                            : `calc(${buttonWidth2}px + 60px)`, // Adjust the width based on your design
                        width: `${buttonWidth}px`, // Adjust the width based on your design
                        // backgroundColor: "blue", // Set the color of the underline
                        height: "2px", // Set the height of the underline
                        transition: " 0.8s ease", // Add a smooth transition effect
                      }}
                    ></span>
                  </div>

                  <div className="_acc_cnt">
                    {selectedTab === 1 ? (
                      <div className="footer_tabs">
                        <ul className="flex-center">
                          <li>
                            {data.test_data.map((test, index) => (
                              <a href={`/test-detail/${test.Slug}`}>
                                {" "}
                                {test.Test_Name}
                              </a>
                            ))}
                          </li>
                        </ul>
                      </div>
                    ) : null}
                    {selectedTab === 2 && (
                      <div className="footer_tabs">
                        <div className="footer_tabs">
                          <ul className="flex-center">
                            <li>
                              {PackageData.map((test, index) => (
                                <a href={`/packages/${test.Slug}`}>
                                  {" "}
                                  {test.PackageName}
                                </a>
                              ))}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 mb-5 float-start flex-center align-items-start footerrow">
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">Home</h5>
                  </div>
                </div>
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">ABOUT US</h5>
                  </div>
                  <div className="fmenu">
                    <ul className="p-0 m-0">
                      <li>OUR QUALITY</li>
                    </ul>
                  </div>
                </div>
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">OUR DOCTORS</h5>
                  </div>
                  <div className="fmenu">
                    <ul className="p-0 m-0">
                      <li>DR SANJAY WADHWA</li>
                      <li>DR LOVELY RAZDAN</li>
                      <li>DR GURPAL KAUR</li>
                    </ul>
                  </div>
                </div>
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">SERVICES</h5>
                  </div>
                  <div className="fmenu">
                    <ul className="p-0 m-0">
                      <li>FOR INDIVIDUALS</li>
                      <li>FOR HOSPITALS</li>
                    </ul>
                  </div>
                </div>
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">HEALTH PACKAGES</h5>
                  </div>
                </div>
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">LOCATE US</h5>
                  </div>
                  <div className="fmenu">
                    <ul className="p-0 m-0">
                      <li>MY CART</li>
                      <li>BLOG</li>
                      <li>LOGIN</li>
                      <li>REGISTER</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row  gap-4 gap-sm-0 mt-3">
                <div className="col-lg-4 col-xs-6 col-sm-6 col-12">
                  <div className="contact">
                    <a href="tel:0181-4667555">
                      <span className="flex-center align-items-start gap-2 sm-gap-4">
                        <strong>T</strong>0181-4667555
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-6 col-12">
                  <div className="contact">
                    <a href="mailto:assurepathlabs@gmail.com">
                      <span className="flex-center align-items-start gap-2 sm-gap-4">
                        <strong>E</strong>assurepathlabs@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-6 col-12">
                  <div className="contact">
                    <span className="flex-center align-items-start gap-2 gap-sm-0">
                      <strong>A</strong>3, Waryam Nagar, <br />
                      Vasant Vihar Road, <br />
                      Jalandhar
                    </span>
                  </div>
                </div>
                <div className="col-12 flex-center mt-4 mb-3 mt-sm-5">
                  <a className="button button--aylen button--round-l button--text-thick text-uppercase gradient col-lg-3 col-12">
                    BOOK HOME COLLECTION
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Line className="svgwidthline position-absolute top-0 end-0" />
        </div>

        <div className="footergray col-12 float-start ftrbdr m-0 pt-3 pb-3">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-lg-6 col-sm-6  col-8">
                  <p className="m-0">
                    &copy; {currentYear} All Rights Reserved.{" "}
                  </p>
                </div>
                <div className="col-lg-6 col-sm-6  col-4 text-end">
                  <p className="m-0">
                    <a href="https://triverseadvertising.com/" target="_blank">
                      site : triverse
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
