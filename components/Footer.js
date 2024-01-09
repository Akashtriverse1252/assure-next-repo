"use client";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "@/components/svg-components/Line";
import { Tab } from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/material";
import data from "@/Data/test_data.json";
import Link from "next/link";
import { useData } from "@/context/context";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [selectedTab, setSelectedTab] = useState(1);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonWidth2, setButtonWidth2] = useState(0);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const { cartState, cartDispatch } = useData();
  const [tabData, setTabData] = useState([]);

  const fetchTabData = async (category) => {
    try {
      const response = await fetch(
        `https://www.assurepathlabs.com/api/algos/fetch_details.php?category=${category}`
      );
      const data = await response.json();
      setTabData(data.test_data);
      // console.log(data.test_data);
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
    }
  };

  const getWidth = () => {
    const activeButtonRef = selectedTab === 1 ? buttonRef1 : buttonRef2;
    const buttonRect = activeButtonRef.current.getBoundingClientRect();
    setButtonWidth(buttonRect.width);
    const width1ref = buttonRef1.current.getBoundingClientRect();
    setButtonWidth2(width1ref.width);
  };

  useEffect(() => {
    getWidth();
  }, [selectedTab]);

  useEffect(() => {
    fetchTabData(selectedTab === 1 ? "test" : "package");
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
                    {selectedTab === 1 || selectedTab === 2 ? (
                      <div className="footer_tabs">
                        <ul className="flex-center">
                          <li>
                            {tabData.map((test, index) => (
                              <Link
                                key={test.id}
                                href={`/${
                                  selectedTab === 1 ? "test-detail" : "packages"
                                }/${test.Slug}`}
                              >
                                {" "}
                                {test.Test_Name}
                              </Link>
                            ))}
                          </li>
                        </ul>
                      </div>
                    ) : null}
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
                    <h5 className="text-uppercase">
                      <Link href="/about-us">ABOUT US</Link>
                    </h5>
                  </div>
                  <div className="fmenu">
                    <ul className="p-0 m-0">
                      <li>
                        <Link href="/about-us/#quality" className="text-black">
                          OUR QUALITY
                        </Link>
                      </li>
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
                    <h5 className="text-uppercase">
                      <Link href="/packages">HEALTH PACKAGES</Link>
                    </h5>
                  </div>
                </div>
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">MY ACCOUNT</h5>
                  </div>
                  <div className="fmenu">
                    <ul className="p-0 m-0">
                      <li onClick={() => cartDispatch({ type: "TOGGLE_CART" })}>
                        MY CART
                      </li>
                      <li>BLOG</li>
                      <li>
                        <Link
                          href="https://patient-in.creliohealth.com/patient/login"
                          target="_blank"
                          rel="none"
                          className="text-black"
                        >
                          LOGIN
                        </Link>
                      </li>
                      <li>
                        <Link className="text-black" href="/terms-conditions">
                          TERMS & CONDITIONS
                        </Link>
                      </li>
                      <li>
                        <Link className="text-black" href="/privacy-policy">
                          PRIVACY POLICY
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-black"
                          href="/refund-cancellation"
                        >
                          REFUND & CANCELLATION
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row  gap-4 gap-sm-0 mt-3">
                <div className="col-lg-4 col-xs-6 col-sm-4 col-12">
                  <div className="contact">
                    <a href="tel:0181-4667555">
                      <span className="flex-center align-items-start gap-2 sm-gap-4">
                        <strong>T</strong>0181-4667555
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-4 col-12">
                  <div className="contact">
                    <a href="mailto:assurepathlabs@gmail.com">
                      <span className="flex-center align-items-start gap-2 sm-gap-4">
                        <strong>E</strong>assurepathlabs@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-4 col-12">
                  <div className="contact">
                    <span className="flex-center align-items-start gap-2 gap-sm-0">
                      <strong>A </strong>&nbsp; 3, Waryam Nagar, <br />
                      Vasant Vihar Road, <br />
                      Jalandhar
                    </span>
                  </div>
                </div>
                <div className="col-12  mx-auto  flex-center mt-4 mb-3 mt-sm-5">
                  <a className="button button--aylen button--round-l button--text-thick text-uppercase gradient col-lg-3 col-md-5 col-12">
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
