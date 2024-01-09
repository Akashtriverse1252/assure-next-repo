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
    <div className="faqcont col-lg-11 col-12">
      <Accordion allowZeroExpanded={true}>
        {ParameterData.map((item, index) => (
          <AccordionItem key={index}>
            {item.count === 1 ? (
              <AccordionItemHeading>
                <AccordionItemButton>
                  {/* <Link href={`/parameter/${item.slug}`}> */}
                  <Link href={`/parameter/${item.slug}?cat=${item.category}`}>
                    {item.testName}
                  </Link>
                </AccordionItemButton>
              </AccordionItemHeading>
            ) : (
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    {item.testName}&nbsp;({item.items && item.items.length})
                  </span>
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
