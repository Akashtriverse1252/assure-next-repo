"use client";
import React, { useState } from "react";
import Upload from "./svg-components/Upload";
import AddPackages from "./svg-components/AddPackages";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import { MyCart } from "./MyCart";

const FabFlinger = () => {
  const [isShowing, setIsShowing] = useState(false);

  const showOpts = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <div className="speed-dail">
        <div
          className={` mdl-button--fab_flinger-container ${
            isShowing ? "is-showing-options" : ""
          }`}
          id="fab_ctn"
        >
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
            id="fab_btn"
            data-upgraded=",MaterialButton,MaterialRipple"
            onClick={showOpts}
          >
            <Upload />
            <span className="mdl-button__ripple-container">
              <span
                className="mdl-ripple is-animating"
              />
            </span>
          </button>
          <div className="mdl-button--fab_flinger-options">
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
              data-upgraded=",MaterialButton,MaterialRipple"
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
              <AddPackages />
              <span className="mdl-button__ripple-container">
                <span className="mdl-ripple" />
              </span>
            </button>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
              data-upgraded=",MaterialButton,MaterialRipple"
            >
              <LuUser />
              <span className="mdl-button__ripple-container">
                <span className="mdl-ripple" />
              </span>
            </button>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
              data-upgraded=",MaterialButton,MaterialRipple"
            >
             <MyCart />
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
