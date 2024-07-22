"use client";
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Function to convert slug to normal text
const convertSlugToText = (slug) => {
  // Implement your logic to convert the slug to normal text
  // For simplicity, let's just replace hyphens with spaces
  return slug.replace(/-/g, " ");
};

export const BreadCrums = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const excludedWords = ["test", "details"];
  const disabledLinks = [
    "organ",
    "conditions",
    "condition",
    "parameter",
    "test-detail",
    "details",
    "search",
  ];

  return (
    <>
      {pathname !== "/" &&
      pathname !== "/about-us" &&
      pathname !== "/pharmacy" ? (
        <section className="position-relative d-contents _BreadCrums">
          <div className="container">
            <div role="presentation" className="bread_crums ">
              <Breadcrumbs
                separator=">"
                className="mb-3 "
                aria-label="breadcrumb"
              >
                <Link href="/">Home</Link>
                {pathSegments.map((segment, index) => {
                  const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
                  const isDisabled = disabledLinks.includes(segment);
                  const labelText = convertSlugToText(segment);

                  if (!excludedWords.includes(segment)) {
                    return (
                      <Link
                        key={segment}
                        component={isDisabled ? "span" : "a"}
                        href={isDisabled ? "" : path}
                      >
                        {labelText}
                      </Link>
                    );
                  }

                  return null;
                })}
              </Breadcrumbs>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
