"use client";

import { AccordionComponent } from "@/components/Accordian";
import { ChooseAssure } from "@/components/ChooseAssure";
import { Cart } from "@/components/svg-components/Cart";
import { Rupees } from "@/components/svg-components/Rupees";
import { useData } from "@/context/context";
import { AddCard, Addchart, CardGiftcardOutlined } from "@mui/icons-material";
import React from "react";
import package_info from "@/Data/test_data.json";
import { useParams } from "next/navigation";
import { Faq } from "@/components/Faq";

export const page = () => {
  const { cartState, cartDispatch } = useData();
  const params = useParams();

  const slug = params.slug;
  const project = package_info.test_data.find((p) => p.Slug === slug) || null;
  const _discount = project?.Test_Amount
    ? (
        ((project.Test_Amount - project.Discount_Amount) /
          project.Test_Amount) *
        100
      ).toFixed()
    : 0;

  const handleAddToCart = () => {
    cartDispatch({ type: "TOGGLE_CART" });
    const product = {
      id: project.id,
      name: project.Test_Name,
      price: project.Test_Amount,
      dis_price: project.Discount_Amount,
      quantity: 1,
      discount: _discount,
    };
    const existingProduct = cartState.products.find((p) => p.id === product.id);

    if (existingProduct) {
      // If the product exists, update its quantity
      cartDispatch({
        type: "INCREMENT",
        productId: product.id,
      });
    } else {
      // If the product doesn't exist, add it to the cart
      cartDispatch({
        type: "ADD_TO_CART",
        product,
      });
    }
  };

  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section>
          {project ? (
            <div className="container">
              <div className="web-container">
                <div className="row">
                  <div className="title col-12 float-start text-center">
                    <h2>{project.title}</h2>
                  </div>
                  <div className="col-lg-11 m-auto col-12 float-start grey-background pt-4 px-0">
                    <div className="detailrow">
                      <div className="row">
                        <div className="detailtitle col-lg-3 col-12">
                          <p>
                            <strong>Package Name</strong>
                          </p>
                        </div>
                        <div className="detaildescrp col-lg-9 col-12">
                          <p>
                            <strong>{project.Test_Name}</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    {project.TestDetails && (
                      <div className="detailrow">
                        <div className="row">
                          <div className="detailtitle col-lg-3 col-12">
                            <p>
                              <strong>About Package</strong>
                            </p>
                          </div>
                          <div className="detaildescrp col-lg-9 col-12">
                            <p>{project.Test_Description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {project.TestInfo.length ? (
                      <div className="detailrow">
                        <div className="row">
                          <div className="detailtitle col-lg-3 col-12">
                            <p>
                              <strong>Parameters Included</strong>
                            </p>
                          </div>
                          <div className="detaildescrp col-lg-9 col-12">
                            <p>{project.TestInfo.length}</p>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div className="detailrow">
                      <div className="row">
                        <div className="detailtitle col-lg-3 col-12">
                          <p>
                            <strong>Exclusive Offer</strong>
                          </p>
                        </div>
                        {project.Discount_Amount == 0 ? (
                          <>
                            <div className="detaildescrp col-lg-9 col-12 ">
                              <div className="packageprice d-flex align-items-center gap-5">
                                <div className="discountprice gradient  text-white m-0">
                                  <Rupees /> <span>{project.Test_Amount}</span>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="detaildescrp col-lg-9 col-12 ">
                            <div className="packageprice d-flex align-items-center gap-5">
                              <div className="actualprice">
                                <Rupees /> <span>{project.Test_Amount}</span>
                              </div>
                              <div className="discountprice gradient  text-white m-0">
                                <Rupees />{" "}
                                <span>{project.Discount_Amount}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>                  
                    {_discount ? (
                      <div className="detailrow">
                        <div className="row">
                          <div className="detailtitle col-lg-3 col-12">
                            <p>
                              <strong>Discount</strong>
                            </p>
                          </div>
                          <div className="detaildescrp col-lg-9 col-12 ">
                            <p>UPTO {_discount}%</p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="detailrow">
                      <div className="row">
                        <div className="detailtitle col-lg-3 col-12">
                          <p>
                            <strong>Highlights</strong>
                          </p>
                        </div>
                        <div className="detaildescrp col-lg-9 col-12 ">
                          <div className="highlights flex-center flex-wrap gap-3 justify-content-start">
                            <p>
                              <strong>{project.TestInfo.length} </strong>
                              Parameters
                            </p>

                            <p>
                              <strong>FREE</strong> Sample Collection
                            </p>
                            <p>
                              <strong>FREE</strong> Report Counselling
                            </p>
                            <p>
                              Test booked so far: <strong>200</strong>
                            </p>
                            <p>
                              Report Time: <strong>Same Day</strong>
                            </p>
                            <p>
                              Fasting: Overnight <strong>8 hours</strong>
                            </p>
                            <p>
                              Test Recommended for <strong>Male</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="detailrow">
                      <div className="row">
                        <div className="detailtitle col-lg-3 col-12">
                          <p>
                            <strong>
                              Test Details <br />
                              (Parameters included : {project.TestInfo.lenght})
                            </strong>
                          </p> 
                        </div>
                        <div className="detaildescrp col-lg-9 col-12">
                          {/* <AccordionComponent
                            ParameterData={project.TestInfo}
                          /> */}
                          <div className="col-12 flex-center mt-5 mb-2 mb-sm-5 justify-content-center justify-content-sm-start flex-wrap gap-3 m-auto">
                            {/* <a
                              className="button button--aylen button--round-l button--text-thick  gradient col-lg-3 col-11   d-flex justify-content-center gap-2"
                              onClick={handleAddToCart}
                            >
                              <Cart /> Add to Cart
                            </a> */}
                            <button
                              className="button button--aylen button--round-l button--text-thick  gradient col-lg-3 col-11   flex-center gap-2"
                              onClick={handleAddToCart}
                              disabled={cartState.cartVisible}
                            >
                              <Cart /> Add to Cart
                            </button>
                            <a className="button button--aylen button--round-l button--text-thick  gradient col-lg-3 col-11 ">
                              Book Home Collection
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="flex-center col-12">No data found</p>
          )}
        </section>
        <section id="faq" className="faq">
          <div className="container position-relative z-index-2">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center">
                  <h2 className="">Frequently Asked Questions.</h2>
                </div>
                <div className="col-lg-11 col-12 m-auto float-start">
                  <Faq className="minusbottom " />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ChooseAssure />
      </main>
    </>
  );
};
export default page;
