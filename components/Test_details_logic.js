"use client";

import React, { useState } from "react";
import { Rupees } from "./svg-components/Rupees";
import { Cart } from "./svg-components/Cart";
import Bin from "./svg-components/Bin";
import { useData } from "@/context/context";
import data from "../Data/test_data.json";
import { Faq } from "./Faq";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Test_details_logic = ({ Slug }) => {
  const router = useRouter();
  const { cartState, cartDispatch } = useData();
  const [isInCart, setIsInCart] = useState(false);
  const project = data.test_data.find((p) => p.Slug === Slug) || null;

  const _discount = project?.Test_Amount
    ? (
        ((project.Test_Amount - project.Discount_Amount) /
          project.Test_Amount) *
        100
      ).toFixed()
    : 0;
  // Assuming cartState.products is your array of products
  const cartIds = cartState.products.map((cartproduct) => cartproduct.id);

  // console.log("These are the cart ids:", cartIds.includes(project.id));

  const handleToggleCart = () => {
    if (cartIds.includes(project.id)) {
      // Remove product from cart logic here
      // cartDispatch({ type: "REMOVE", productId: project.id });
    } else {
      // Add product to cart logic here
      cartDispatch({ type: "TOGGLE_CART" });
      const product = {
        id: project.id,
        name: project.Test_Name,
        price: project.Test_Amount,
        dis_price: project.Discount_Amount,   
        quantity: 1,
        discount: _discount,
      };
      const existingProduct = cartState.products.find(
        (p) => p.id === product.id
      );

      if (existingProduct) {
        // If the product exists, update its quantity
        // cartDispatch({
        //   type: "INCREMENT",
        //   productId: product.id,
        // });
      } else {
        // If the product doesn't exist, add it to the cart
        cartDispatch({
          type: "ADD_TO_CART",
          product,
        });
      }
    }

    // Toggle the state to update the button text and functionality
    setIsInCart(!isInCart);
  };
  const handleBookHomeCollectionClick = () => {
    handleToggleCart();
    // Redirect to the desired page
    router.push("/check-out");
  };

  return (
    <>
      {project && (
        <div className="row">
          <div className="title col-12 float-start text-center">
            <h2>{project.Test_Name}</h2>
            {/* {!project.Test_Category ? (
              <>
              </>
            ) : (
              <h2>{project.Test_Category}-test</h2>
            )} */}
          </div>
          <div className="col-lg-11 m-auto col-12 float-start grey-background pt-4 px-0">
            <div className="detailrow">
              <div className="row">
                <div className="detailtitle col-lg-3 col-md-4 col-12">
                  <p>
                    <strong>Package Name</strong>
                  </p>
                </div>
                <div className="detaildescrp col-lg-9 col-md-8 col-12">
                  <p>
                    <strong>{project.Test_Name}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="detailrow">
              <div className="row">
                <div className="detailtitle col-lg-3 col-md-4 col-12">
                  <p>
                    <strong>About Package</strong>
                  </p>
                </div>
                <div className="detaildescrp col-lg-9 col-md-8 col-12">
                  <p>{project.Test_Description}</p>
                </div>
              </div>
            </div>
            {/* <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-md-4 col-12">
                        <p>
                          <strong>Parameters Included</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-md-8 col-12">
                        <p>26</p>
                      </div>
                    </div>
                  </div> */}
            <div className="detailrow">
              <div className="row">
                <div className="detailtitle col-lg-3 col-md-4 col-12">
                  <p>
                    <strong>Exclusive Offer</strong>
                  </p>
                </div>
                <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                  <div className="packageprice d-flex align-items-center gap-5">
                    {project.Discount_Amount != 0 ? (
                      <>
                        <div className="actualprice">
                          <Rupees /> <span>{project.Test_Amount}</span>
                        </div>
                        <div className="discountprice gradient  text-white m-0">
                          <Rupees /> <span>{project.Discount_Amount}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="discountprice gradient  text-white m-0">
                          <Rupees /> <span>{project.Test_Amount}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {_discount !== "100" && (
              <div className="detailrow">
                <div className="row">
                  <div className="detailtitle col-lg-3 col-md-4 col-12">
                    <p>
                      <strong>Discount</strong>
                    </p>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                    <p>
                      UPTO <strong>{Math.round(_discount)}%</strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {project.Who_is_it_for && (
              <div className="detailrow">
                <div className="row">
                  <div className="detailtitle col-lg-3 col-md-4 col-12">
                    <p>
                      <strong>Who is it for</strong>
                    </p>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                    <div className="highlights flex-center flex-wrap gap-3 justify-content-start">
                      <p>{project.Who_is_it_for}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {project.Turn_around_time && (
              <div className="detailrow">
                <div className="row">
                  <div className="detailtitle col-lg-3 col-md-4 col-12">
                    <p>
                      <strong>Turn around time</strong>
                    </p>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                    <div className="highlights flex-center flex-wrap gap-3 justify-content-start">
                      <p>{project.Turn_around_time}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {project.Pre_test_information && (
              <div className="detailrow">
                <div className="row">
                  <div className="detailtitle col-lg-3 col-md-4 col-12">
                    <p>
                      <strong>Pre test information</strong>
                    </p>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                    <div className="highlights flex-center flex-wrap gap-3 justify-content-start">
                      <p>{project.Pre_test_information}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="detailrow">
              <div className="row">
                <div className="detailtitle col-lg-3 col-md-4 col-12">
                  <p>
                    <strong>Book Now</strong>
                  </p>
                </div>
                <div className="detaildescrp col-lg-9 col-md-8 col-12">
                  <div className="col-12 flex-center mt-5 mb-2 mb-sm-5 justify-content-center justify-content-sm-start flex-wrap gap-3 m-auto">
                    <button
                      className={`button button--aylen button--round-l button--text-thick gradient col-lg-3 col-md-4 col-11 flex-center gap-2 ${
                        isInCart ? "button--remove" : ""
                      }`}
                      onClick={handleToggleCart}
                    >
                      {cartIds.includes(project.id) ? (
                        <>
                          <Bin />
                          Remove from Cart
                        </>
                      ) : (
                        <>
                          <Cart /> Add to Cart
                        </>
                      )}
                    </button>
                    {/* <button
                      className="button button--aylen button--round-l button--text-thick  gradient col-lg-3 col-md-4 col-11   flex-center gap-2"
                      onClick={handleAddToCart}
                      disabled={cartState.cartVisible}
                    >
                      <Cart /> Add to Cart
                    </button> */}
                    <button
                      className="button button--aylen button--round-l button--text-thick  gradient col-xxl-3 col-lg-4 col-md-5 col-11 "
                      onClick={handleBookHomeCollectionClick}
                    >
                      Book Home Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section id="faq" className="faq pt-5 ">
        <div className="row">
          <div className="title col-12 float-start text-center">
            <h2 className="">Frequently Asked Questions.</h2>
          </div>
          <div className="col-lg-11 col-12 m-auto float-start">
            <Faq className="minusbottom  " />
          </div>
        </div>
      </section>
    </>
  );
};
