"use client"
import React from 'react'
import { Line } from "@/components/svg-components/Line";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
     <footer className="col-12 float-start position-relative">
        <div className="footerwhite col-12 float-start">
          <div className="container">
            <div className="web-container">
              <div className="col-12 float-start flex-center align-items-start footerrow">
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">Home</h5>
                  </div>
                </div>
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">ABOUT US</h5>
                  </div>
                  <div className="fmenu">
                    <ul className="p-0 m-0">
                      <li>OUR QUALITY</li>
                    </ul>
                  </div>
                </div>
                <div className="footercolumn">
                  <div className="fheading">
                    <h5 className="text-uppercase">OUR DOCTORS</h5>
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
                    <h5 className="text-uppercase">HEALTH PACKAGES</h5>
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
        <Line className="svgwidthline position-absolute top-0 end-0"/>
        </div>
        <div className="footergray col-12 float-start">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-lg-4 col-xs-6 col-sm-6 col-12">
                  <div className="contact">
                    <a href='tel:0181-4667555'><span className="flex-center align-items-start gap-4"><strong>T</strong>0181-4667555</span></a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-6 col-12">
                  <div className="contact">
                    <a href='mailto:assurepathlabs@gmail.com'><span className="flex-center align-items-start gap-4"><strong>E</strong>assurepathlabs@gmail.com</span></a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-6 col-12">
                  <div className="contact">
                    <span className="flex-center align-items-start gap-4"><strong>A</strong>3, Waryam Nagar, <br />Vasant Vihar Road, <br />Jalandhar</span>
                  </div>
                </div>
                <div className="col-12 flex-center mt-5 mb-5">
                  <a className="button button--aylen button--round-l button--text-thick text-uppercase gradient col-lg-3 col-12">BOOK HOME COLLECTION</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footergray col-12 float-start ftrbdr m-0 pt-3 pb-3">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-6 col-12">
                  <p className="m-0">&copy; {currentYear} All Rights Reserved. </p>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-6 col-12 text-end">
                  <p className="m-0"><a href='https://triverseadvertising.com/' target='_blank' >site : triverse</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
