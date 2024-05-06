"use client";
import React, { useEffect, useState } from "react";
import Upload from "./svg-components/Upload";
import AddPackages from "./svg-components/AddPackages";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import { MyCart } from "./MyCart";
import { FaPlus } from "react-icons/fa6";
import { useData } from "@/context/context";
import Link from "next/link";
import { PiTestTubeDuotone } from "react-icons/pi";

const FabFlinger = () => {
  const [isShowing, setIsShowing] = useState(false);
  const { cartState, cartDispatch } = useData();

  const showOpts = () => {
    setIsShowing(!isShowing);
  };
  const handleToggleCart = () => {
    if (!cartState.cartVisible) {
      cartDispatch({ type: "TOGGLE_CART" });
      console.log("is cart is open", cartState.TOOGLE_CART);
    }
  };
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const handleFloatingButtonClick = () => {
    const formSection = document.getElementById("homeCollectionForm");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;

    const scrollThreshold = viewportHeight * 0.4; // 40% of the viewport height

    setShowFloatingButton(scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`speed-dail ${showFloatingButton ? "activated" : ""}`}>
        <div
          className={` mdl-button--fab_flinger-container ${
            isShowing ? "is-showing-options" : ""
          } ${showFloatingButton ? "activated" : ""}`}
          id="fab_ctn"
        >
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
            id="fab_btn"
            data-upgraded=",MaterialButton,MaterialRipple"
            onClick={showOpts}
          >
            <FaPlus />
            <span className="mdl-button__ripple-container">
              <span className="mdl-ripple is-animating" />
            </span>
          </button>
          <div className="mdl-button--fab_flinger-options">
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect user_speed_dial"
              data-upgraded=",MaterialButton,MaterialRipple"
              onClick={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })}
            >
              <Upload />
              <span className="mdl-button__ripple-container">
                <span className="mdl-ripple" />
              </span>
            </button>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
              data-upgraded=",MaterialButton,MaterialRipple"
            >
              <Link class=" " href="/packages">
                <AddPackages />
              </Link>
              <span className="mdl-button__ripple-container">
                <span className="mdl-ripple" />
              </span>
            </button>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
              data-upgraded=",MaterialButton,MaterialRipple"
            >
              <Link class=" mr-adj" href="/individual-test">
                <PiTestTubeDuotone />
              </Link>
              <span className="mdl-button__ripple-container">
                <span className="mdl-ripple" />
              </span>
            </button>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect "
              data-upgraded=",MaterialButton,MaterialRipple"
            >
              <Link
                class=""
                href="https://patients.assurepathlabs.com/patient/login"
                target="_blank"
              >
                <LuUser />
              </Link>
              <span className="mdl-button__ripple-container">
                <span className="mdl-ripple" />
              </span>
            </button>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
              data-upgraded=",MaterialButton,MaterialRipple"
              onClick={handleToggleCart}
            >
              <LuShoppingCart />
              <span className="mdl-button__ripple-container">
                <span className="mdl-ripple" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FabFlinger;
