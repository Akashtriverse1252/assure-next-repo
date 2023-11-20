"use client";

import { AccordionComponent } from "@/components/Accordian";
import { ChooseAssure } from "@/components/ChooseAssure";
import { Cart } from "@/components/svg-components/Cart";
import { Rupees } from "@/components/svg-components/Rupees";
import { useCart } from "@/context/context";
import { AddCard, Addchart, CardGiftcardOutlined } from "@mui/icons-material";
import React from "react";
import package_info from "@/Data/All_packages.json";
import { useParams } from "next/navigation";

export const page = () => {
  const { cartState, cartDispatch } = useCart();
  const params = useParams();

  const slug = params.slug;
  const project = package_info.find((p) => p.Slug === slug);
  // console.log("this is the slug", slug);

  // console.log(project);
  const _discount = (
    ((project.ActualPrice - project.DiscountPrice) / project.ActualPrice) *
    100
  ).toFixed();

  const handleAddToCart = () => {
    const product = {
      id: project.id,
      name: project.PackageName,
      price: project.ActualPrice,
      dis_price: project.DiscountPrice,
      quantity: 1,
      discount: _discount,
    };
    const existingProduct = cartState.products.find((p) => p.id === product.id);

    if (existingProduct) {
      // If the product exists, update its quantity
      cartDispatch({
        type: "INCREMENT",
        productId: product.Slug,
      });
    } else {
      // If the product doesn't exist, add it to the cart
      cartDispatch({
        type: "ADD_TO_CART",
        product,
      });
    }
  };
  const discount =
    (project.DiscountPrice - project.ActualPrice) / project.ActualPrice / 100;
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section>
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center">
                  <h3>{project.title}</h3>
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
                          <strong>{project.PackageName}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>About Package</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12">
                        <p>{project.TestDetails}</p>
                      </div>
                    </div>
                  </div>
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
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Exclusive Offer</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12 ">
                        <div className="packageprice d-flex align-items-center gap-5">
                          <div className="actualprice">
                            <Rupees /> <span>{project.ActualPrice}</span>
                          </div>
                          <div className="discountprice gradient  text-white m-0">
                            <Rupees /> <span>{project.DiscountPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Highlights</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12 ">
                        <div className="highlights flex-center flex-wrap gap-3 justify-content-start">
                          <p>{project.TestInfo.length}</p>

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
                        <AccordionComponent ParameterData={project.TestInfo} />
                        <div className="col-12 flex-center mt-5 mb-5 justify-content-start gap-3">
                          <a
                            className="button button--aylen button--round-l button--text-thick  gradient col-lg-3 col-12 d-flex justify-content-center gap-2"
                            onClick={handleAddToCart}
                          >
                            <Cart /> Add to Cart
                          </a>
                          <a className="button button--aylen button--round-l button--text-thick  gradient col-lg-3 col-12">
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
        </section>
        <ChooseAssure />
      </main>
    </>
  );
};
export default page;
