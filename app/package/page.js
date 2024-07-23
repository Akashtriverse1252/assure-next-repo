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
    { name: "All test", slug: "all-test" },
    { name: "Packages", slug: "package" },
  ];

  const categories = [
    {
      title: "Health check-up packages",
      items: [
        {
          name: "BeSure Complete Wellness Package for Woman",
          link: "/package/besure-complete-wellness-package-for-woman",
        },
        {
          name: "BeSure Complete Wellness Package for Man",
          link: "/package/besure-complete-wellness-package-for-man",
        },
        {
          name: "BeSure Well Immunity Check Panel",
          link: "/package/besure-well-immunity-check-panel",
        },
        {
          name: "BeSure Essential Diabetes Checkup",
          link: "/package/be-sure-essential-diabetes-checkup",
        },
        {
          name: "BeSure Ultima Diabetes Monitoring",
          link: "/package/be-sure-ultima-diabetes-monitoring",
        },
        // {
        //   name: "BeSure Advanced Diabetes Screening",
        //   link: "/package/be-sure-advanced-diabetes-screening",
        // },
        // {
        //   name: "BeSure Essential Fever Panel",
        //   link: "/package/be-sure-essential-fever-panel",
        // },
        // {
        //   name: "BeSure Advanced Liver Function Test",
        //   link: "/package/besure-advanced-liver-function-test",
        // },
        // { "name": "BeSure Essential Liver Function Test", "link": "/package/besure-essential-liver-function-test" },
        // { "name": "BeSure Healthy Heart Panel", "link": "/package/besure-healthy-heart-panel" },
        // { "name": "BeSure Sr. Citizen Advanced Package - Female", "link": "/package/besure-sr-citizen-advanced-package-female" },
        // { "name": "BeSure Sr. Citizen Advanced Package - Male", "link": "/package/besure-sr-citizen-advanced-package-male" },
        // { "name": "BeSure Fit Couple Advanced for Women", "link": "/package/besure-fit-couple-advanced-for-women" },
        // { "name": "BeSure Fit Couple Advanced for Men", "link": "/package/besure-fit-couple-advanced-for-men" },
        // { "name": "BeSure Fit Couple Essential for Women", "link": "/package/besure-fit-couple-essential-for-women" },
        // { "name": "BeSure Fit Couple Essential for Men", "link": "/package/besure-fit-couple-essential-for-men" },
        // { "name": "BeSure Fitwoman Advanced Care", "link": "/package/besure-fitwoman-advanced-care" },
        // { "name": "BeSure Fitwoman Ultima", "link": "/package/besure-fitwoman-ultima" },
        // { "name": "BeSure Fitwoman Essential", "link": "/package/besure-fitwoman-essential" }
      ],
    },
    {
      title: "Popular packages",
      items: [
        {
          name: "Comprehensive Wellness Package for Women",
          link: "/package/comprehensive-wellness-package-for-women",
        },
        {
          name: "Infertility Screening Panel for Men",
          link: "/package/infertility-screening-panel-for-men",
        },
        {
          name: "Free Thyroid Profile FT3, FT4, TSH",
          link: "/package/free-thyroid-profile-ft3-ft4-tsh",
        },
        {
          name: "Infertility Screening Panel for Women",
          link: "/package/infertility-screening-panel-for-women",
        },
        { name: "Hypertension profile", link: "/package/hypertension-profile" },
        { name: "Respiratory Panel", link: "/package/respiratory-panel" },
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
        { name: "Thyroid", link: "/organ/thyroid" },
        { name: "Kidney", link: "/organ/kidney" },
        { name: "Lungs", link: "/organ/lungs" },
        { name: "Heart", link: "/organ/heart" },
        { name: "Liver", link: "/organ/liver" },
      ],
    },
  ];

  return (
    <>
      <main>
        <section className="position-relative mb-5 ">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center">
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
                  <div key={index} className="col-md-3 mb-4 contentbox">
                    <div className="col-fit _pacakage_contet mx-auto">
                      <h3 className="mb-3">{category.title}</h3>
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
