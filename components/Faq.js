"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import FaqData from "../Data/FaqData.json";

export const Faq = ({ Data, initialCount = 5 }) => {
  const faqItems = Data && Data.length > 0 ? Data : FaqData;
  const [showAll, setShowAll] = useState(false);
  const [count, setCount] = useState(initialCount);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(showAll ? faqItems : faqItems.slice(0, count));
  }, [showAll, count, faqItems]);

  const handleReadMore = () => {
    setShowAll(!showAll);
  };

  const shouldShowButton = faqItems.length > count;

  return (
    <>
      <div
        className="faqcont col-lg-11 col-12"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={300}
        data-aos-once="true"
        data-aos-easing="ease"
      >
        <Accordion allowZeroExpanded={true}>
          {filteredData.map((item, index) => (
            <AccordionItem key={index}>
              <h3>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.question}</AccordionItemButton>
                </AccordionItemHeading>
              </h3>
              <AccordionItemPanel>
                <div
                  className="accordiancont"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        {shouldShowButton && (
          <div className="col-12 pt-3 mx-auto text-center d-flex justify-content-center">
            <button
              className="button button--aylen button--round-l button--text-thick mx-auto gradient col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-11 "
              onClick={handleReadMore}
            >
              {showAll ? "Read Less" : "Read More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
