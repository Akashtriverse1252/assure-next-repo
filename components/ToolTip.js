import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f8fcff",
    color: "#000",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "none",
    borderRadius: "10px", // Add border radius here
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow here
    padding:" 15px 20px"
  },
}));

const ToolTip = ({ title, children, data }) => {
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">
            <article>{title}</article>
            <p>{data}</p>
          </Typography>
        </React.Fragment>
      }
    >
      {children}
    </HtmlTooltip>
  );
};

export default ToolTip;
