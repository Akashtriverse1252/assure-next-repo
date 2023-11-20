"use client";

import { Accordian } from "@/components/Accordian";
import { ChooseAssure } from "@/components/ChooseAssure";
import { Cart } from "@/components/svg-components/Cart";
import { Rupees } from "@/components/svg-components/Rupees";
import { useCart } from "@/context/context";
import {
  AddCard,
  Addchart,
  CardGiftcardOutlined,
  CloseFullscreen,
} from "@mui/icons-material";
import React from "react";
import { useParams } from "next/navigation";
import data from "@/Data/Test_detail.json";

export const page = () => {
  const { cartState, cartDispatch } = useCart();
  const params = useParams();

  const Slug = params.slug;
  const project = data.test_data.find((p) => p.Slug === Slug);

  console.log(project);
  const _discount =
    ((project.Test_Amount - project.Discount_Amount) / project.Test_Amount) *
    100;

  const handleAddToCart = () => {
    const product = {
      id: project.Slug,
      name: project.Test_Name,
      price: project.Test_Amount,
      dis_price: project.Discount_Amount,
      quantity: 1,
      discount: _discount,
    };
    const existingProduct = cartState.products.find(
      (p) => p.Slug === product.Slug
    );

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
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center">
                  <h3>{project.Test_Category}-test</h3>
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
                  {/* <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Parameters Included</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12">
                        <p>26</p>
                      </div>
                    </div>
                  </div> */}
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
                            <Rupees /> <span>{project.Test_Amount}</span>
                          </div>
                          <div className="discountprice gradient  text-white m-0">
                            <Rupees /> <span>{project.Discount_Amount}</span>
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
                        <p>
                          UPTO <strong>{_discount}%</strong>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Who is it for</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12 ">
                        <div className="highlights flex-center flex-wrap gap-3 justify-content-start">
                          <p>{project.Who_is_it_for}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Pre test information</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12 ">
                        <div className="highlights flex-center flex-wrap gap-3 justify-content-start">
                          <p>{project.Pre_test_information}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Book Now</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12">
                        {/* <Accordian />  */}
                        <div className="col-12 flex-center mt-1 mb-2 justify-content-start gap-3">
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
