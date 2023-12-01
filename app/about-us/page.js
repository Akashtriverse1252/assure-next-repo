import React from "react";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import Aboutbanner from "../../public/about-us-banner.webp";
import Image from "next/image";
import { AboutGradient } from "@/components/AboutGradient";
import { ChooseAssure } from "@/components/ChooseAssure";
import { HForm } from "@/components/HForm";

export const page = () => {
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section className="position-relative" >
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
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h2>About us</h2>
              </div>
              <div className="col-lg-7 m-auto col-xs-12 col-12 text-center">
                <p>
                  Assure Pathlabs was founded by Dr. Sanjay Wadhwa and Dr.
                  Lovely Razdan in 2015. At Assure the belief is that every man,
                  woman, and child should benefit from advances in healthcare –
                  regardless of where they live. It is this belief that drives
                  our commitment to develop and deliver unique health
                  innovations that respond to the specific and tangible needs of
                  vulnerable communities.
                </p>
                <p>
                  Early and accurate diagnosis plays a crucial role in reducing
                  the disease burden, improving treatment outcomes and
                  optimizing health access. Since all clinical decisions and
                  treatment initiations depend on accurate diagnosis, it is a
                  critical success factor for reaching the next level of quality
                  healthcare.
                </p>
                <p>
                  Our team of highly qualified, and hard working professionals
                  anticipate the future with a renewed sense of enthusiasm to go
                  beyond the ordinary to become an exceptional provider of
                  diagnostic services and to grow beyond the region into the
                  global market.
                </p>
                <p>
                  At Assure Pathlabs you can rely on customers receiving
                  efficient service, helpful advice, respect, support and care,
                  as well as the highest standards of medical expertise.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-image abt_bg_img position-absolute col-12">
            <AboutGradient />
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" />
        </section>
        <ChooseAssure />
        <section className="position-relative pb-5 grey-background border-bottom" id="quality">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center mt-5 mb-4">
                  <h2>QUALITY POLICY STATEMENT</h2>
                </div>
                <div className="col-lg-6 col-12 text-center m-auto">
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
