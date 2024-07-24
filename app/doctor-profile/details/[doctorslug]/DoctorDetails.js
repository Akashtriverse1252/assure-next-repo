"use client";

import React, { useEffect } from "react";
import "../../index.css";
import Image from "next/image";
import doctorsData from "@/Data/Doctors_detials.json";
import "aos/dist/aos.css"; // Import AOS CSS
import Aos from "aos";

const DoctorDetails = ({ doctorData }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const renderList = (list, title, className, subtitle) =>
    list &&
    list.length > 0 && (
      <div
        className={`docinfo-row ${className}`}
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={400}
        data-aos-once="true"
      >
        <div className="heading">
          <h3>
            <strong>{title}</strong>
          </h3>
        </div>
        <div className="abt_cont">
          <p>{subtitle}</p>
          {Array.isArray(list) && (
            <ul>
              {list.map((item, index) => (
                <li>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {typeof list === "string" && <h5 className="">{list}</h5>}
        </div>
      </div>
    );

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div
              className="row doctor_name "
              data-aos="fade-up"
              data-aos-duration={200}
              data-aos-once="true"
            >
              <div className="procont ">
                <div
                  className="doctor_name_img"
                  data-aos="fade-in"
                  data-aos-duration={600}
                  data-aos-once="true"
                >
                  <Image
                    src={doctorData?.image?.src}
                    alt="Dr. Sanjay Wadhwa"
                    title="Dr. Sanjay Wadhwa"
                    width="250"
                    height="250"
                  />
                </div>
                <div
                  className="procont_name"
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-once="true"
                >
                  <h2>{doctorData?.doctor_name}</h2>
                  <strong>{doctorData?.doctor_education}</strong>
                  <p>{doctorData?.doctor_details}</p>
                </div>
              </div>
            </div>
            <div className="row gap-3 abt_doc_profile">
              {doctorData.qualifications &&
                renderList(
                  doctorData.qualifications,
                  "Qualifications",
                  "qualifi"
                )}
              {doctorData.experience &&
                renderList(
                  doctorData.experience.details,
                  "Experience",
                  "experience",
                  doctorData.experience.title
                )}
              {doctorData.clinical_expertise &&
                renderList(
                  doctorData.clinical_expertise.details,
                  "Clinical Expertise",
                  "clinical",
                  doctorData.clinical_expertise.title
                )}
              {doctorData.advanced_training &&
                renderList(
                  doctorData.advanced_training,
                  "Advanced Training",
                  "advanced"
                )}
              {doctorData.professional_associations &&
                renderList(
                  doctorData.professional_associations,
                  "Professional Associations",
                  "prosses"
                )}
              {doctorData.academic_participations &&
                renderList(
                  doctorData.academic_participations,
                  "Academic Participations",
                  "academic"
                )}
              {doctorData.affiliations &&
                renderList(
                  doctorData.affiliations,
                  "Affiliation with NABL",
                  "association"
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorDetails;
