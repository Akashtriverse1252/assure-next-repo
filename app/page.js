"use client";
import { HForm } from "@/components/HForm";
import Image from "next/image";
import { Alltime } from "@/components/svg-components/Alltime";
import { Samedaydelivery } from "@/components/svg-components/Samedaydelivery";
import { FoundedDoctor } from "@/components/FoundedDoctor";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { HighOn } from "@/components/svg-components/HighOn";
import { FiveHundredplus } from "@/components/svg-components/FiveHundredplus";
import { ConsultingService } from "@/components/svg-components/ConsultingService";
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
import Nabh from "@/components/svg-components/Nabh";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 450, easing: "ease-in" });
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
                <div className="col-xl-3 col-lg-4 col-sm-12 float-end  justify-content-end col-12 d-flex align-items-center">
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
        <section className="position-relative py-lg-5 py-md-0  mt-5 ">
          <div className="container">
            <div className="web-container">
              <div
                className="title col-12 mx-auto abt_title  float-start text-center"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>ABOUT ASSURE PATHLAB</h2>
              </div>
              <div className="abt_scn__">
                <div className="about_us_scn  flex-center  flex-column align-items-start">
                  <div
                    className="title  float-start text-center"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                  >
                    <h2>ABOUT ASSURE PATHLAB</h2>
                  </div>
                  <div
                    className="about_us_cnt text-center "
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-easing="ease"
                  >
                    <p>
                      Assure Pathlabs is the best blood test pathalogy
                      laboratory in Jalandhar, established in 2015 by Dr. Sanjay
                      Wadhwa and Dr. Lovely Razdan with a commitment to
                      excellence. Backed by NABH certification, Assure Pathlabs
                      upholds international standards having adequate lab tests
                      cost. Our commitment guarantees not just efficient service
                      but also valuable advice, timely reports, unwavering
                      support, and compassionate care because your well-being is
                      our priority.
                    </p>
                    <div
                      className=" mt-3 mb-2 btn_main"
                      data-aos="flip"
                      data-aos-duration={500}
                      data-aos-once="true"
                      data-aos-easing="ease-in"
                    >
                      <Link
                        href="/about-us"
                        className="button button--aylen button--round-l button--text-thick text-uppercase gradient col-lg-4 col-md-4 col-12 mt-3"
                      >
                        know more
                      </Link>
                    </div>
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
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
        </section>
        <section className="position-relative why_assure">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div
                  className="title col-12 float-start text-center"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h2>WHY ASSURE PATHLABS?</h2>
                </div>
                <div
                  className="col-lg-10 m-auto col-12 float-start "
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <div className="row justify-content-center pt-3">
                    <div class="why_assure_cnt  ">
                      <div class="why_assure_item">
                        <span className=" flex-center ">
                          <Nabh />
                        </span>
                        <div class="why_assure_text">
                          NABH Certified Labs
                        </div>
                      </div>
                      <div class="why_assure_item">
                        <span className=" flex-center ">
                          <Alltime />
                        </span>
                        <div class="why_assure_text">24x7</div>
                      </div>
                      <div class="why_assure_item">
                        <span className=" flex-center ">
                          <Samedaydelivery />
                        </span>
                        <div class="why_assure_text">
                          Same Day Report
                        </div>
                      </div>
                      <div class="why_assure_item">
                        <span className=" flex-center ">
                          <FoundedDoctor />
                        </span>
                        <div class="why_assure_text">
                          Founded by Doctors
                        </div>
                      </div>

                      <div class="why_assure_item">
                        <span className=" flex-center ">
                          <AdvancedTechnology />
                        </span>
                        <div class="why_assure_text">
                          Advanced Technology
                        </div>
                      </div>
                      <div class="why_assure_item">
                        <span className=" flex-center ">
                          <HighOn />
                        </span>
                        <div class="why_assure_text">
                          High on Safety and Hygeine
                        </div>
                      </div>
                      <div class="why_assure_item">
                        <span className=" flex-center ">
                          <FiveHundredplus />
                        </span>
                        <div class="why_assure_text">
                          500+ Test
                        </div>
                      </div>
                      <div class="why_assure_item">
                        <span className=" flex-center ">
                          <ConsultingService />
                        </span>
                        <div class="why_assure_text">
                          Consultation Services
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10 start-0 bottom-0 top-inherit" />
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" />
        </section>
        <section id="testimonial" className="testimonial">
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
                  <h2 className="text-white">TESTIMONIALS</h2>
                </div>
                <div className="col-lg-11 col-12 m-auto float-start">
                  <Testimonials className="minusbottom navigationwhite" />
                </div>
              </div>
            </div>
          </div>
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
                <div className="col-lg-10 col-12 m-auto float-start">
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
