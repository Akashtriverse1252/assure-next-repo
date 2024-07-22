"use client";
import React, { useEffect } from "react";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { Doctor } from "@/components/svg-components/Doctor";
import { InternationalStandard } from "@/components/svg-components/InternationalStandard";
import Image from "next/image";
import { AboutGradient } from "@/components/AboutGradient";
import WhyUs from "@/components/WhyUs";
import { HForm } from "@/components/HForm";
import OurFounders from "@/components/OurFounders";
import Aboutbanner from "@/public/About-us-banner-b.webp";
import AboutbannerM from "@/public/about-banner-M.jpg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "@mui/material";
import "aos/dist/aos.css"; // Import AOS CSS
import Aos from "aos";

export const page = () => {
  useEffect(() => {
    Aos.init({
      delay: 0,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section className="position-relative __about__">
          <div className="container">
            <div className="row">
              <div
                className=" col-12 abt_banner"
                data-aos="fade-in"
                data-aos-duration={600}
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
                data-aos-easing="ease-in"
              >
                <Image
                  src={Aboutbanner}
                  alt="Comprehensive Health Checkup"
                  width={1220}
                  height={730}
                  className="desktop-show d-none d-sm-block"
                />
                <Image
                  src={AboutbannerM}
                  className="mobile-show d-block d-sm-none"
                  alt="Comprehensive Health Checkup"
                  width={640}
                  height={720}
                />
              </div>

              <div role="presentation" className="bread_crums ">
                <Breadcrumbs className="mb-3 " aria-label="breadcrumb">
                  <Link href="/">Home</Link>
                  <Link href="#">About Us</Link>
                </Breadcrumbs>
              </div>
            </div>
          </div>
        </section>

        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div
                  className="title  col-12 float-start text-center"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-easing="ease-in"
                >
                  <h1 className="text-uppercase">Assure Pathlabs</h1>
                </div>
                <div className=" m-auto col-12 col-md-10 d-flex justify-content-center flex-direction-row  text-center">
                  <div className=" d-flex justify-content-center text-left flex-column ">
                    <p
                      className="about-assure-text "
                      data-aos="fade-up"
                      data-aos-duration={500}
                      data-aos-once="true"
                      data-aos-anchor-placement="top-bottom"
                    >
                      Assure Pathlabs is the best blood test pathalogy
                      laboratory in Jalandhar, established in 2015 by Dr. Sanjay
                      Wadhwa and Dr. Lovely Razdan with a commitment to
                      excellence. Backed by NABH certification, Assure Pathlabs
                      upholds international standards having adequate lab tests
                      cost.
                    </p>
                    <p
                      className="about-assure-text "
                      data-aos="fade-up"
                      data-aos-duration={600}
                      data-aos-once="true"
                      data-aos-anchor-placement="top-bottom"
                    >
                      Our commitment guarantees not just efficient service but
                      also valuable advice, timely reports, unwavering support,
                      and compassionate care because your well-being is our
                      priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10" />
          <div className="bg-gradient-image about_page position-absolute col-12">
            <AboutGradient />
          </div>
        </section>
        <OurFounders />
        <section className="position-relative mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 m-auto col-12 float-start sm-padding-0">
                <div className="col-12 flaot-start flex-center mb-2 mb-md-4 mb-lg-5 text-center">
                  <div
                    className="title col-12 float-start text-center"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-in"
                  >
                    <h2>OUR ETHOS</h2>
                  </div>
                </div>
                <div className="overview col-lg-12 float-start">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-12">
                      <div className="heading p-0 h-auto border-0 mb-2">
                        <h3
                          className="effectheading newheading "
                          data-aos="flip-right"
                          data-aos-duration={800}
                          data-aos-once="true"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-easing="ease-in"
                        >
                          OUR VISION
                        </h3>
                      </div>
                    </div>
                    <div
                      className="col-lg-7 col-12 "
                      data-aos="fade-up"
                      data-aos-duration={600}
                      data-aos-once="true"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-easing="ease-in"
                    >
                      <p>
                        Become the most trusted and best pathology laboratory
                        that ensures international standards in diagnostics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overview col-lg-12 float-end mt-5">
                  <div className="row align-items-center flex-row-reverse">
                    <div
                      className="col-lg-6 col-12"
                      style={{ textAlign: "right" }}
                    >
                      <div className="heading p-0 h-auto border-0 mb-2">
                        <h3
                          className="effectheading newheading "
                          data-aos="flip-left"
                          data-aos-duration={800}
                          data-aos-once="true"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-easing="ease-in"
                        >
                          OUR MISSION
                        </h3>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-12 "
                      data-aos="fade-up"
                      data-aos-duration={600}
                      data-aos-once="true"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-easing="ease-in"
                    >
                      <p>
                        Our mission is to redefine healthcare accessibility and
                        elevate diagnostic standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="position-relative about-whyus">
          <WhyUs Title="WHY CHOOSE US?" />
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div
                  className="title col-12 float-start text-center mt-5 mb-4"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-easing="ease-in"
                >
                  <h2>OUR DIFFERENTIATORS</h2>
                </div>
                <div className="our_diffrenc">
                  <div className="col-lg-8 mx-auto col-12  ">
                    <div
                      className="row justify-content-center our_diff_cnt "
                      data-aos="fade-up"
                      data-aos-duration={400}
                      data-aos-once="true"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-easing="ease-in"
                    >
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span className="flex-center mb-2 button button--aylen button--round-l button--text-thick">
                            <AdvancedTechnology />
                          </span>
                          <h3>
                            New Age <br /> Technology
                          </h3>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span className="flex-center mb-2 button button--aylen button--round-l button--text-thick">
                            <InternationalStandard />
                          </span>
                          <h3>
                            International <br /> Standards{" "}
                          </h3>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span className="flex-center mb-2 button button--aylen button--round-l button--text-thick">
                            <Doctor />
                          </span>
                          <h3>
                            Founded by <br /> Doctors
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default page;
