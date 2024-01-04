import React from "react";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { Doctor } from "@/components/svg-components/Doctor";
import { InternationalStandard } from "@/components/svg-components/InternationalStandard";
import Aboutbanner from "../../public/aboutUSBanner.webp";
import Mission from "../../public/mission.jpg";
import Image from "next/image";
import { AboutGradient } from "@/components/AboutGradient";
import { ChooseAssure } from "@/components/ChooseAssure";
import AboutDoctor from "@/components/svg-components/AboutDoctor";
import { HForm } from "@/components/HForm";

export const page = () => {
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section className="position-relative">
          <div className="gradient-layer"></div>
          <div className="container">
            <div className="row">
              <div className=" col-12 abt_banner">
                <Image
                  src={Aboutbanner}
                  alt="Comprehensive Health Checkup"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10" />
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center">
                  <h2>Assure Pathlabs</h2>
                </div>
                <div className=" m-auto col-10 d-flex justify-content-center flex-direction-row  text-center">
                  <div className=" d-flex justify-content-center text-left flex-column ">
                    <p className=" ">
                      Assure Pathlabs is the best blood test pathalogy
                      laboratory in Jalandhar, established in 2015 by Dr. Sanjay
                      Wadhwa and Dr. Lovely Razdan with a commitment to
                      excellence. Backed by NABH certification, Assure Pathlabs
                      upholds international standards having adequate lab tests
                      cost.
                    </p>
                    <p className=" ">
                      Our commitment guarantees not just efficient service but
                      also valuable advice, timely reports, unwavering support,
                      and compassionate care because your well-being is our
                      priority.
                    </p>
                  </div>
                  {/* <div className="abt_img col-5">
                    <AboutDoctor />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-gradient-image abt_bg_img position-absolute col-12">
            <AboutGradient />
          </div> */}
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" />
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="ethos_cnt col-lg-10 d-flex">
                  <div className="ethos_img">
                    <Image
                      src={Mission}
                      alt="mission and vision"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  <div className="our-ethos d-flex flex-column ">
                    <div className="our-ethos-item flex-center flex-column ">
                      <div className="our-ethos-title d-flex align-items-center  ">
                          OUR VISION
                      </div>
                      <div className="our-ethos-content ">
                        <p>
                          Become the most trusted and best pathology laboratory
                          that ensures international standards in diagnostics.
                        </p>
                      </div>
                    </div>
                    <div className="our-ethos-item flex-center flex-column">
                      <div className="our-ethos-title  d-flex align-items-center  ">
                          OUR MISSION
                      </div>
                      <div className="our-ethos-content ">
                        <p>
                          Our mission is to redefine healthcare accessibility
                          and elevate diagnostic standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center mt-5 mb-4">
                  <h2>OUR DIFFERENTIATORS</h2>
                </div>
                <div className="our_diffrenc">
                  <div className="col-lg-8 mx-auto col-12  ">
                    <div className="row justify-content-center our_diff_cnt">
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span className="flex-center mb-2 button button--aylen button--round-l button--text-thick">
                            <AdvancedTechnology />
                          </span>
                          <p>New age Technology</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span className="flex-center mb-2 button button--aylen button--round-l button--text-thick">
                            <InternationalStandard />
                          </span>
                          <p>International Standards </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span className="flex-center mb-2 button button--aylen button--round-l button--text-thick">
                            <Doctor />
                          </span>
                          <p>Founded by doctors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ChooseAssure />
        <section
          className="position-relative pb-5 grey-background border-bottom"
          id="quality"
        >
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center mt-5 mb-4">
                  <h2>QUALITY POLICY STATEMENT</h2>
                </div>
                <div className="col-xxl-6 col-xl-9 col-12 text-center m-auto">
                  <p>
                    Laboratory is committed to provide the best possible support
                    for the clinical management of patient using contemporary
                    laboratory techniques meeting the highest standard of
                    ethical practice.
                  </p>
                </div>
                <div className="col-lg-10 m-auto col-12 float-start mt-3">
                  <h4 className="text-center mb-4">
                    <strong>
                      Laboratory aims to achieve the objectives by :
                    </strong>
                  </h4>
                  <div className="col-lg-6 col-12 float-start">
                    <ul className="p-0 quality">
                      <li>
                        Providing services most appropriate to the patients in
                        consultation with their clinicians.
                      </li>
                      <li>
                        Providing reliable and dependable services in a
                        convenient, timely, yet cost-effective manner.
                      </li>
                      <li>
                        Using contemporary equipment, consumables, and
                        procedures for testing.
                      </li>
                      <li>Following good laboratory practice.</li>
                      <li>Committing to the health and safety of all staff.</li>
                      <li>
                        Providing opportunities for continuing professional
                        development to all levels of staff in terms of formal
                        education and training, both in-house and by deputation.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-12 float-start">
                    <ul className="p-0 quality">
                      <li>
                        Introducing new services and infrastructure based on the
                        relevance to patient care and demand for such services.
                      </li>
                      <li>
                        Adopting and following a quality system that is
                        understood and implemented by the staff.
                      </li>
                      <li>
                        Monitoring and maintaining the quality of the services
                        offered by periodic introspection and institution of
                        remedial action as and when required.
                      </li>
                      <li>
                        Participation in quality assurance and peer review
                        programs.
                      </li>
                      <li>
                        Treating patients with due respect and consideration and
                        also maintaining confidentiality.
                      </li>
                      <li>
                        Complying at all times with international standards of
                        quality, including IS/ISO 15189:2012.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Dots className="hsection position-absolute svgwidth opacity-10 start-0 bottom-0 top-inherit" />
        </section>
      </main>
    </>
  );
};
export default page;
