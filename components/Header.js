"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Logo } from "./svg-components/Logo";
import Link from "next/link";
import { Attachement } from "./svg-components/Attachement";
import { Booktest } from "./svg-components/Booktest";
import { Report } from "./svg-components/Report";
import SearchBar from "./SearchBar";
import { IndividualTest } from "./svg-components/IndividualTest";
import { MyCart } from "./MyCart";
import { UploadPrescription } from "./UploadPrescription";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuClasses = `menslide${isMenuOpen ? " active" : ""}`;
  const hamburgerClasses = `hemburgur${isMenuOpen ? " active" : ""}`;
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  const [header, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <header>
      <div className={header ? "header fixed" : "header"}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo col-md-6 col-12">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="d-flex align-items-end justify-content-end">
                <div className="navbar p-0 align-items-end gap-2">
                  <div className="headersearchbox mx-2 enquireform ">
                    <SearchBar />
                  </div>
                  <div className="d-flex justify-content-end align-items-end gap-4">
                    <div className="leftmenu float-start gap-3 d-flex">
                      <span className="button button--aylen button--round-l button--text-thick ">
                        <Link href="/individual-test">
                          <span>
                            <IndividualTest />
                          </span>
                          Individual Test
                        </Link>
                      </span>
                      {/* <span className="button button--aylen button--round-l button--text-thick my-cart">
                        My Cart
                      </span> */}
                      <MyCart />
                      <span className="button button--aylen button--round-l button--text-thick">
                        Login
                      </span>
                    </div>
                    <div className="homecollection float-start d-grid">
                      <h4 className="text-black">Home Collection</h4>
                      <h3>
                        <a href="tel:0181-4667555">0181-4667555</a>
                      </h3>
                    </div>
                  </div>
                  <div className="menustn">
                    <div className={hamburgerClasses} onClick={toggleMenu}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={menuClasses}>
                      <div className="container">
                        <div className="row">
                          <div className="web-container">
                            <div className="col-12 float-start flex-center align-items-start footerrow">
                              <div className="footercolumn">
                                <div className="fheading">
                                  <h5
                                    className="text-uppercase"
                                    onClick={toggleMenu}
                                  >
                                    <Link href="/">Home</Link>
                                  </h5>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <h5
                                    className="text-uppercase"
                                    onClick={toggleMenu}
                                  >
                                    <Link href="/about-us">ABOUT US</Link>
                                  </h5>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>OUR QUALITY</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <h5 className="text-uppercase">
                                    OUR DOCTORS
                                  </h5>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>DR SANJAY WADHWA</li>
                                    <li>DR LOVELY RAZDAN</li>
                                    <li>DR GURPAL KAUR</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <h5 className="text-uppercase">SERVICES</h5>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>FOR INDIVIDUALS</li>
                                    <li>FOR HOSPITALS</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <h5 className="text-uppercase">
                                    HEALTH PACKAGES
                                  </h5>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <h5 className="text-uppercase">LOCATE US</h5>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>MY CART</li>
                                    <li>BLOG</li>
                                    <li>LOGIN</li>
                                    <li>REGISTER</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menslide fixvisible">
            <div className="row">
              <div className="headerstrip">
                <div className="container">
                  <div className="row">
                    <div className="slimenu d-flex justify-content-end">
                      <ul className="d-flex gap-5 m-0">
                        <li>
                          {/* <span>
                            <Attachement />
                          </span>
                          Upload Prescription */}
                          <UploadPrescription />
                        </li>
                        <li>
                          <Link href="/individual-test">
                            <span>
                              <Booktest />
                            </span>
                            Book a Test
                          </Link>
                        </li>
                        <li>
                          <span>
                            <Report />
                          </span>
                          Booking & Reports
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
