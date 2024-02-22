"use client";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const AccordionComponent = ({ ParameterData }) => {
  return (
    <div
      className="faqcont  col-12"
      data-aos="fade-up"
      data-aos-duration={500}
      data-aos-once="true"
      data-aos-easing="ease-in"
    >
      <Accordion allowZeroExpanded={true}>
        {ParameterData.map((item, index) => (
          <AccordionItem key={index}>
            {item.count === 1 ? (
              <AccordionItemHeading>
                <AccordionItemButton>
                  {/* <Link href={`/parameter/${item.slug}`}> */}
                  <Link href={`/parameter/${item.slug}`}>
                    <h3>{item.testName}</h3>
                  </Link>
                </AccordionItemButton>
              </AccordionItemHeading>
            ) : (
              <AccordionItemHeading>
                <AccordionItemButton>
                  <h3>
                    {item.testName}&nbsp;({item.items && item.items.length})
                  </h3>
                </AccordionItemButton>
              </AccordionItemHeading>
            )}

            {/* <span>{item.count}</span> */}
            {item.items ? ( // Check if there are items
              <AccordionItemPanel>
                <div className="accordiancont">
                  <ul>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        {item.count > 1 ? (
                          <Link href={`/parameter/${item.slug}`}>
                            {subItem}
                          </Link>
                        ) : (
                          subItem
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionItemPanel>
            ) : null}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
