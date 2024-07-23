"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import TestPackageList from "@/components/TestPackageList";

export const Page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.split("/").pop();
    setActiveTab(slug);
  }, [pathname]);

  const tabs = [
    { name: "All test", slug: "individual-test" },
    { name: "Packages", slug: "package" },
  ];

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h1 className="text-uppercase">
                  INDIVIDUAL BLOOD & ALL PATHOLOGY TEST
                </h1>
              </div>
              <div className="col-12 float-start mb-4">
                <div className="tabs col-lg-6 col-12 mx-auto d-flex justify-content-center">
                  {tabs.map((tab) => (
                    <Link
                      key={tab.slug}
                      href={`/${tab.slug}`}
                      className={`tab ${
                        activeTab === tab.slug ? "active" : ""
                      } `}
                    >
                      {tab.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-12 float-start all-test">
                <div className="row justify-content-center">
                  <TestPackageList Type="test" />
                </div>
              </div>
            </div>
            {/* Dots and Line components */}
            <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
            <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
          </div>
        </div>
      </section>
      <section className="position-relative mt-10">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h1 className="text-uppercase">
                  Get All Kind of blood test price in jalandhar
                </h1>
              </div>

              <div className=" contentbox ">
                <p>
                  Assure Pathlabs is the leading blood test laboratory located
                  in Jalandhar. Pathology labs make it easier for the patients
                  to easily check their lab test results instantly online. Goal
                  of pathology examination in pathology labs in Jalandhar is to
                  provide accurate and specific comprehensive diagnoses. These
                  make better and treating for developing the optimal plan for
                  the treatment.
                </p>

                <h2>Need For Pathology Lab Test:</h2>
                <p>
                  A variety of diseases is diagnosed with the pathology lab
                  test. An accurate test report would be helpful for the doctor
                  to provide the right treatment. Doctors could suggest blood
                  tests, stool tests, or urine tests. Normally, the pathology
                  lab plays an important role in testing these samples. Choosing
                  the best dr path lab Jalandhar ensures in getting the test
                  report is accurate. Assure Pathlabs brings you the highest and
                  standardized medical expertise in testing the samples.
                </p>
                <h2>Standardized Lab Test Centre:</h2>
                <p>
                  Pathologists are experienced medical specialists who deal with
                  complete study as well as the practice of the pathology.
                  Taking the blood test online Jalandhar brings you a better
                  option to easily detect the type of disease that is related to
                  the part of the body. Assure Pathlabs is the leading pathology
                  laboratory in the country. It plays an important role in
                  diagnosing diseases. The doctor could recommend certain blood
                  tests when you go for a medical consultation when you are
                  sick.
                </p>
                <h2>Save Your Money:</h2>
                <p>
                  Assure Pathlabs offers the lowest blood test price in
                  Jalandhar, suitable for you to easily save your money in the
                  process. There is also a 10% discount for the senior citizen
                  only on selected tests. These are accurately diagnosed by the
                  pathologists, which gives better options for getting the right
                  treatment. It is also included with helpful guidance, care,
                  along with better support.
                </p>
                <h2>Dedicated Lab Technicians:</h2>
                <p>
                  Lab technicians at Assure Pathlabs are highly qualified and
                  experienced in making accurate lab tests of the samples.
                  Assure Pathlabs is the best diagnostic lab in Jalandhar with
                  qualified Phlebotomists along with the best setup for blood
                  sample collection.
                </p>
                <h2>Benefits of blood test and cbc test by assure pathlabs:</h2>
                <ul>
                  <li>To review your overall health</li>
                  <li>
                    Diagnose or monitor many different disorders, conditions and
                    infections
                  </li>
                  <li>Monitor various blood diseases</li>
                  <li>
                    Detect abnormalities in your blood that may be signs of
                    disease
                  </li>
                </ul>
              </div>
            </div>
            {/* Dots and Line components */}
            <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
            <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
