import React from "react";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { Doctor } from "@/components/svg-components/Doctor";
import { InternationalStandard } from "@/components/svg-components/InternationalStandard";
import Aboutbanner from "../../public/about-us-banner.webp";
import Image from "next/image";
import { AboutGradient } from "@/components/AboutGradient";
import { ChooseAssure } from "@/components/ChooseAssure";
import { HForm } from "@/components/HForm";

export const page = () => {
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        {/* <section className="position-relative">
          <div className="gradient-layer"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-xs-12 col-12 abt_banner">
                <Image
                  src={Aboutbanner}
                  alt="Comprehensive Health Checkup"
                  width={1220}
                  height={730}
                />
              </div>
              <div className="col-lg-3 col-md-4 col-xs-12 col-12 d-flex align-items-center">
                <HForm />
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10" />
        </section> */}
        <section className="position-relative">
          <div className="container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h2>About us</h2>
              </div>
              <div className=" m-auto col-9 d-flex justify-content-center flex-direction-row  text-center">
                <div className="col-xl-6 pull-right ml-auto d-flex justify-content-center text-left ">
                  <p className="col-10 text-start">
                    Assure Pathlabs is the best blood test pathalogy laboratory
                    in Jalandhar, established in 2015 by Dr. Sanjay Wadhwa and
                    Dr. Lovely Razdan with a commitment to excellence. Backed by
                    NABH certification, Assure Pathlabs upholds international
                    standards having adequate lab tests cost. Our commitment
                    guarantees not just efficient service but also valuable
                    advice, timely reports, unwavering support, and
                    compassionate care because your well-being is our priority.
                  </p>
                </div>
                <div className="col-xl-6">
                  <div className="abt_img"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-image abt_bg_img position-absolute col-12">
            <AboutGradient />
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" />
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="our-ethos col-10 mx-auto pt-4  mt-3 d-flex flex-column gap-5">
                  <div className="our-ethos-item col-10 mx-auto d-flex justify-content-center align-item-center flex-row">
                    <div className="our-ethos-title col-5 mx-auto d-flex align-items-center ">
                      <h3 className="col-12 mx-auto text-center fw-bolder">
                        OUR VISION
                      </h3>
                    </div>
                    <div className="our-ethos-content col-7">
                      <p>
                        Become the most trusted and best pathology laboratory
                        that ensures international standards in diagnostics.
                      </p>
                    </div>
                  </div>
                  <div className="our-ethos-item col-10 mx-auto d-flex justify-content-center align-item-center flex-row-reverse">
                    <div className="our-ethos-title col-5 mx-auto d-flex align-items-center ">
                      <h3 className="col-12 mx-auto text-center fw-bolder">
                        OUR MISSION
                      </h3>
                    </div>
                    <div className="our-ethos-content col-7">
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

        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center mt-5 mb-4">
                  <h2>OUR DIFFERENTIATORS</h2>
                </div>
                <div className="our_diffrenc">
                  <div className="col-lg-8 mx-auto col-12  ">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 col-sm-4 col-6 ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span className="flex-center mb-2 button button--aylen button--round-l button--text-thick">
                            <AdvancedTechnology />
                          </span>
                          <p>New age Technology</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6 ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span className="flex-center mb-2 button button--aylen button--round-l button--text-thick">
                            <InternationalStandard />
                          </span>
                          <p>International Standards </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6 ">
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
