"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import FaqData from "../Data/FaqData.json";

export const Faq = ({ Data }) => {
  const faqItems = Data && Data.length > 0 ? Data : FaqData;
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
          {faqItems.map((item, index) => (
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
      </div>
    </>
  );
};
