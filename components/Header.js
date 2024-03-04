"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Logo } from "./svg-components/Logo";
import Link from "next/link";
import { Booktest } from "./svg-components/Booktest";
import { Report } from "./svg-components/Report";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { MyCart } from "./MyCart";
import { UploadPrescription } from "./UploadPrescription";
import Nabh from "./svg-components/Nabh";
import { usePathname } from "next/navigation";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useData } from "@/context/context";
import { Badge } from "@mui/material";
import { Attachement } from "./svg-components/Attachement";
import { Facebook } from "@/components/svg-components/Facebook";
import { LinkedIn } from "@/components/svg-components/LinkedIn";
import { Twitter } from "@/components/svg-components/Twitter";
import Youtube from "@/components/svg-components/Youtube";
import { Instagram } from "@/components/svg-components/Instagram";
import Upload from "./svg-components/Upload";
import AddPackages from "./svg-components/AddPackages";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartState, cartDispatch } = useData();

  const pathname = usePathname();
  const showSearchBar = pathname == "/";

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
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const [header, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  let totalQuantity = 0;
  for (const product of cartState.products) {
    totalQuantity += product.quantity;
  }
  return (
    <header>
      <div className={header ? "header fixed" : "header"}>
        <div className="container">
          <div className="row align-items-center justify-content-sm-between justify-content-end">
            <div className="col-lg-1 col-md-2 col-sm-2  col-3">
              <div
                className="logo"
                data-aos="fade"
                data-aos-once="true"
                data-aos-duration="500"
              >
                <Link href="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="col-lg-11 col-md-10 col-sm-10  col-9">
              <div className="d-flex align-items-center  __menus">
                <div
                  className={
                    showSearchBar
                      ? "hidden_header headersearchbox mx-md-2 enquireform"
                      : "headersearchbox mx-2 enquireform"
                  }
                >
                  {/* {!showSearchBar ? <SearchBar /> : null} */}
                  <div className="desktop_nav_search ">
                    <SearchBar />
                  </div>
                </div>
                <div className="mobile_nav_search position-relative d-flex  d-sm-none align-items-end ">
                  <MobileSearchBar />
                  {cartState.products.length !== 0 && (
                    <Badge
                      badgeContent={totalQuantity <= 10 ? totalQuantity : "9+"}
                      color="error"
                    >
                      <PiShoppingCartSimple
                        onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
                      />
                    </Badge>
                  )}
                </div>
                <div
                  class="upload_btn_sc "
                  data-aos="fade"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <div
                    class="upload_btn"
                    href="#"
                    onClick={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })}
                  >
                    <div
                      class="upload_btn_cnt"
                      style={{
                        background:
                          "linear-gradient(223.23deg, #FFFFFF -39.74%, #DBF5F9 94.44%)",
                      }}
                    >
                      <Upload />
                    </div>
                    <p>Upload Prescription</p>
                  </div>
                  <Link class="upload_btn mr-adj" href="/packages">
                    <div
                      class="upload_btn_cnt"
                      style={{
                        background: "#F9E0DB",
                      }}
                    >
                      <AddPackages />
                    </div>
                    <p>Health Package</p>
                  </Link>
                  <Link
                    class="upload_btn"
                    href="https://patient-in.creliohealth.com/patient/login"
                    target="_blank"
                  >
                    <div
                      class="upload_btn_cnt user"
                      style={{
                        background: "#f4e0e7",
                      }}
                    >
                      <LuUser />
                    </div>
                  </Link>
                  <MyCart />
                </div>
                <div className="navbar p-0 align-items-end ">
                  <div className="d-none d-sm-flex justify-content-center align-items-center  navbar_item">
                    <div
                      className=" d-flex align-items-center flex-row justify-content-center "
                      data-aos="fade"
                      data-aos-once="true"
                      data-aos-duration="600"
                    >
                      <div className="nah_logo">
                        <Nabh />
                      </div>

                      <div className="homecollection float-start d-grid">
                        <span className="text-black">Home Collection</span>
                        <article>
                          <Link href="tel:0181-4667555">0181-4667555</Link>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="menustn">
                    <div className={hamburgerClasses} onClick={toggleMenu}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={menuClasses}>
                      <div className="_layer"></div>
                      <div className="container">
                        <div className="row">
                          <div className="web-container justify-content-between d-flex">
                            <div className="header_columns">
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article
                                    className="text-uppercase"
                                    // onClick={toggleMenu}
                                  >
                                    <Link href="/">Home</Link>
                                  </article>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article
                                    className="text-uppercase"
                                    // onClick={toggleMenu}
                                  >
                                    <Link href="/about-us">ABOUT US</Link>
                                  </article>
                                </div>
                              </div>

                              <div className="footercolumn">
                                <div className="fheading">
                                  <article className="text-uppercase">
                                    <Link href="/doctor-profile">
                                      OUR DOCTORS
                                    </Link>
                                  </article>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>
                                      <Link href="/doctor-profile/details/dr-sanjay-wadhwa">
                                        DR SANJAY WADHWA
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/doctor-profile/details/dr-lovely-razdan">
                                        DR LOVELY RAZDAN
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/doctor-profile/details/dr-gurpal-kaur">
                                        DR GURPAL KAUR
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article className="text-uppercase">
                                    <Link href="#">Bookings</Link>
                                  </article>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>
                                      <Link href="/individual-test">
                                        BOOK A TEST
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/packages">
                                        BOOK A PACKAGES
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article className="text-uppercase">
                                    SERVICES
                                  </article>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>
                                      {" "}
                                      <Link
                                        href="https://patient-in.creliohealth.com/patient/login"
                                        target="_blank"
                                      >
                                        FOR INDIVIDUALS
                                      </Link>
                                    </li>
                                    <li>FOR HOSPITALS</li>
                                  </ul>
                                </div>
                              </div>

                              <div className="footercolumn">
                                <div className="fheading">
                                  <article className="text-uppercase">
                                    MY ACCOUNT
                                  </article>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li
                                      onClick={() =>
                                        cartDispatch({ type: "TOGGLE_CART" })
                                      }
                                    >
                                      MY CART
                                    </li>
                                    <li>BLOG</li>
                                    <li>
                                      <Link
                                        href="https://patient-in.creliohealth.com/patient/login"
                                        target="_blank"
                                        rel="none"
                                        className="text-black"
                                      >
                                        LOGIN
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article
                                    className="text-uppercase"
                                    // onClick={toggleMenu}
                                  >
                                    <Link
                                      className="text-black"
                                      href="/terms-conditions"
                                    >
                                      TERMS & CONDITIONS
                                    </Link>
                                  </article>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article
                                    className="text-uppercase"
                                    // onClick={toggleMenu}
                                  >
                                    <Link
                                      className="text-black"
                                      href="/privacy-policy"
                                    >
                                      PRIVACY POLICY
                                    </Link>
                                  </article>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article
                                    className="text-uppercase"
                                    // onClick={toggleMenu}
                                  >
                                    <Link
                                      className="text-black"
                                      href="/refund-cancellation"
                                    >
                                      REFUND & CANCELLATION
                                    </Link>
                                  </article>
                                </div>
                              </div>
                            </div>
                            <div
                              className=" _header_nav_ contact_detail d-none d-md-flex"
                              data-aos="fade-in"
                              data-aos-duration={600}
                              data-aos-once="true"
                              data-aos-easing="ease-in"
                            >
                              <div className="contact">
                                <a href="tel:0181-4667555">
                                  <span className="flex-center align-items-start gap-2 sm-gap-4">
                                    <strong>T</strong>
                                    0181-4667555
                                  </span>
                                </a>
                              </div>
                              <div className="">
                                <div className="contact">
                                  <a href="mailto:assurepathlabs@gmail.com">
                                    <span className="flex-center align-items-start gap-2 sm-gap-4">
                                      <strong>E</strong>
                                      assurepathlabs@gmail.com
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className=" ">
                                <div className="contact">
                                  <span className="flex-center align-items-start gap-2 gap-sm-0">
                                    <strong>A </strong>
                                    &nbsp;3, Waryam Nagar, <br />
                                    Vasant Vihar Road, <br />
                                    Jalandhar
                                  </span>
                                </div>
                              </div>
                              <div className="col-12  mx-auto  flex-center ">
                                <a className="button button--aylen button--round-l footer_btn button--text-thick text-uppercase gradient justify-content-start">
                                  BOOK HOME COLLECTION
                                </a>
                              </div>

                              <strong className="haeader_folow-us">
                                Follow us
                              </strong>
                              <div className="socail_icon ">
                                <div className="">
                                  <Link
                                    href="https://www.facebook.com/assurepathlabsjalandhar/"
                                    target="_blank"
                                  >
                                    <Facebook />
                                  </Link>
                                </div>
                                <div className="">
                                  <Link
                                    href="https://www.instagram.com/assurepathlabs/"
                                    target="_blank"
                                  >
                                    <Instagram />
                                  </Link>
                                </div>

                                <div className="">
                                  <Link
                                    href="https://www.linkedin.com/company/assurepathlabs/"
                                    target="_blank"
                                  >
                                    <LinkedIn />
                                  </Link>
                                </div>
                                {/* <div className="">
                                  <Link href="#">
                                    <Youtube />
                                  </Link>
                                </div> */}
                                {/* <div className="">
                                  <Link href="#">
                                    <Twitter />
                                  </Link>
                                </div> */}
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
      </div>
    </header>
  );
};
