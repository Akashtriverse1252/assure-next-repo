"use client";

import Link from "next/link";
import { Modal } from "@mui/material";
import Backdrop from "@mui/material";
import React, { useState, useEffect } from "react";
import { Cookies as Cookiesicon } from "@/components/svg-components/Cookies";
import Cookies from "js-cookie";
import { useData } from "@/context/context";

const CookiesConset = () => {
  const [open, setOpen] = useState();
  const { cartState, cartDispatch } = useData();

  useEffect(() => {
    const timerId = setTimeout(() => {
      const isCookiesAllowedFromLocal = Cookies.get("isCookiesAllowed");

      setOpen(
        isCookiesAllowedFromLocal ? isCookiesAllowedFromLocal === "false" : true
      );
    }, 4000);

    return () => clearTimeout(timerId);
  }, [cartState.isCookiesAllowed]);

  const handleCloseModal = (allowCookies) => {
    setOpen(false);
    cartDispatch({
      type: "COOKIES_ALLOWING",
      payload: allowCookies,
    });
  };

  const handleDecline = () => {
    handleCloseModal(false);
  };

  const handleAllowCookies = () => {
    handleCloseModal(true);
  };

  return (
    <>
      <div
        className={`cookies_consent position-fixed d-flex flex-wrap justify-content-start align-items-start ${
          open ? " IsCookies" : ""
        }`}
      >
        <div className="container">
          <div className="title">
            <Cookiesicon />
            <strong>Cookies</strong>
          </div>
          <div className=" mb-3">
            This website uses cookies to ensure you get the best experience on
            our website.
            <Link href="/privacy-policy" className="">
              Learn more
            </Link>
          </div>
          <div className="d-flex gap-4 items-center">
            <div onClick={handleAllowCookies} className="textbtn">
              Allow
            </div>
            <div onClick={handleDecline} className="textbtn decline">
              Decline
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesConset;
