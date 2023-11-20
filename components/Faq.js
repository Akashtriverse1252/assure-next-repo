"use client"

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import FaqData from "../Data/FaqData.json";

export const Faq = () => {
  return (
    <>
      <div className="faqcont col-lg-11 col-12">
        <Accordion allowZeroExpanded={true}>
          {FaqData.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="accordiancont">{item.answer}</div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};
