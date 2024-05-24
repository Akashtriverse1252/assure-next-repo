"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PharmacyIcon3 from "@/components/svg-components/pharmacyIcon3";
import PharmacyIcon2 from "@/components/svg-components/PharmacyIcon2";
import PharmacyIcon1 from "@/components/svg-components/PharmacyIcon1";
import Faqdata from "@/Data/PhrmacyFaqData.json";
import Aboutbanner from "@/public/pharmacy-banner.jpg";
import AboutbannerM from "@/public/pharmacy-banner-M.jpg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link"; // Import Link correctly
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Faq } from "@/components/Faq";
import Slider from "react-slick";
import AttractiveDeal from "../../components/svg-components/AttractiveDeal";
import MedicalSupplies from "../../components/svg-components/MedicalSupplies";
import Refrigreation from "../../components/svg-components/Refrigreation";
import SuperiorQuality from "../../components/svg-components/SuperiorQuality";
import Reward from "../../components/svg-components/Reward";
import EasyReturn from "../../components/svg-components/EasyReturn";
import PharmacyConsultancy from "../../components/svg-components/PharmacyConsultancy";
import Open from "../../components/svg-components/Open";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isHovered, setIsHovered] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          initialSlide: 0,
          autoplaySpeed: 6000,
          infinite: true,
        },
      },
    ],
  };

  return (
    <main className="d-flex flex-wrap float-start col-12 _parmacy">
      <section className="position-relative __about__ mt-md-4 mt-2">
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
                alt="Jalandhar’s Trusted Medical Store"
                width={1220}
                height={730}
                className="desktop-show d-none d-sm-block"
              />
              <Image
                src={AboutbannerM}
                className="mobile-show d-block d-sm-none"
                alt="Jalandhar’s Trusted Medical Store"
                width={640}
                height={720}
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
          <div className="web-container my-md-4 my-2">
            <div className="row">
              <div
                className="title text-center"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>BRAND PARTNERS</h2>
              </div>
              <div
                className="m-auto col-12 col-md-10 d-flex justify-content-center mt-md-4 pt-md-2 mt-2 py-1"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
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
      <section className="position-relative bg-gray">
        <div className="container">
          <div className="web-container my-2">
            <div className="row">
              <div
                className="title text-center"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>ABOUT ASSURE MEDICOS</h2>
              </div>

              <div className="m-auto col-12 col-md-10 d-flex justify-content-center flex-direction-row text-center pt-3">
                <div className="d-flex justify-content-center text-left flex-column col-12 col-md-10">
                  <p
                    className="subtitle"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={300}
                    data-aos-once="true"
                  >
                    Welcome a healthier tomorrow with us!
                  </p>
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
                className="title text-center"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>WHY CHOOSE ASSURE MEDICOS?</h2>
              </div>
              {/* <div
                className="title mt-3 col-12 float-start text-center"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>Trust us for the best</h2>
              </div> */}
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
      <section className="position-relative  bg-gray">
        <div className="container ">
          <div className="web-container my-2">
            <div className="row">
              <div
                className="title text-center"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>All Your Medicine Needs Under One Roof</h2>
              </div>
              <div
                className="our-services col-12 col-md-10 mx-auto
              "
              >
                {/* <p className="subtitle">
                  All Your Medicine Needs Under One Roof
                </p> */}
                <div className="services-container">
                  <div className="service">
                    <div className="icon strategy">
                      <AttractiveDeal />
                    </div>
                    <h3 className="sevieces_heading">Attractive Offers</h3>
                    <p>
                      Avail special discounts and offers on a wide range of
                      medications to save on your healthcare expenses.
                    </p>
                  </div>
                  <div className="service">
                    <div className="icon branding">
                      <MedicalSupplies />
                    </div>
                    <h3 className="sevieces_heading">Medical supplies</h3>
                    <p>
                      An extensive selection of healthcare products, including
                      medications, supplements, wellness items, and more, all
                      under one roof.
                    </p>
                  </div>
                  <div className="service">
                    <div className="icon development">
                      <Refrigreation />
                    </div>
                    <h3 className="sevieces_heading">
                      Pharmaceutical refrigeration
                    </h3>
                    <p>
                      Our state-of-the-art cold storage facilities ensure the
                      safe preservation of vaccines and temperature-sensitive
                      medications, maintaining their efficacy.
                    </p>
                  </div>
                  <div className="service">
                    <div className="icon web-design">
                      <SuperiorQuality />
                    </div>
                    <h3 className="sevieces_heading">Superior products</h3>
                    <p>
                      All our products are genuine, sourced from reputable
                      manufacturers, and undergo strict quality checks to ensure
                      efficacy and safety.
                    </p>
                  </div>
                  <div className="service">
                    <div className="icon social-media">
                      <Reward />
                    </div>
                    <h3 className="sevieces_heading">Wellness rewards</h3>
                    <p>
                      Earn rewards and benefits in the form of Health Credits
                      with every purchase, which can be redeemed for discounts
                      or free products in the future.
                    </p>
                  </div>
                  <div className="service">
                    <div className="icon ecommerce">
                      <EasyReturn />
                    </div>
                    <h3 className="sevieces_heading">Easy return policy</h3>
                    <p>
                      Enjoy a hassle-free shopping experience with our easy
                      return policy, allowing you to return products easily if
                      needed.
                    </p>
                  </div>
                  <div className="service">
                    <div className="icon ecommerce">
                      <PharmacyConsultancy />
                    </div>
                    <h3 className="sevieces_heading">
                      24/7 pharmacist consultation
                    </h3>
                    <p>
                      Access expert guidance and advice from our qualified
                      pharmacists round the clock, whenever you have questions
                      or need medication-related assistance.
                    </p>
                  </div>
                  <div className="service">
                    <div className="icon ecommerce">
                      <Open />
                    </div>
                    <h3 className="sevieces_heading">24X7 open</h3>
                    <p>
                      We're here for you 24 hours a day, 7 days a week, ensuring
                      you have access to healthcare products and services
                      whenever you need them, day or night.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
