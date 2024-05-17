"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PharmacyIcon3 from "@/components/svg-components/PharmacyIcon3";
import PharmacyIcon2 from "@/components/svg-components/PharmacyIcon2";
import PharmacyIcon1 from "@/components/svg-components/PharmacyIcon1";
import Booble from "@/components/svg-components/Booble";
import Faqdata from "@/Data/PhrmacyFaqData.json";
import Aboutbanner from "@/public/About-us-banner-b.webp";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link"; // Import Link correctly
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Faq } from "@/components/Faq";
import Slider from "react-slick";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isHovered, setIsHovered] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          autoplaySpeed: 6000,
          infinite: true,
        },
      },
    ],
  };

  return (
    <main className="d-flex flex-wrap float-start col-12 _parmacy">
      <section className="position-relative __about__ mt-4">
        <div className="container">
          <div className="row">
            <div
              className="col-12 abt_banner"
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

            <div role="presentation" className="bread_crums">
              <Breadcrumbs aria-label="breadcrumb">
                <Link href="/">Home</Link>
                <Link href="#">Pharmacy</Link>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative">
        <div className="container">
          <div className="web-container my-4">
            <div className="row">
              <div
                className="title-small text-center"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h1>BRAND PARTNERS</h1>
              </div>
              <div className="m-auto col-12 col-md-10 d-flex justify-content-center mt-5 pt-2">
                <Slider {...settings}>
                  <div>
                    <Image
                      className=" barnd_partner_card mx-auto"
                      src="/barnd-partner-01.jpg"
                      alt="Early Detection is the Key of Cure"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div>
                    <Image
                      className="mx-auto barnd_partner_card"
                      src="/barnd-partner-02.png"
                      alt="Early Detection is the Key of Cure"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div>
                    <Image
                      className="mx-auto barnd_partner_card"
                      src="/barnd-partner-03.png"
                      alt="Early Detection is the Key of Cure"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div>
                    <Image
                      className="mx-auto barnd_partner_card"
                      src="/barnd-partner-04.png"
                      alt="Early Detection is the Key of Cure"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div>
                    <Image
                      className="mx-auto barnd_partner_card"
                      src="/barnd-partner-05.png"
                      alt="Early Detection is the Key of Cure"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div>
                    <Image
                      className="mx-auto barnd_partner_card"
                      src="/barnd-partner-06.png"
                      alt="Early Detection is the Key of Cure"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div>
                    <Image
                      className="mx-auto barnd_partner_card"
                      src="/barnd-partner-07.png"
                      alt="Early Detection is the Key of Cure"
                      width={120}
                      height={120}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative">
        <div className="container">
          <div className="web-container my-2">
            <div className="row">
              <div
                className="title-small text-center"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h1>ABOUT ASSURE MEDICOS</h1>
              </div>
              <div
                className="title col-12 float-start text-center"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>Welcome a healthier tomorrow with us!</h2>
              </div>
              <div className="m-auto col-12 col-md-10 d-flex justify-content-center flex-direction-row text-center">
                <div className="d-flex justify-content-center text-left flex-column">
                  <p
                    className="about-assure-text"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={300}
                    data-aos-once="true"
                  >
                    Assure medicos is subsidiary of Assure Pathlabs, Jalandhar’s
                    most trusted pathology lab. With a steadfast commitment to
                    excellence and a focus on customer-centric approach, we
                    ensure that our customers have access to everything they
                    require for their health and wellness journey.
                  </p>
                  <p
                    className="about-assure-text"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={300}
                    data-aos-once="true"
                  >
                    Backed by a team of highly trained professionals, our
                    spacious and thoughtfully designed stores are equipped to
                    provide you with genuine and branded medications. Whether
                    you need prescription medications, over-the-counter
                    remedies, wellness products, or personalized health advice,
                    Assure Medicos is your one-stop destination.
                  </p>
                  <p
                    className="about-assure-text"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={300}
                    data-aos-once="true"
                  >
                    Our commitment to fast and efficient service sets us apart,
                    as we strive to redefine the standards of medical care in
                    our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative">
        <div className="container">
          <div className="web-container my-2">
            <div className="row">
              <div
                className="title-small text-center"
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
              <div className="m-auto pt-4 col-12 col-md-10 d-flex justify-content-center flex-direction-row text-center">
                <div
                  className="feature-cnt"
                  data-aos="fade-in"
                  data-aos-duration={400}
                  data-aos-once="true"
                  data-aos-easing="ease-in"
                >
                  <div
                    className="feature-card"
                    onMouseEnter={() => setIsHovered(1)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div
                      className={`booble  ${isHovered == 1 ? "isHovered" : ""}`}
                    ></div>
                    <div className="feature-card-header">
                      <div className="feature-card-icon feature-card-icon-fast icon">
                        <PharmacyIcon1 />
                      </div>
                      <h3 className="feature-card-title">RELIABLE</h3>
                    </div>
                    <p className="feature-card-description">
                      Assure Medicos products and medicines are sourced
                      exclusively from licensed and verified chemists, ensuring
                      that every item meets the highest standards of quality and
                      authenticity.
                    </p>
                  </div>
                  <div
                    className="feature-card"
                    onMouseEnter={() => setIsHovered(2)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div
                      className={`booble colour-1  ${
                        isHovered == 2 ? "isHovered" : ""
                      }`}
                    ></div>
                    <div className="feature-card-header">
                      <div className="feature-card-icon feature-card-icon-fast icon">
                        <PharmacyIcon2 />
                      </div>
                      <h3 className="feature-card-title">AFFORDABLE</h3>
                    </div>
                    <p className="feature-card-description">
                      At Assure Medicos, we prioritize your well-being by
                      offering affordable medication along with generous
                      discounts on lab tests, making quality healthcare
                      accessible and affordable for all.
                    </p>
                  </div>
                  <div
                    className="feature-card"
                    onMouseEnter={() => setIsHovered(3)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div
                      className={`booble colour-2  ${
                        isHovered == 3 ? "isHovered" : ""
                      }`}
                    ></div>
                    <div className="feature-card-header">
                      <div className="feature-card-icon feature-card-icon-fast icon">
                        <PharmacyIcon3 />
                      </div>
                      <h3 className="feature-card-title">SECURE</h3>
                    </div>
                    <p className="feature-card-description">
                      Assure Pathlabs and Assure Medicos uphold strict
                      confidentiality measures, guaranteeing the security and
                      privacy of all prescription and consumer data.
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
          <div className="web-container my-2">
            <div className="row">
              <div
                className="title-small text-center"
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
              <div className="m-auto col-12 pt-4 col-md-11 d-flex justify-content-center flex-direction-row text-center">
                <Faq Data={Faqdata} initialCount={10} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
