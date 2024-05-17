import React from "react";
import Image from "next/image";
import PharmacyIcon3 from "@/components/svg-components/pharmacyIcon3";
import PharmacyIcon2 from "@/components/svg-components/PharmacyIcon2";
import PharmacyIcon1 from "@/components/svg-components/PharmacyIcon1";
import Faqdata from "@/Data/PhrmacyFaqData.json";
import Aboutbanner from "@/public/About-us-banner-b.webp";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { AccordionComponent } from "@/components/Accordian";
import { Faq } from "@/components/Faq";

const page = () => {
  // console.log("this si the data ", Faqdata);

  return (
    <>
      <main className="d-flex flex-wrap float-start col-12 _parmacy">
        <section className="position-relative __about__  mt-4">
          <div className="container">
            <div className="row">
              <div
                className=" col-12 abt_banner"
                data-aos="fade-in"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <Image
                  src={Aboutbanner}
                  alt="Comprehensive Health Checkup"
                  width={1220}
                  height={730}
                />
              </div>

              <div role="presentation" className="bread_crums ">
                <Breadcrumbs className=" " aria-label="breadcrumb">
                  <Link href="/">Home</Link>
                  <Link href="#">Pharmacy</Link>
                </Breadcrumbs>
              </div>
            </div>
          </div>
        </section>
     
        <section className="position-relative">
          {/* <div className="gradient-layer"></div> */}
          <div className="container">
            <div className="web-container my-2">
              <div className="row">
                <div
                  className="title-small  text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h1>ABOUT ASSURE MEDICOS</h1>
                </div>
                <div
                  className="title  col-12 float-start text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h2>Welcome a healthier tomorrow with us! </h2>
                </div>
                <div className=" m-auto col-12 col-md-10 d-flex justify-content-center flex-direction-row  text-center">
                  <div className=" d-flex justify-content-center text-left flex-column ">
                    <p
                      className="about-assure-text "
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={300}
                      data-aos-once="true"
                    >
                      Assure medicos is subsidiary of Assure Pathlabs,
                      Jalandhar’s most trusted pathology lab. With a steadfast
                      commitment to excellence and a focus on customer-centric
                      approach, we ensure that our customers have access to
                      everything they require for their health and wellness
                      journey.
                    </p>
                    <p
                      className="about-assure-text "
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={300}
                      data-aos-once="true"
                    >
                      Backed by a team of highly trained professionals, our
                      spacious and thoughtfully designed stores are equipped to
                      provide you with genuine and branded medications. Whether
                      you need prescription medications, over-the-counter
                      remedies, wellness products, or personalized health
                      advice, Assure Medicos is your one-stop destination.
                    </p>
                    <p
                      className="about-assure-text "
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={300}
                      data-aos-once="true"
                    >
                      Our commitment to fast and efficient service sets us
                      apart, as we strive to redefine the standards of medical
                      care in our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="position-relative">
          {/* <div className="gradient-layer"></div> */}
          <div className="container">
            <div className="web-container my-2">
              <div className="row">
                <div
                  className="title-small  text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h1>WHY CHOOSE ASSURE MEDICOS?</h1>
                </div>
                <div
                  className="title mt-3 col-12 float-start text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h2>Trust us for the best</h2>
                </div>
                <div className=" m-auto pt-4 col-12 col-md-10 d-flex justify-content-center flex-direction-row  text-center">
                  <div
                    class="feature-cnt"
                    data-aos="fade-in"
                    data-aos-duration={400}
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                  >
                    <div class="feature-card">
                      <div class="feature-card-header">
                        <div class="feature-card-icon feature-card-icon-fast icon">
                          <PharmacyIcon1 />
                        </div>
                        <h3 class="feature-card-title">RELIABLE </h3>
                      </div>
                      <p class="feature-card-description">
                        All products displayed on Assure Medicos are procured
                        from verified and licensed chemists. All labs listed on
                        the platform are accredited
                      </p>
                    </div>
                    <div class="feature-card">
                      <div class="feature-card-header">
                        <div class="feature-card-icon feature-card-icon-fast icon">
                          <PharmacyIcon2 />
                        </div>
                        <h3 class="feature-card-title">AFFORDABLE </h3>
                      </div>
                      <p class="feature-card-description">
                        Find affordable medicine substitutes, save up to 50% on
                        health products, up to 80% off on lab tests and free
                        doctor consultations.
                      </p>
                    </div>
                    <div class="feature-card">
                      <div class="feature-card-header">
                        <div class="feature-card-icon feature-card-icon-fast icon">
                          <PharmacyIcon3 />
                        </div>
                        <h3 class="feature-card-title">SECURE</h3>
                      </div>
                      <p class="feature-card-description">
                        Assure Pathlabs and Assure Medicos prioritize
                        confidentiality, ensuring that all prescription and
                        consumer information remains strictly confidential and
                        secure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="position-relative">
          {/* <div className="gradient-layer"></div> */}
          <div className="container">
            <div className="web-container my-2">
              <div className="row">
                <div
                  className="title-small  text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h1>SERVICES</h1>
                </div>
                <div
                  className="title mt-3 col-12 float-start text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <h2>All your medicine needs under one roof</h2>
                </div>
                <div className=" m-auto col-12 pt-4 col-md-11 d-flex justify-content-center flex-direction-row  text-center">
                  <Faq Data={Faqdata} />
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
