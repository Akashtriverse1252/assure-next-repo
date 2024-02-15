import React from "react";
import { PiTestTubeDuotone } from "react-icons/pi";
import Upload from "./svg-components/Upload";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const BottomNav = () => {
  return (
    <>
      <div className="BottomNavContainer">
        <div className="BottomNavItem">
          <PiTestTubeDuotone />
          <span className="BottomNavText Active"> Test</span>
        </div>
        <div className="BottomNavItem Reports">
          <LuShoppingCart />
          <span className="BottomNavText">Cart</span>
        </div>
        <div className="BottomNavItem Reports">
          <Link
            className=""
            href="https://patient-in.creliohealth.com/patient/login"
            target="_blank"
          >
            <LuUser />
          </Link>
          <span className="BottomNavText">Reports</span>
        </div>
        <div className="BottomNavItem">
          <Upload />
          <span className="BottomNavText">Prescription</span>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
