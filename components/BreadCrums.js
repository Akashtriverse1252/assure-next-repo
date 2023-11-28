"use client";
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { usePathname } from "next/navigation";

// Function to convert slug to normal text
const convertSlugToText = (slug) => {
  // Implement your logic to convert the slug to normal text
  // For simplicity, let's just replace hyphens with spaces
  return slug.replace(/-/g, " ");
};

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export const BreadCrums = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const excludedWords = ["test"];
  const disabledLinks = ["organ", "conditions", "parameter", "test-detail"]; // Keywords to disable links

  return (
    <>
      {pathname !== "/" ? (
        <section className="position-relative d-contents">
          <div className="container">
            <div role="presentation" className="bread_crums ">
              <Breadcrumbs className="mb-3 " aria-label="breadcrumb">
                <StyledBreadcrumb
                  component="a"
                  href="/"
                  label="Home"
                  icon={<HomeIcon fontSize="small" />}
                />
                {pathSegments.map((segment, index) => {
                  const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

                  // Check if the link should be disabled
                  const isDisabled = disabledLinks.includes(segment);

                  // Convert slug to normal text
                  const labelText = convertSlugToText(segment);

                  if (!excludedWords.includes(segment)) {
                    return (
                      <StyledBreadcrumb
                        key={segment}
                        component={isDisabled ? "span" : "a"}
                        href={isDisabled ? undefined : path}
                        label={labelText}
                      />
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
