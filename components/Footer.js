"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Line } from "@/components/svg-components/Line";
import { Tab } from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/material";
import Link from "next/link";
import { useData } from "@/context/context";
import Aos from "aos";
import {
  BiLogoWhatsapp,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const currentYear = new Date().getFullYear();
  const { cartState, cartDispatch } = useData();
  const [tabData, setTabData] = useState([]);

  const fetchTabData = async (category) => {
    try {
      const response = await fetch(
        `https://www.assurepathlabs.com/api/algos/fetch_details.php?category=package`
      );
      const data = await response.json();
      setTabData(data.test_data);
      setTimeout(() => {}, 300); // Adjust the delay time based on your transition duration

      console.log("this is the data", data.test_data);
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
    }
  };
  useEffect(() => {
    fetchTabData();
  }, []);
  const menuItems = [
    {
      title: "About Us",
      aosDelay: 200,
      href: "/about-us",
      // links: [{ href: "/about-us", label: "ABOUT US" }],
    },
    {
      title: "Our Doctors",
      href: "/doctor-profile",
      aosDelay: 300,
      links: [
        {
          href: "/doctor-profile/details/dr-sanjay-wadhwa",
          label: "DR SANJAY WADHWA",
        },
        {
          href: "/doctor-profile/details/dr-lovely-razdan",
          label: "DR LOVELY RAZDAN",
        },
        {
          href: "/doctor-profile/details/dr-gurpal-kaur",
          label: "DR GURPAL KAUR",
        },
      ],
    },
    {
      title: "Services",
      aosDelay: 400,
      links: [{ label: "FOR INDIVIDUALS" }, { label: "FOR HOSPITALS" }],
    },
    {
      title: "Health Packages",
      href: "/packages",
      aosDelay: 500,
      // links: [{ href: "/packages", label: "HEALTH PACKAGES" }],
    },
    {
      title: "My Account",
      aosDelay: 600,
      links: [
        {
          label: "MY CART",
          onClick: () => {
            console.log("Clicking on MY CART");
            cartDispatch({ type: "TOGGLE_CART" });
          },
        },
        { label: "BLOG" },
        {
          href: "https://patient-in.creliohealth.com/patient/login",
          label: "LOGIN",
          external: true,
        },
        // { href: "/terms-conditions", label: "TERMS & CONDITIONS" },
        // { href: "/privacy-policy", label: "PRIVACY POLICY" },
        // { href: "/refund-cancellation", label: "REFUND & CANCELLATION" },
      ],
    },
  ];

  return (
    <>
      <footer
        className="col-12 float-start position-relative"
        // data-aos="fade-up"
        // data-aos-delay={100}
        // data-aos-duration={200}
        // data-aos-once="true"
        // data-aos-offset={100}
        // data-aos-easing="ease-in"
      >
        {/* <div className="footergray col-12 float-start">
          <div className="container">
            <div className="web-container "></div>
          </div>
        </div> */}
        <div className="footergray pb-0 col-12 float-start">
          <div className="container">
            <div className="">
              <div className="row mb-3 pb-3">
                <div className="_acc flex-center  flex-column ">
                  <div className="popular_packages">
                    <div className="popular_packaes_title">
                      <strong>Popular Test</strong>
                    </div>
                    <div className="popular_packages_cnt">
                      <ul className="flex-center ">
                        {tabData.map((test, index) => (
                          <li>
                            <Link
                              key={test.id}
                              href={`/test-detail/${test.Slug}`}
                            >
                              {test.Test_Name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="popular_packages mt-3 pt-4 bt">
                    <div className="popular_packaes_title">
                      <strong>Popular Packages</strong>
                    </div>
                    <div className="popular_packages_cnt">
                      <ul className="flex-center ">
                        {tabData.map((test, index) => (
                          <li>
                            <Link
                              key={test.id}
                              href={`/test-detail/${test.Slug}`}
                            >
                              {test.Test_Name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="svgwidthline position-absolute top-0 end-0" />
        </div>
        <div className="footergray _chnage_color mt-0 pb-0  col-12 float-start">
          <div className="container ">
            <div className="row footer_bottom pb-4">
              <div className="col-7 float-end flex-center align-items-start footerrow justify-content-between">
                {menuItems.map((menuItem, index) => (
                  <div key={index} className="footercolumn">
                    <div
                      className="fheading"
                      data-aos="fade"
                      data-aos-delay={150 + index * 20}
                      data-aos-duration={150 + index * 20}
                      data-aos-once="true"
                      data-aos-offset={150 + index * 20}
                      data-aos-easing="ease-in"
                    >
                      <article className="text-uppercase">
                        {menuItem.href ? (
                          <Link href={menuItem.href}>{menuItem.title}</Link>
                        ) : (
                          <span>{menuItem.title}</span>
                        )}
                      </article>
                    </div>
                    {menuItem.links && (
                      <div className="fmenu">
                        <ul className="p-0 m-0">
                          {menuItem.links.map((link, linkIndex) => (
                            <li
                              key={linkIndex}
                              data-aos="fade-up"
                              data-aos-delay={200 + index * 50}
                              data-aos-duration={200 + index * 20}
                              data-aos-once="true"
                              data-aos-offset={120 + index * 20}
                              data-aos-easing="ease-in"
                            >
                              {link.external ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-black"
                                >
                                  {link.label}
                                </a>
                              ) : link.href ? (
                                <Link href={link.href}>{link.label}</Link>
                              ) : (
                                <span>{link.label}</span> // Add this line to handle undefined href
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="col-lg-4 contact_detail">
                <div className="contact">
                  <a href="tel:0181-4667555">
                    <span
                      className="flex-center align-items-start gap-2 sm-gap-4"
                      data-aos="fade-up"
                      data-aos-delay={150}
                      data-aos-duration={150}
                      data-aos-once="true"
                      data-aos-offset={200}
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <strong>T</strong>
                      0181-4667555
                    </span>
                  </a>
                </div>
                <div className="">
                  <div className="contact">
                    <a href="mailto:assurepathlabs@gmail.com">
                      <span
                        className="flex-center align-items-start gap-2 sm-gap-4"
                        data-aos="fade-up"
                        data-aos-delay={150}
                        data-aos-duration={350}
                        data-aos-once="true"
                        data-aos-offset={200}
                      >
                        <strong>E</strong>
                        assurepathlabs@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
                <div className=" ">
                  <div className="contact">
                    <span
                      className="flex-center align-items-start gap-2 gap-sm-0"
                      data-aos="fade-up"
                      data-aos-delay={150}
                      data-aos-duration={350}
                      data-aos-once="true"
                      data-aos-offset={200}
                    >
                      <strong>A </strong>
                      &nbsp; 3, Waryam Nagar, <br />
                      Vasant Vihar Road, <br />
                      Jalandhar
                    </span>
                  </div>
                </div>
                <div className="socail_icon">
                  <div className="">
                    <Link href="#">
                      <BiLogoFacebook />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="#">
                      <BiLogoLinkedin />
                    </Link>
                  </div>

                  <div className="whatsapp">
                    <Link href="#">
                      <RiWhatsappFill />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="#">
                      <BiLogoYoutube />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="#">
                      <BiLogoInstagram />
                    </Link>
                  </div>
                </div>
                <div className="col-12  mx-auto  flex-center ">
                  <a
                    className="button button--aylen button--round-l footer_btn button--text-thick text-uppercase gradient justify-content-start"
                    data-aos="flip-right"
                    data-aos-delay={100}
                    data-aos-duration={350}
                    data-aos-once="true"
                    data-aos-offset={120}
                    data-aos-easing="ease-in"
                  >
                    BOOK HOME COLLECTION
                  </a>
                </div>
              </div>
            </div>

            <div className="row p-3">
              <div className="col-lg-6 col-sm-6  col-8 footer_site">
                <p className="m-0">
                  &copy; {currentYear} All Rights Reserved.{" "}
                </p>
                <p className="m-0">
                  <Link href="/terms-conditions">Terms & conditions</Link>
                </p>
                <p className="m-0">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </p>
                <p className="m-0">
                  <Link href="/refund-cancellation">
                    Refund and Cancellation
                  </Link>
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
          <Line className="svgwidthline position-absolute top-0 end-0" />
        </div>
      </footer>
    </>
  );
};
