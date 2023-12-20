"use client";

import Link from "next/link";
import { Modal } from "@mui/material";
import Backdrop from "@mui/material";
import React, { useState, useEffect } from "react";
import { Cookies } from "@/components/svg-components/Cookies";
import { useData } from "@/context/context";

const CookiesConset = () => {
  const [open, setOpen] = useState();
  const { cartState, cartDispatch } = useData();

  useEffect(() => {
    // Check local storage for user's cookie consent preference
    const isCookiesAllowed = localStorage.getItem("isCookiesAllowed");

    // If user hasn't made a choice yet, show the consent popup
    if (isCookiesAllowed === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  const handleDecline = () => {
    setOpen(false);
    // Additional logic for handling decline action

    // Update local storage with user's choice
    localStorage.setItem("isCookiesAllowed", JSON.stringify(false));

    // Dispatch the action to your context
    cartDispatch({
      type: "COOKIES_ALLOWING",
      payload: false,
    });
  };

  const handleAllowCookies = () => {
    setOpen(false);
    // Additional logic for handling allow cookies action

    // Update local storage with user's choice
    localStorage.setItem("isCookiesAllowed", JSON.stringify(true));

    // Dispatch the action to your context
    cartDispatch({
      type: "COOKIES_ALLOWING",
      payload: true,
    });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleDecline}
        className="cookies_consent_backdrop"
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            // TransitionComponent: Fade,
          },
        }}
      >
        <div className="cookies_consent  position-fixed  d-flex flex-wrap justify-content-start align-items-start ">
          <div className=" mb-3">
            <Cookies />
            This website uses cookies to ensure you get the best experience on
            our website.
            <Link href="/privacy-policy" className="">
              Learn more
            </Link>
          </div>
          <div className="d-flex gap-4 items-center">
            <div onClick={handleDecline} className="textbtn">
              Decline
            </div>
            <div onClick={handleAllowCookies} className="textbtn">
              Allow Cookies
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CookiesConset;
