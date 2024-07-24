"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import TestPackageList from "@/components/TestPackageList";
import { Helmet } from "react-helmet";

export const Page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.split("/").pop();
    setActiveTab(slug);
  }, [pathname]);

  const tabs = [
    { name: "All tests", slug: "all-test" },
    { name: "All Packages", slug: "packages" },
  ];

  const categories = [
    {
      title: "Health check-up packages",
      items: [
        {
          name: "BeSure Complete Wellness Package for Woman",
          link: "/packages/besure-complete-wellness-package-for-woman",
        },
        {
          name: "BeSure Complete Wellness Package for Man",
          link: "/packages/besure-complete-wellness-package-for-man",
        },
        {
          name: "BeSure Well Immunity Check Panel",
          link: "/packages/besure-well-immunity-check-panel",
        },
        {
          name: "BeSure Essential Diabetes Checkup",
          link: "/packages/be-sure-essential-diabetes-checkup",
        },
        {
          name: "BeSure Ultima Diabetes Monitoring",
          link: "/packages/be-sure-ultima-diabetes-monitoring",
        },
        // {
        //   name: "BeSure Advanced Diabetes Screening",
        //   link: "/packages/be-sure-advanced-diabetes-screening",
        // },
        // {
        //   name: "BeSure Essential Fever Panel",
        //   link: "/packages/be-sure-essential-fever-panel",
        // },
        // {
        //   name: "BeSure Advanced Liver Function Test",
        //   link: "/packages/besure-advanced-liver-function-test",
        // },
        // { "name": "BeSure Essential Liver Function Test", "link": "/packages/besure-essential-liver-function-test" },
        // { "name": "BeSure Healthy Heart Panel", "link": "/packages/besure-healthy-heart-panel" },
        // { "name": "BeSure Sr. Citizen Advanced Package - Female", "link": "/packages/besure-sr-citizen-advanced-package-female" },
        // { "name": "BeSure Sr. Citizen Advanced Package - Male", "link": "/packages/besure-sr-citizen-advanced-package-male" },
        // { "name": "BeSure Fit Couple Advanced for Women", "link": "/packages/besure-fit-couple-advanced-for-women" },
        // { "name": "BeSure Fit Couple Advanced for Men", "link": "/packages/besure-fit-couple-advanced-for-men" },
        // { "name": "BeSure Fit Couple Essential for Women", "link": "/packages/besure-fit-couple-essential-for-women" },
        // { "name": "BeSure Fit Couple Essential for Men", "link": "/packages/besure-fit-couple-essential-for-men" },
        // { "name": "BeSure Fitwoman Advanced Care", "link": "/packages/besure-fitwoman-advanced-care" },
        // { "name": "BeSure Fitwoman Ultima", "link": "/packages/besure-fitwoman-ultima" },
        // { "name": "BeSure Fitwoman Essential", "link": "/packages/besure-fitwoman-essential" }
      ],
    },
    {
      title: "Popular packages",
      items: [
        {
          name: "Comprehensive Wellness Package for Women",
          link: "/packages/comprehensive-wellness-package-for-women",
        },
        {
          name: "Infertility Screening Panel for Men",
          link: "/packages/infertility-screening-panel-for-men",
        },
        {
          name: "Free Thyroid Profile FT3, FT4, TSH",
          link: "/packages/free-thyroid-profile-ft3-ft4-tsh",
        },
        {
          name: "Infertility Screening Panel for Women",
          link: "/packages/infertility-screening-panel-for-women",
        },
        {
          name: "Hypertension profile",
          link: "/packages/hypertension-profile",
        },
        { name: "Respiratory Panel", link: "/packages/respiratory-panel" },
      ],
    },
    {
      title: "Test by condition",
      items: [
        { name: "Cancer", link: "/condition/cancer" },
        { name: "Viral", link: "/condition/viral-infections" },
        { name: "Allergy", link: "/condition/allergy" },
        { name: "Fever", link: "/condition/fever" },
        { name: "Heart", link: "/condition/heart" },
        { name: "Diabetes", link: "/condition/diabetes" },
        { name: "Hypertension", link: "/condition/hypertension" },
        { name: "Infertility", link: "/condition/infertility" },
      ],
    },
    {
      title: "Test by organ",
      items: [
        { name: "Thyroid", link: "/organs/thyroid" },
        { name: "Kidney", link: "/organs/kidney" },
        { name: "Lungs", link: "/organs/lungs" },
        { name: "Heart", link: "/organs/heart" },
        { name: "Liver", link: "/organs/liver" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Blood Test Lab in Jalandhar | CBC Test Cost in Jalandhar | Blood Test
          Online Price in Jalandhar | Assure Pathlabs
        </title>
        <meta
          name="description"
          content="Searching for Best Blood Test Lab in Jalandhar, visit Assure Pathlabs having highly qualified doctors and providing all types of Blood Tests, CBC Tests at best price, if you are looking for blood test online in jalandhar, assure is the best, Get a free quote."
        />
        <meta name="keywords" content="Assure Pathlabs" />
        <meta
          property="og:title"
          content="Best Pathology Lab in Jalandhar | Dr Pathlabs &amp; Diagnostic Labs in Jalandhar | Assure Pathlabs"
        />
        <meta
          property="og:description"
          content="Assure Pathlabs - Best Pathology Lab in Jalandhar | Get Best Health Chek -Up Packages in Jalandhar from Assure | Best diagnostic Labs in Jalandhar"
        />
        <meta
          property="og:image"
          content="https://www.assurepathlabs.com/images/assure-logo.png"
        />
        <meta property="og:url" content="https://www.assurepathlabs.com" />
        <meta
          name="twitter:title"
          content="Best Pathology Lab in Jalandhar | Dr Pathlabs &amp; Diagnostic Labs in Jalandhar | Assure Pathlabs"
        />
        <meta
          name="twitter:description"
          content="Assure Pathlabs - Best Pathology Lab in Jalandhar | Get Best Health Chek -Up Packages in Jalandhar from Assure | Best diagnostic Labs in Jalandhar"
        />
        <meta
          name="twitter:url"
          content="https://www.assurepathlabs.com/images/assure-logo.png"
        />
        <link rel="canonical" href="https://www.assurepathlabs.com/packages" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <main>
        <section className="position-relative mb-5 ">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center mb-2">
                  <h1 className="text-uppercase">Health Packages</h1>
                </div>

                {/* Tabs */}
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
                    <TestPackageList Type="package" />
                  </div>
                </div>
              </div>
              {/* Dots and Line components */}
              <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
              <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
            </div>
          </div>
        </section>
        <section className="position-relative d-flex mt-5">
          <div className="container">
            <div className="web-container">
              <div className="row">
                {categories.map((category, index) => (
                  <div key={index} className="col-md-3 mb-md-4 mb-0 contentbox">
                    <div className="col-fit _pacakage_contet mx-auto">
                      <h3 className="mb-md-3 mb-1">{category.title}</h3>
                      <ul className="list-unstyled">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a href={item.link} className="text-black ">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              {/* Dots and Line components */}
              <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
              <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
