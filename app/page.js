"use client";
import { HForm } from "@/components/HForm";
import Image from "next/image";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { AssureSlide } from "@/components/AssureSlide";
import { ProductSlider } from "@/components/ProductSlider";
import { Seasonalpack } from "@/components/Seasonalpack";
import { Organslider } from "@/components/Organslider";
import { TestByCondition } from "@/components/TestByCondition";
import { Testimonials } from "@/components/Testimonials";
import { Videos } from "@/components/Videos";
import { Faq } from "@/components/Faq";
import Link from "next/link";
import { useEffect } from "react";
import WhyUs from "@/components/WhyUs";
import AboutData from "@/components/AboutData";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({
      delay: 0,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12 mt-lg-4 mt-0">
        <section className="position-relative _home__banner">
          <div className="gradient-layer"></div>
          <div className="container">
            <div className="__Banner">
              <div className="row ">
                <div className="col-xl-9 col-lg-8 col-md-12 pull-md-right mr-md-auto col-sm-12 mb-0  col-12">
                  <AssureSlide className="no-buttons colornavigations col-12 float-start" />
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-sm-12 float-end  justify-content-end col-12 d-flex align-items-center"
                  id="Home-Collection-data"
                >
                  <HForm />
                </div>
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
                <div className="col-md-12 col-12">
                  <div
                    className="title col-12 float-start text-center"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                  >
                    <h2 className="grid-center ">Popular Seasonal Packages</h2>
                  </div>
                  <Seasonalpack className="arrows productslider minusbottom seasonalpack" />
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" />
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div
                    className="title col-12 float-start text-center"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                  >
                    <h2>Popular Wellness Packages</h2>
                  </div>
                  <ProductSlider className="colornavigations col-12 float-start arrows productslider minusbottom" />
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10 top-20 end-0" />
        </section>
        <section id="organs" className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div
                    className="title col-12 float-start text-center mb-3"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                  >
                    <h2 className="grid-center text-white">TEST BY ORGAN</h2>
                  </div>
                  <Organslider className="navigationwhite hovershadow" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-image position-absolute">
            <Image
              src="/gradient-layer.webp"
              alt="gradient file"
              width={1920}
              height={1752}
            />
          </div>
        </section>
        <section className="position-relative mt-3">
          <div className="container">
            {/* here is the component */}
            <TestByCondition />
          </div>
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" />
        </section>
        <section className="position-relative py-lg-3 py-md-0  mt-2 ">
          <div className="container">
            <div className="web-container">
              <div
                className="title col-12 mx-auto abt_title  float-start text-center"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>Assure Pathlab - Best Pathology Labs In Jalandhar</h2>
              </div>
              <div className="abt_scn__">
                <div
                  className="about_us_scn  flex-center  flex-md-row flex-column-reverse col-12 align-items-start"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <div className="col-md-6 col-12 mt-2 mt-md-0 flex-column d-flex align-items-start">
                    <div className="title  float-start ">
                      <h2>Assure Pathlab - Best Pathology Labs In Jalandhar</h2>
                    </div>
                    <div className="about_us_cnt text-center ">
                      <p>
                        Assure Pathlabs was established by Dr. Sanjay Wadhwa and
                        Dr. Lovely Razdan in 2015. Our high ethical values
                        necessitate every man, woman, and child to benefit from
                        advancements in healthcare – despite living in their
                        living location. It is this idea of serving humanity
                        that grows our commitment to improve and deliver useful
                        health innovations that respond to the general,
                        specific, and real needs of vulnerable populations.
                        Assure labs in Jalandhar ensures on-time and specific
                        diagnosis plays a significant role to optimize health,
                        treatment of diseases, eliminating disease burden, and
                        further improving health.
                      </p>
                      <p>
                        The best pathology lab in Jalandhar is best in taking
                        all clinical decisions and treatment initiations as per
                        accurate diagnosis, Assure pathlabs work in every
                        critical factor for treating the diseases and
                        eliminating the cause from the root.
                      </p>
                    </div>
                  </div>
                  <div
                    className="about_us_image "
                    data-aos="fade"
                    data-aos-delay={100}
                    data-aos-duration={600}
                    data-aos-once="true"
                    data-aos-easing="ease"
                  >
                    <Image src="/about-us.jpg" width={850} height={700} />
                  </div>
                </div>
              </div>
              <AboutData maxCharCount={0}>
                <div className="contentbox assure_about">
                  <p>
                    Our highly qualified and experienced team and hard-working
                    professionals under the guidance of dr sanjay wadhwa and Dr.
                    Lovely Wadhwa path labs make accurate calculations to win
                    the future with a renewed sight of enthusiasm to become
                    extraordinary, showing results and to develop beyond the
                    region into the global market. Founded by doctors Assure
                    Pathlabs is fondly called Dr Path lab in Jalandhar.
                  </p>
                  <p>
                    At Assure Pathlabs the best diagnostic lab in Jalandhar you
                    can trust on their team to ensure the best customer
                    receiving efficient service, helpful guidance, honour, care,
                    and support, as well as the highest standardized medical
                    expertise.{" "}
                  </p>
                  <p className="">
                    When people in Jalandhar search- Pathology labs near me,
                    their preference is always for Assure Pathlabs.
                  </p>
                  <h3 className="">ASSURE COMPLETE WELLNESS</h3>
                  <p className="">
                    Our main priority is your health and our core
                    responsibility. Assure complete wellness package is divided
                    for Man &amp; Woman separately.
                  </p>
                  <ul className="">
                    <li>Fastest accurate reports</li>
                    <li>Safe and Hygiene sample collection</li>
                    <li>Trained Phlebotomist</li>
                    <li>Doctor screening report</li>
                    <li>Accurate blood test in Jalandhar</li>
                  </ul>
                  <p className="">
                    Pre-Test Information:
                    <br />
                    Fasting for at least 8 hours is required.
                  </p>
                  <h3 className="">ASSURE WELL IMMUNITY CHECK PANEL</h3>
                  <p className="">
                    Assure Pathlabs one of the best labs in Jalandhar offers
                    various types of full-body health checkup packages including
                    immunity checks upmost in that. These are divided as per
                    gender, age, and lifestyle of the person. Immunity test
                    parameters are CBC, Iron profile serum, 25 Hydroxy, Vitamin
                    D, and Total lgE. We at Assure Pathlabs ensure all the
                    safety guidance essential for good health.{" "}
                  </p>
                  <p className="">
                    Pre-Test Information: <br />
                    Overnight fast
                  </p>
                  <h3 className="">FEVER PANEL</h3>
                  <p className="">
                    For the Fever Panel test choose the finest path labs in
                    Jalandhar. Assure Pathlabs Jalandhar provides fever test
                    @450 and promises the best price guaranteed. Being the
                    finest pathology labs in Jalandhar We offer:
                  </p>
                  <ul className="">
                    <li>Accurate results</li>
                    <li>Fully automated</li>
                    <li>Latest technology and equipment</li>
                    <li>International quality and compliance</li>
                    <li>The most trusted blood test lab in Jalandhar</li>
                    <li>Honest price</li>
                    <li>100% calibration and results</li>
                  </ul>
                  <h3 className="">BETA HCG</h3>
                  <p className="">
                    Diagnose in order to Treat your problem before they start.
                    Curing the disease is incredibly crucial but before that, it
                    is indispensable to get your health assessed every year.
                    This test is used to know HCG levels in early pregnancy. HCG
                    is a hormone that is present in pregnancy. Get your BETA HCG
                    done with Assure Pathlabs that comes with a more rewarding
                    lifestyle Plan Ahead.{" "}
                  </p>
                  <p className="">
                    Pre-Test Information: <br />
                    Overnight fasting minimum for 8hrs.
                  </p>
                  <h3 className="">ANTI HBE ANTIBODIES</h3>
                  <p className="">
                    The high presence of positive HBeAg shows a high level of
                    viral replication. If HBeAg is negative it means that the
                    virus is inactive. It is vital to get your Anti HBe checkup
                    done. Get your 100% accurate report to better identify the
                    root cause of the problem and know which direction your
                    health is taking.
                  </p>
                </div>
              </AboutData>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
        </section>
        <section className="position-relative  ">
          <WhyUs Title="WHY ASSURE PATHLABS?" />

          <div className="testimonial">
            <div className=" position-relative z-index-2">
              <div className="">
                <div className="row">
                  <div
                    className="title col-12 float-start text-center"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                  >
                    <h2 className="text-white">TESTIMONIALS</h2>
                  </div>
                  <div className=" col-12 m-auto float-start">
                    <Testimonials className="minusbottom navigationwhite" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10 start-0 bottom-0 top-inherit" />
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" />
        </section>
        <section id="faq" className="faq">
          <div className="container position-relative z-index-2">
            <div className="web-container">
              <div className="row">
                <div
                  className="title col-12 float-start text-center"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h2 className="">Frequently Asked Questions</h2>
                </div>
                <div className="col-lg-11 col-md-11 col-12 m-auto float-start">
                  <Faq className="minusbottom " />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="vedio_review" className="vedio_review">
          <div className="container position-relative z-index-2">
            <div className="web-containers">
              <div className="row">
                <div
                  className="title col-12 float-start text-center"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h2 className="">OUR VIDEOS</h2>
                </div>
                <div className="col-lg-10 col-12 m-auto float-start d-flex flex-column">
                  <Videos />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
